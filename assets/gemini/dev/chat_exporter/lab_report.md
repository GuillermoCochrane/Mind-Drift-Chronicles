# EXTENSION_LAB

## Objetivo

Recuperar automáticamente el JSON completo de cualquier conversación de ChatGPT desde la interfaz web y reutilizar el pipeline existente de **AI Chat Exporter** para generar documentos Markdown.

Este documento registra el proceso de investigación, las hipótesis evaluadas, los experimentos realizados y las decisiones técnicas que llevaron a la arquitectura propuesta para la futura extensión del navegador.

---

# Contexto

Actualmente AI Chat Exporter requiere obtener manualmente el archivo `conversation.json` desde DevTools.

El objetivo de esta investigación es eliminar completamente ese paso mediante una extensión Chrome (Manifest V3) capaz de capturar el JSON antes de que la aplicación web de ChatGPT lo procese.

La extensión deberá actuar únicamente como **capturador**, reutilizando el parser y el renderer ya existentes en el proyecto principal.

---

# Hipótesis

| ID    | Objetivo                                                                                     | Estado        | Evidencia                                                                                                                                               | Conclusión                                                                                                                               |
|-------|----------------------------------------------------------------------------------------------|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| H‑001 | El endpoint `GET /backend-api/conversation/{id}` devuelve el JSON completo con un árbol `mapping`. | ✔ Confirmada  | Inspección de Network: 200 OK, response de ~44‑276 kB con objeto `mapping`. Vista previa y copia manual del response.                                   | El backend sigue devolviendo la conversación íntegra en ese endpoint.                                                                   |
| H‑002 | Un `fetch()` desde consola con `credentials:"include"` reproduce el mismo JSON.                 | ✖ Refutada    | El fetch devuelve 404 `conversation_inaccessible`. La primera petición de la página sí es 200, pero las posteriores fallan.                             | El endpoint solo responde correctamente durante la carga inicial de la SPA; las llamadas manuales no son equivalentes.                 |
| H‑003 | Copiar los headers exactos (incluido `Authorization: Bearer`) mediante "Copy as fetch" soluciona el 404. | ✖ Refutada    | El fetch copiado devuelve 200 pero con HTML (no JSON) o también 404. No se logró reproducir la respuesta JSON de forma fiable.                          | Hay un contexto de navegación o token efímero que la reproducción manual no incluye.                                                   |
| H‑004 | El JSON queda almacenado en variables globales de React (Router loader, React Query).          | ⚠ Pendiente   | `__REACT_QUERY_CACHE__` vacío. `__reactRouterDataRouter.state.loaderData` tiene `routes/_conversation.c.$conversationId: null`.                       | Los datos no se exponen en el estado global accesible; podrían estar en el ámbito privado de un hook o store interno.                   |
| H‑005 | La aplicación consume la respuesta mediante `Response.prototype.json()`.                        | ✖ Refutada    | El hook en `Response.prototype.json` nunca se disparó para la conversación (llegaba tarde).                                                            | Probablemente `json()` ya fue llamado antes de instalar el hook, o la app usa otro mecanismo (streams).                                 |
| H‑006 | La aplicación consume la respuesta a través de `ReadableStream` (`getReader`).                  | ⚠ Pendiente   | Al interceptar `getReader` se observaron muchísimas llamadas, incluso sin recargar. Los traces mencionan streams vivos de telemetría y otros procesos. | La app sí utiliza streams intensivamente, pero no se aisló cuál corresponde a la conversación principal.                                |
| H‑007 | El hook sobre `window.fetch` capturará la primera petición de la conversación.                   | ✖ Refutada    | Al recargar después de instalar el hook no apareció ningún `console.trace` para el endpoint. El fetch inicial ya había ocurrido o usaba otra referencia. | La app probablemente guarda una referencia a `fetch` antes de que el hook se instale, o el fetch ocurre en un contexto no interceptable. |
| H‑008 | Los `fetch` que aparecen al hacer scroll corresponden a cargas parciales de la conversación.     | ✔ Confirmada  | Los logs de `console.trace` mostraban llamadas `safePost`, `jsonRequest`, `completeRequest` y otras relacionadas con React Query y la UI.              | Son peticiones de telemetría, métricas y posiblemente datos adicionales (stream_status, textdocs), no la carga del mapping principal.    |
| H‑009 | "Copy response" de DevTools proporciona el JSON completo de manera manual y repetible.           | ✔ Confirmada  | Se copió exitosamente el response de la petición 200; contenía el `mapping` completo.                                                                   | La información está disponible en el navegador; el problema es cómo capturarla automáticamente sin intervención manual.                |
| H‑010 | Una extensión Chrome con `"run_at": "document_start"` puede interceptar la respuesta antes de que la aplicación la consuma. | ⚠ Pendiente   | No se implementó aún. Conceptualmente es sólida: el código de la extensión se ejecutaría antes que cualquier script de ChatGPT.                        | Es la vía más prometedora para automatizar la captura sin depender de copias manuales ni proxies externos.                             |

---

# Experimentos

| ID     | Objetivo                                                                                                      | Resultado                                                                                                                                                                                                                                                                                                      | Observaciones                                                                                                                                                  | Conclusión                                                                                                                                        |
|--------|---------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| E‑001  | Verificar el endpoint y la estructura del response en Network.                                                | Petición `GET /backend-api/conversation/{id}` 200 OK. Response JSON contiene `title`, `create_time`, `mapping` con nodos anidados.                                                                                                                                                                               | Se inspeccionó manualmente. El tamaño varió (44.7 kB a 276 kB). La estructura coincide con el formato esperado.                                              | El backend y el formato son válidos.                                                                                                               |
| E‑002  | Ejecutar un `fetch` simple con `credentials:"include"` desde la consola.                                       | 404 Not Found; body: `{"detail":{"message":"Inicia sesión para ver esta conversación.","code":"conversation_inaccessible"}}`.                                                                                                                                                                                    | Se probó varias veces. Falló sistemáticamente después de la primera carga de la página.                                                                       | La autenticación por cookies no es suficiente; se necesita algo más que solo está presente durante la navegación inicial.                            |
| E‑003  | Usar "Copy as fetch" del Network y ejecutarlo desde consola.                                                   | Devolvió 200 con HTML (la SPA) o 404. No se obtuvo el JSON de manera consistente.                                                                                                                                                                                                                             | Se copiaron todos los headers, incluyendo Authorization. El comportamiento fue errático.                                                                     | El contexto de la petición original no se puede replicar completamente desde un `fetch` posterior.                                                   |
| E‑004  | Inspeccionar `performance.getEntriesByType("resource")` para ver detalles de la petición.                      | Listó la URL del endpoint con `initiatorType: "fetch"`, `transferSize: 323 kB`, `decodedBodySize: 1.88 MB`.                                                                                                                                                                                                   | Confirmó que la respuesta se descarga realmente y no viene de caché.                                                                                         | La petición existe y es medible.                                                                                                                   |
| E‑005  | Buscar el estado de la conversación en `window.__NEXT_DATA__` y otros globales.                                 | `__NEXT_DATA__`: undefined. No es una aplicación Next.js.                                                                                                                                                                                                                                                     | Se exploraron múltiples objetos globales.                                                                                                                    | No hay un estado global expuesto que contenga el `mapping`.                                                                                        |
| E‑006  | Hook en `Response.prototype.json`.                                                                             | El hook se instaló pero `window.__conversation` permaneció `undefined`.                                                                                                                                                                                                                                        | Instalado tras la carga; la conversación ya había sido parseada. Al recargar con el hook previamente pegado, tampoco se capturó (posiblemente usen streams). | `Response.json()` no es el punto adecuado para interceptar en esta aplicación.                                                                     |
| E‑007  | Hook en `window.fetch` con `console.trace` tras recargar.                                                      | Ningún trace para el endpoint de conversación. Aparecieron traces de otros fetch (telemetría, `safePost`, etc.) especialmente al hacer scroll.                                                                                                                                                                 | El hook no capturó la carga inicial; se ejecutó después de que la app ya obtuvo la conversación.                                                             | El fetch inicial no se puede interceptar con un hook instalado desde la consola después de cargar la página.                                       |
| E‑008  | Explorar `__reactRouterDataRouter` y su estado.                                                                | `router.state.loaderData` mostraba objetos pero `routes/_conversation.c.$conversationId` era `null`. No aparecía el `mapping`.                                                                                                                                                                               | Se examinó con `console.dir` a profundidad 4‑8.                                                                                                             | React Router no expone los datos de la conversación en su estado global.                                                                           |
| E‑009  | Inspeccionar `__REACT_QUERY_CACHE__`.                                                                          | Objeto vacío `{}`.                                                                                                                                                                                                                                                                                            | React Query no almacena la conversación en ese objeto global.                                                                                                | El almacenamiento en caché usa otro mecanismo.                                                                                                     |
| E‑010  | Hook en `ReadableStream.prototype.getReader`.                                                                   | Inmediatamente tras pegar el script aparecieron innumerables llamadas a `getReader()`, sin necesidad de recargar. Los traces mostraban archivos minificados como `4813494d-*.js`.                                                                                                                              | La aplicación tiene muchos streams activos (telemetría, textdocs, etc.). No se pudo aislar el stream de la conversación.                                    | La app sí usa ReadableStream; podría ser el mecanismo para procesar la conversación, pero hace falta filtrar por URL.                               |
| E‑011  | Usar "Copy response" sobre la petición 200 en Network.                                                         | Se obtuvo un JSON enorme que comienza con `{"title":"...","create_time":...` e incluye el `mapping`.                                                                                                                                                                                                        | Confirmó que el navegador ya tiene el dato completo.                                                                                                        | La captura manual es posible, por tanto el problema es solamente la automatización.                                                               |
| E‑012  | Guardar la sesión como HAR (sanitized) para analizar offline.                                                   | Se generó un archivo HAR; contenía la petición 200 con el response completo (mapping incluido) y otras llamadas (`stream_status`, `textdocs`).                                                                                                                                                                 | No se usó para extracción automática, solo como evidencia.                                                                                                  | El HAR confirma que la respuesta está completa y accesible.                                                                                       |

---

# Restricciones descubiertas

- El endpoint `/backend-api/conversation/{id}` solo responde con el JSON completo durante la primera solicitud asociada a la navegación (probablemente un loader interno). Cualquier `fetch` posterior desde la consola recibe `404 conversation_inaccessible`.
- El `Authorization: Bearer` presente en las peticiones de la página no es suficiente para replicar la solicitud desde `fetch` manual; se requiere algún token o estado efímero vinculado a la sesión/navegación.
- No se encontró un objeto global (React Router, React Query, window) que exponga el `mapping` después de la carga.
- Los intentos de interceptar `Response.prototype.json` o `window.fetch` desde la consola llegan siempre después de que la aplicación ya consumió la respuesta, por lo que no capturan la conversación.
- `window.fetch` no es el `fetch` nativo; la aplicación ya lo reemplaza con una versión propia (observado en `window.fetch.toString()`), lo que puede interferir con hooks posteriores.
- La interfaz de ChatGPT no expone un identificador único y estable en la URL para todos los tipos de conversación (cambia entre `/c/`, `/g/.../c/`).

---

# Arquitectura propuesta

## Principios

La extensión debe respetar la arquitectura ya utilizada por AI Chat Exporter:

* Responsabilidad única.
* Bajo acoplamiento.
* Reutilización del pipeline existente.
* Evolución incremental.

La captura del JSON debe mantenerse completamente desacoplada del parser y de los exportadores.

---

## Flujo general

```text
ChatGPT
      │
      ▼
Capturador (extensión / proxy)
      │
      ▼
JSON en crudo
      │
      ▼
Loader (loader.js)
      │
      ▼
Parser (parser.js) – recorre mapping, extrae author.role, content.parts, timestamps
      │
      ▼
Modelo canónico: Conversation { messages[] }
      │
      ▼
Renderers: Markdown (markdown.js), HTML, PDF, Obsidian, etc.
```

---

## Módulos iniciales (solo ChatGPT + Markdown)

- **`loader.js`** – obtiene el objeto JSON (de archivo, del interceptor de la extensión, etc.).
- **`parser.js`** – recorre el `mapping`, extrae `author.role`, `content.parts`, timestamps, etc. Produce un array ordenado de mensajes. No ordena por `create_time` (rompe la estructura de ramas y regeneraciones); en su lugar recorre el árbol en orden.
- **`cleaner.js`** – limpia el contenido (opcional).
- **`markdown.js`** – formatea los mensajes en Markdown.
- **`index.js`** – orquesta el flujo.

---

## Extensión Chrome como capturador automático

- `manifest.json` con `"run_at": "document_start"` para inyectar un content script antes de que cargue ChatGPT.
- El content script podría interceptar `Response.prototype.json` (o `ReadableStream`) y guardar el JSON en `window.__conversation` o enviarlo al background script.
- Alternativa: proxy (mitmproxy) para capturar la respuesta HTTPS independientemente del frontend.

---

## Interfaz futura (post‑MVP)

```ts
interface Provider {
  name: string;
  detect(raw: any): boolean;
  parse(raw: any): Conversation;
}
```

Para soportar Gemini, Claude, etc., añadiendo solo un `Provider` sin modificar el núcleo.

---

# Tecnologías evaluadas

| Tecnología / API               | ¿Se probó? | ¿Se descartó? | ¿Quedó pendiente? | Notas |
|--------------------------------|------------|---------------|-------------------|-------|
| `fetch`                        | ✅         | ❌ (manual falló) | ✅ como parte de la extensión | No reproducible desde consola tras carga. |
| `Response.prototype.json`      | ✅         | ❌ (no capturó) | ✅ (puede funcionar con inyección temprana) | Se llegó tarde. |
| `ReadableStream` / `getReader` | ✅         | ❌ (alto ruido) | ✅ (filtrar por URL) | La aplicación lo usa masivamente. |
| `window.fetch` (hook)          | ✅         | ❌ (no interceptó la carga) | ✅ (posible con document_start) | La aplicación ya envuelve fetch. |
| `window.__reactRouterDataRouter`| ✅        | ❌ (datos nulos) | ❌ | No expone el mapping. |
| `window.__REACT_QUERY_CACHE__` | ✅         | ❌ (vacío) | ❌ | No usado. |
| `performance.getEntriesByType` | ✅         | – | – | Útil para confirmar la existencia de la petición. |
| Chrome DevTools – Network      | ✅         | – | – | Herramienta principal de investigación. |
| "Copy as fetch" / "Copy response" / "Copy as HAR" | ✅ | – | – | Copy response funciona manualmente. |
| Userscripts (Tampermonkey)     | – | – | ✅ | Alternativa a extensión para inyección temprana. |
| `chrome.webRequest`            | – | – | ✅ | Podría usarse para interceptar la petición. |
| `chrome.debugger`              | – | – | ❌ | Demasiado invasivo; no considerado prioritario. |
| Content Scripts (MV3)          | – | – | ✅ | Vía principal para la extensión. |
| Service Worker (MV3)           | – | – | ✅ | Para manejo en background. |
| mitmproxy / HTTP Toolkit       | – | – | ✅ | Alternativa de proxy para captura independiente. |
| `chat_processor.js` (Alex)     | ✅         | – | ✅ | Base para el parser; necesita modularizarse. |
| `JSON.parse`                   | – | – | ✅ | Podría ser interceptado como último recurso. |

---

# Ideas descartadas

- **Repetir el fetch desde consola** (con o sin headers copiados): nunca se logró obtener el JSON de manera reproducible.
- **Buscar el estado en `window`**: todos los objetos globales inspeccionados resultaron vacíos o nulos.
- **Ordenar los mensajes por `create_time`** (como hace Alex): rompe la estructura de ramas y regeneraciones; es mejor recorrer el árbol en orden.
- **Construir directamente una solución multi‑proveedor**: se acordó hacer primero solo ChatGPT + Markdown para no sobre‑ingenierizar.
- **Usar `chrome.debugger`**: demasiado pesado y requiere permisos elevados.

---

# Pendientes

1. **Capturador automático**: implementar la extensión Chrome con `document_start` que intercepte la respuesta de la conversación (posiblemente hookeando `Response.prototype.json` o `ReadableStream` y filtrando por URL).
2. **Confirmar el mecanismo exacto de consumo de la respuesta**: determinar si la aplicación usa `json()`, streams, o ambos, para la conversación principal.
3. **Refactorizar `chat_processor.js`** en módulos independientes: `loader`, `parser` (recorrido del árbol), `cleaner`, `renderer/markdown`.
4. **Pipeline completo funcional**: desde la captura automática hasta la descarga del Markdown.
5. **Proxy como alternativa**: si la extensión resulta compleja, probar con mitmproxy para capturar el tráfico HTTPS.
6. **Validación con múltiples conversaciones**: probar el parser con chats que incluyan ramas, herramientas, imágenes, etc.

---

# Próximos pasos

1. Implementar una extensión mínima (Manifest V3).
2. Verificar la captura automática del JSON.
3. Integrar la captura con el pipeline existente.
4. Automatizar la descarga del Markdown.
5. Validar el funcionamiento con múltiples conversaciones.
6. Recién entonces comenzar la expansión hacia otros formatos y proveedores.

---

# Cronología

1. **Descubrimiento del endpoint** – Se identifica `/backend-api/conversation/{id}` devolviendo 200 con `mapping`.  
2. **Fallo del fetch manual** – El script simple devuelve 404; se investigan headers y autenticación.  
3. **Experimentación con hooks** – Se prueban `Response.prototype.json`, `window.fetch`, `ReadableStream.getReader`. Todos fallan en capturar la conversación inicial, pero revelan la complejidad del runtime de ChatGPT.  
4. **Inspección del estado de React** – Se examinan `__reactRouterDataRouter` y `__REACT_QUERY_CACHE__`; no contienen los datos.  
5. **Éxito manual con "Copy response"** – Se confirma que el navegador posee el JSON íntegro.  
6. **Cambio de estrategia** – Se descarta la idea de re‑hacer la petición y se opta por interceptar la respuesta antes de que la aplicación la procese.  
7. **Diseño de la extensión** – Se acuerda una arquitectura modular con inyección temprana (`document_start`).  
8. **Enfoque KISS** – Se decide limitar el primer ciclo a ChatGPT + Markdown, postergando otros proveedores y formatos.  
9. **Próximo paso** – Refactorización del parser de Alex e implementación del capturador en extensión.

---

# Estado actual

## Confirmado

- El backend continúa enviando el árbol completo de la conversación.
- El parser actual de AI Chat Exporter puede reutilizarse.
- La arquitectura modular permite integrar un capturador sin modificar el núcleo.
- "Copy response" desde DevTools funciona manualmente.

## Pendiente

- Capturar automáticamente el JSON durante la carga inicial.
- Implementar la extensión Chrome.
- Integrar la captura con el pipeline existente.
- Automatizar la descarga del Markdown sin intervención manual.

---
