## Usuario · 7/9/26, 6:31:25 p. m.

Actuá como asesor técnico en extensiones de Chrome Manifest V3.

Estoy desarrollando una extensión que exporta conversaciones de ChatGPT. Actualmente, cuando el usuario pide exportar, el background llama a `chrome.downloads.download(...)` y responde `success: true` al popup de inmediato.

El problema es que el popup muestra “exportado con éxito” antes de confirmar que la descarga realmente terminó. Quiero corregir eso.

Necesito que investigues y me respondas:

1. ¿Cómo puedo detectar cuándo una descarga terminó realmente en Manifest V3?
2. ¿Qué eventos o APIs ofrece `chrome.downloads` para monitorear el ciclo de vida de una descarga?
3. ¿Cómo puedo saber si la descarga falló o fue cancelada?
4. ¿Cuál es el flujo recomendado para:
   - iniciar la descarga,
   - esperar a que termine,
   - y recién después responder al popup con éxito o error?
5. ¿Necesito algún permiso adicional además de `downloads`?
6. ¿Hay alguna limitación del service worker que deba tener en cuenta al esperar eventos asíncronos?

Quiero una explicación clara y práctica, con un ejemplo mínimo en JavaScript si es posible.

No me interesa el contenido de las conversaciones. Solo el mecanismo de descarga y confirmación.

## Asistente · 7/9/26, 6:31:26 p. m.

Perfecto. Voy a contrastarlo con la API actual de `chrome.downloads`, especialmente `downloads.onChanged`, los estados de `DownloadItem` y el comportamiento del service worker de MV3.

## Asistente · 7/9/26, 6:31:31 p. m.

Sí: el punto clave es que **`chrome.downloads.download()` confirma que Chrome creó/inició el `DownloadItem`, no que el archivo haya terminado de descargarse**. La propia API devuelve un `Promise<number>` con el `downloadId`; la confirmación real de finalización viene después mediante `chrome.downloads.onChanged`. citeturn801077view1
## 1. ¿Cómo detectar que una descarga terminó realmente?
Con:
```js
chrome.downloads.onChanged.addListener((delta) => {
    // ...
});
```
Ese evento se dispara cuando cambia alguna propiedad del `DownloadItem` —salvo `bytesReceived` y `estimatedEndTime`— y `delta` incluye el `downloadId` y las propiedades modificadas. Entre ellas está `state`. citeturn241087search1turn241087view0
El estado puede ser:
```js
"in_progress"
"complete"
"interrupted"
```
`complete` significa que la descarga terminó correctamente; `interrupted` significa que fue interrumpida. citeturn801077view0
Por lo tanto, el patrón fundamental es:
```js
if (delta.state?.current === "complete") {
    // descarga realmente terminada
}
```

---
## 2. ¿Qué eventos y APIs ofrece `chrome.downloads`?
Para tu caso, los importantes son estos:
### `chrome.downloads.download()`
Inicia la descarga y devuelve el `downloadId`.
```js
const downloadId = await chrome.downloads.download({
    url,
    filename: "conversation.md"
});
```
La promesa se resuelve con el ID del `DownloadItem`, **no cuando termina el archivo**. citeturn801087view1
### `chrome.downloads.onCreated`
Se dispara cuando comienza una descarga y entrega el `DownloadItem`. citeturn241087search1
En tu caso no hace falta necesariamente, porque `download()` ya te da el ID.
### `chrome.downloads.onChanged`
Este es **el importante para vos**.
```js
chrome.downloads.onChanged.addListener((delta) => {
    console.log(delta);
});
```
Sirve para observar cambios de `state`, `error`, `filename`, `endTime`, etc. citeturn241087search1
### `chrome.downloads.search()`
Permite obtener posteriormente el `DownloadItem` completo:
```js
const [item] = await chrome.downloads.search({ id: downloadId });
```
Esto puede ser útil como respaldo o para consultar detalles después de la transición. La API permite buscar directamente por `id`. citeturn757540view1

---
## 3. ¿Cómo saber si falló o fue cancelada?
Cuando pasa a:
```js
state === "interrupted"
```
podés mirar:
```js
delta.error?.current
```
Chrome expone un `InterruptReason` bastante detallado. Incluye, entre otros:
```text
FILE_FAILED
FILE_ACCESS_DENIED
FILE_NO_SPACE
FILE_TOO_LARGE
NETWORK_FAILED
NETWORK_TIMEOUT
NETWORK_DISCONNECTED
SERVER_FAILED
SERVER_UNAUTHORIZED
SERVER_FORBIDDEN
USER_CANCELED
USER_SHUTDOWN
CRASH
```
etc. citeturn801077search0turn801077view0
Así podés distinguir, por ejemplo:
```js
if (delta.state?.current === "interrupted") {
    const reason = delta.error?.current;
    if (reason === "USER_CANCELED") {
        // Usuario canceló
    } else {
        // Error de descarga
    }
}
```
Y un detalle importante: **no conviene intentar parsear mensajes de error humanos**. Chrome documenta esos códigos de interrupción como la información estructurada disponible, mientras que los strings de `runtime.lastError` no tienen garantía de estabilidad entre versiones. citeturn801077search0turn801077view1

---
# 4. Flujo recomendado
Yo lo estructuraría así:
```text
Popup
  │
  │ EXPORT
  ▼
Background / Service Worker
  │
  ├─ chrome.downloads.download()
  │       │
  │       └── obtiene downloadId
  │
  ├─ espera onChanged(downloadId)
  │
  ├─ state === "complete"
  │       │
  │       └── SUCCESS
  │
  └─ state === "interrupted"
          │
          └── ERROR / CANCELLED
```
El cambio conceptual importante en tu extensión es este:
### Ahora probablemente hacés algo así
```js
const downloadId = await chrome.downloads.download(options);
sendResponse({
    success: true,
    downloadId
});
```
Eso significa:
> "Chrome aceptó/inició la descarga."
No significa:
> "El archivo ya está terminado."
### Debería ser
```js
const downloadId = await chrome.downloads.download(options);
const result = await waitForDownload(downloadId);
sendResponse(result);
```
Donde `waitForDownload()` espera el `onChanged`.

---
# Ejemplo mínimo
Una implementación sencilla y limpia sería:
```js
function waitForDownload(downloadId) {
    return new Promise((resolve) => {
        const listener = (delta) => {
            if (delta.id !== downloadId) return;
            if (delta.state?.current === "complete") {
                chrome.downloads.onChanged.removeListener(listener);
                resolve({
                    success: true,
                    downloadId
                });
            }
            if (delta.state?.current === "interrupted") {
                chrome.downloads.onChanged.removeListener(listener);
                const reason = delta.error?.current ?? "UNKNOWN";
                resolve({
                    success: false,
                    downloadId,
                    error: reason
                });
            }
        };
        chrome.downloads.onChanged.addListener(listener);
    });
}
```
Y después:
```js
async function exportConversation(options) {
    try {
        const downloadId = await chrome.downloads.download(options);
        return await waitForDownload(downloadId);
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
```
Entonces:
```js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type !== "EXPORT_CONVERSATION") {
        return;
    }
    exportConversation(message.options)
        .then(result => {
            sendResponse(result);
        });
    return true;
});
```
Ese `return true` es importante si estás usando `sendResponse()` de forma asíncrona desde el listener de mensajes.

---
# 5. ¿Necesitás otro permiso?
No.
Para utilizar `chrome.downloads`, el permiso:
```json
{
    "permissions": [
        "downloads"
    ]
}
```
es suficiente. La documentación actual indica explícitamente que `"downloads"` es el permiso necesario para usar esta API. citeturn241087view0
No necesitás un permiso especial para:
```js
chrome.downloads.onChanged
```
ni para:
```js
chrome.downloads.search()
```
Hay un permiso adicional llamado `"downloads.open"`, pero **eso es solamente para `chrome.downloads.open()`**, no para monitorear descargas. citeturn801077view1

---
# 6. ¿Y el service worker de Manifest V3?
Acá está la parte que merece un poquito más de cuidado.
Un service worker de MV3 **no es un proceso permanente**. Chrome normalmente lo termina después de unos 30 segundos de inactividad y puede despertarlo nuevamente cuando llega un evento. Además, las variables globales se pierden cuando el worker termina, por lo que Chrome recomienda persistir estado importante. citeturn757540search0
Pero hay una buena noticia:
**`chrome.downloads.onChanged` es exactamente el tipo de mecanismo basado en eventos que encaja bien con MV3.**
El listener se registra:
```js
chrome.downloads.onChanged.addListener(...)
```
y cuando llega un evento que despierta al service worker, éste vuelve a ejecutarse. Chrome documenta que los eventos de extensiones pueden despertar el worker y que recibir eventos o llamar APIs de extensión reinicia el temporizador de inactividad. citeturn757540search0turn757540search3
### El problema real
No confiaría en algo como:
```js
const pendingDownloads = new Map();
```
y asumir:
```text
downloadId -> Promise
```
durante arbitrariamente mucho tiempo.
Porque esa memoria es efímera. Si el worker muere, la `Map` desaparece. citeturn757540search0
Para una descarga normal de un archivo Markdown/JSON de una extensión, probablemente sea una operación muy corta y el patrón anterior funcione perfectamente. Pero **arquitectónicamente**, si querés hacerlo robusto, conviene que el estado crítico no dependa únicamente de memoria global.

---
# La solución que yo usaría en tu extensión
Dado que tu arquitectura ya tiene:
```text
popup
   ↓
background/service worker
   ↓
chrome.downloads.download()
```
haría que el background sea quien controle **todo el ciclo de vida**:
```js
async function startDownload(options) {
    const downloadId = await chrome.downloads.download(options);
    return await waitForDownload(downloadId);
}
```
Y el popup recibe únicamente uno de estos estados:
```js
{
    success: true,
    downloadId
}
```
o:
```js
{
    success: false,
    downloadId,
    error: "USER_CANCELED"
}
```
Así el popup ya no tiene que interpretar:
> "la descarga fue iniciada"
sino:
> "la descarga terminó correctamente"
Eso separa bastante bien las responsabilidades.

---
## Un pequeño detalle importante
Hay una diferencia semántica interesante:
```js
await chrome.downloads.download(...)
```
significa aproximadamente:
> **"Chrome creó el trabajo de descarga y me dio su ID."**
Mientras que:
```js
delta.state.current === "complete"
```
significa:
> **"Chrome considera completada la descarga."**
De hecho, la documentación indica que cuando todos los datos fueron obtenidos y la descarga es válida, el archivo temporal se renombra al destino y recién ahí el estado pasa a `"complete"`, disparándose `onChanged`. citeturn801077view0
Ese es exactamente el evento que estabas buscando. No hace falta inventar polling, `setTimeout`, mirar la carpeta Downloads ni hacer magia negra estilo Skynet.
### En resumen
| Momento | API/evento | Significado |
|---|---|---|
| Solicitar descarga | `downloads.download()` | Intentar iniciar |
| Devuelve `downloadId` | `Promise<number>` | Descarga creada |
| Cambia estado | `downloads.onChanged` | Hay progreso/cambio |
| `state = "complete"` | `onChanged` | ✅ Descarga terminada |
| `state = "interrupted"` | `onChanged` | ❌ Falló/interrumpida |
| `error = "USER_CANCELED"` | `onChanged` | ❌ Usuario canceló |
Fuentes oficiales de Chrome: `chrome.downloads` y ciclo de vida de Extension Service Workers. citeturn241087view0turn757540search0
Para tu caso concreto, **yo cambiaría el contrato de tu background de "download started" a "download completed/failed"**, usando `downloadId` como correlación. Ese pequeño cambio deja la arquitectura bastante más correcta.