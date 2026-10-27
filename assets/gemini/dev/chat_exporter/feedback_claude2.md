# Peer Review — Evolución de AI Chat Exporter (Septiembre 2026)

> Comparación entre el estado del proyecto el 24 de julio (v1.1.2) y el 9 de septiembre (v1.5.1).

---

## Resumen ejecutivo

En 47 días el proyecto pasó de ser un prototipo con extensión funcional y pipeline desacoplado a un **producto publicable, multi-proveedor, con captura SSE, sitio web oficial, sistema multiidioma y una extensión enviada a la Chrome Web Store**. Si la evolución anterior (v0.5.9.1 → v1.1.2) fue un salto de madurez, esta (v1.1.2 → v1.5.1) es un salto de **producto**.

---

## Métricas de evolución

| Dimensión | 24 de julio (v1.1.2) | 9 de septiembre (v1.5.1) | Cambio |
|-----------|----------------------|--------------------------|--------|
| **Versión** | `1.1.2` | `1.5.1` | 4 minor releases + 9 patches |
| **Commits totales** | ~146 | 419 | +273 commits (~65% del historial total) |
| **Módulos en `src/`** | 12 + `main.js` | 15 archivos core + 6 entry/config + 37 archivos de extensión | ~3x |
| **Archivos de extensión** | 4 (`manifest`, `inject`, `content`, `background`) | 37 (popup, handlers, módulos, estilos, idiomas, providers) | De prototipo a producto |
| **Tests automatizados** | 9 baterías | 11 baterías, 44 test cases | +2 baterías (+22 test cases) |
| **Opciones de CLI** | 10 | 12 (+ `--role`, `--compact` mejorado) | +2 |
| **ADRs** | 30 | 34 | +4 |
| **Docs en `docs/`** | 6 archivos + 3 subdirectorios | 8 archivos + 1 subdirectorio (`DATA_FLOW.md` nuevo) | +2 |
| **Páginas web** | 0 | 6 (`index.html` + 5 páginas internas) | De 0 a sitio completo |
| **CSS web** | 0 | 16 archivos modulares + 6 orquestadores | De 0 a sistema de diseño |
| **JS web** | 0 | 8 orquestadores + 9 módulos compartidos + 7 traducciones | De 0 a app multiidioma |
| **Proveedores soportados** | 1 (ChatGPT) | 3 en detección (ChatGPT, DeepSeek, Gemini) | +2 |
| **Flujos de captura** | 1 (fetch intercept) | 2 (paginación + SSE stream) | +1 |
| **Idiomas** | 1 (español) | 2 (español + inglés) en extensión y web | +1 |
| **devDependencies** | 0 | 1 (`esbuild`) | +1 (para build) |
| **Runtime dependencies** | 0 | 0 | Sin cambios ✔ |

---

## Cambios arquitectónicos clave

### 1. Nuevo directorio `configuration/`

```text
ANTES (v1.1.2)                  AHORA (v1.5.1)
src/                            src/
├── core/                       ├── configuration/
│   ├── index.js (pipeline)     │   ├── pipelineConfig.js
│   ├── ...                     │   └── pipelineProfiles.js
│   └── sources/                ├── core/
│       ├── index.js            │   ├── exporter.js
│       ├── jsonFile.js         │   ├── pipeline.js
│       └── extensionSource.js  │   ├── sorter.js          ← NUEVO
│                               │   ├── ...
│                               │   └── sources/
│                               │       ├── index.js
│                               │       ├── jsonFile.js
│                               │       ├── jsonFile.stub.js
│                               │       └── extensionSource.js
├── interfaces/                 ├── interfaces/
│   ├── cli.js                  │   ├── cli.js
│   └── extension/              │   └── extension/
│       ├── background.js       │       ├── background.js
│       ├── content.js          │       ├── content.js
│       ├── inject.js           │       ├── extensionCore.js
│       └── manifest.json       │       ├── inject.js
│                               │       ├── manifest.json
│                               │       ├── popup.html
│                               │       ├── js/  (12 archivos)
│                               │       ├── modules/  (12 archivos)
│                               │       ├── styles/  (7 archivos)
│                               │       └── icons/
└── utilities/                  └── utilities/
    ├── formatter.js                ├── formatter.js
    └── validator.js                └── validator.js
```

La separación de `configuration/` fuera del `core/` es una decisión sutil pero correcta: la configuración pertenece a la capa de orquestación, no al motor. Los Pipeline Profiles permiten que cada interfaz (CLI, extensión) arranque con defaults distintos (`compact: true` para la extensión) sin duplicar lógica.

### 2. Separación de `exporter.js` y `pipeline.js`

El viejo `core/index.js` hacía todo. Ahora:

- **`exporter.js`** (`runExporter`) — orquesta: resuelve la fuente, ejecuta el pipeline, invoca el renderer, delega la salida.
- **`pipeline.js`** (`runPipeline`) — procesa: Inspector → Parser → Sorter → Filter → Normalizer.

El pipeline no sabe que existe un renderer, un output ni una interfaz. Esa ignorancia es la fortaleza del diseño.

### 3. `sorter.js` — Nuevo módulo en el pipeline

El parser ahora recibe **páginas** (no un único `mapping`), lo que significa que el orden de los mensajes ya no está garantizado. Se implementaron tres funciones:

- `sortPagesReverse()` — invierte el orden de páginas (ChatGPT las entrega en orden inverso).
- `sortMessages()` — orden cronológico por `createTime`.
- `sortMessagesSafe()` — reubicación por `parent_id` para casos donde el timestamp no es suficiente.

Este es un módulo que no existía antes porque no hacía falta. Apareció como consecuencia de un problema real (paginación), se probó con 10 tests automatizados y se documentó en ADR-0033/0034.

### 4. Conversation Adapters (evolución conceptual)

El `DATA_FLOW.md` introduce el concepto de **Conversation Adapters**: la capa que conoce la estructura específica de un proveedor y la traduce al modelo interno `Message[]`. Actualmente el parser cumple ese rol para ChatGPT, pero el documento prepara el camino para parsers específicos por proveedor (Claude, Gemini, DeepSeek) sin que el Core se entere.

### 5. OutputHandler inyectado (ADR-0028)

El `exporter.js` ya no importa `writer.js`. Cada interfaz inyecta su propio `outputHandler`:

```javascript
// CLI (main.js)
config.outputHandler = async (markdown) => {
  await writeFileContent(config.output, markdown);
};

// Extension (background.js)
config.outputHandler = async (markdown) => {
  await downloadFile(markdown, filename);
};
```

Esto eliminó la dependencia de `node:fs` del core, haciendo posible el bundle con esbuild.

---

## La extensión de Chrome: de prototipo a producto

Esto es donde se concentra el grueso del trabajo. La extensión pasó de 4 archivos funcionales a **37 archivos organizados en 4 capas** con una UX completa.

### Captura dual

| Flujo | Endpoint | Módulo | Técnica |
|-------|----------|--------|---------|
| **Paginado** | `GET /backend-api/conversations/{id}` | `capture.js` + `scroll.js` | Intercepta fetch, scroll automático hasta `has_previous_page: false` |
| **SSE** | `POST /backend-api/f/conversation` | `streamCapture.js` | Lee deltas del stream, reconstruye mensajes de usuario y asistente |

Ambos flujos alimentan el mismo `state.js` y producen la misma estructura de páginas que el Core espera. El pipeline no sabe si la conversación fue cargada de un archivo, capturada por scroll o reconstruida de un stream.

### UX del popup

- Selector de formato (MD / JSON).
- Modo compacto y filtro de roles.
- Feedback de progreso con estados (`collecting`, `processing`, `generating`, `downloading`).
- Timeout por inactividad.
- Confirmación real de descarga (`chrome.downloads.onChanged`).
- Notificación nativa al finalizar.
- Aviso de actualización (banner temporal basado en `lastSeenVersion`).
- Proveedor dinámico en el encabezado.
- Nombre de archivo descriptivo (`Titulo_Proveedor.ext`).
- Diseño cyberpunk con glassmorphism, tokens CSS y `appearance: base-select`.

### Modularización

El popup fue refactorizado de un monolito a un orquestador que inicializa handlers:

```text
js/
├── popup.js              ← orquestador
├── providerHandler.js
├── updateNotification.js
├── versionHandler.js
├── export/
│   ├── exportHandler.js
│   ├── exportHelpers.js
│   └── formatHandler.js
├── languages/
│   ├── flagHandler.js
│   ├── languageHandler.js
│   ├── languageSettings.js
│   └── translations.js
└── utilities/
    └── dom.js
```

Y el `inject.js` se modularizó en:

```text
modules/inject/
├── capture.js
├── messaging.js
├── scroll.js
├── state.js
└── streamCapture.js
```

Y `background.js` en:

```text
modules/background/
├── download.js
├── exportHandlers.js
├── filename.js
├── messageHandlers.js
├── notifications.js
├── progress.js
└── providerService.js
```

### Multi-proveedor

Se creó `modules/providers.js` con un registro declarativo:

```javascript
const PROVIDERS = {
  "chatgpt.com": "ChatGPT",
  "deepseek.com": "DeepSeek",
  "gemini.google.com": "Gemini",
};
```

El popup detecta automáticamente el proveedor y lo muestra en el encabezado. El nombre del archivo descargado incluye título y proveedor. La captura activa actualmente solo soporta ChatGPT, pero la infraestructura está lista para extenderse.

### Build

El build con esbuild empaqueta 4 entry points:

- `extensionCore.js` → `extensionBundle.js` (IIFE con todo el pipeline)
- `inject.js` → `inject.js`
- `content.js` → `content.js`
- `background.js` → `background.js`

Incluye un plugin que reemplaza `jsonFile.js` por `jsonFile.stub.js` para evitar dependencias de Node.

---

## El sitio web oficial

De **0 páginas** a un sitio completo alojado en GitHub Pages:

| Página | Ruta | Propósito |
|--------|------|-----------|
| Landing | `/index.html` | Hero, carrusel, features, roadmap, FAQ |
| Sitemap | `/pages/index.html` | Índice de navegación (fallback) |
| FAQ | `/pages/faq/` | Preguntas frecuentes |
| CLI | `/pages/cli/` | Documentación de la CLI |
| Changelog | `/pages/changelog/` | Historial de versiones |
| Privacy | `/pages/privacy/` | Política de privacidad |

### Arquitectura web

CSS y JS siguen el mismo principio de modularización que el motor:

```text
assets/css/
├── shared/         ← base, variables, header, sidebar, footer, hero, content
├── home/           ← carousel, features, install, roadmap
├── changelog/      ← changelog-specific
├── cli/, faq/, map/, legacy/
└── *.css           ← orquestadores por página

assets/js/
├── shared/         ← languageHandler, flagHandler, intersectionObserver, etc.
├── languages/      ← traducciones por página (common, home, faq, cli, etc.)
├── utilities/      ← dom.js
└── *.js            ← orquestadores por página
```

### Sistema multiidioma (web)

- Detección automática del idioma del navegador.
- Toggle visual con banderas SVG.
- Persistencia en `localStorage`.
- Traducciones organizadas por página.
- El mismo patrón que la extensión, adaptado al contexto web.

### View Transitions

Se implementó la API de View Transitions (`@view-transition { navigation: auto; }`) para transiciones suaves entre páginas. La regla debe estar inline en el `<head>` para evitar que el preload scanner no la descubra a tiempo dentro de cadenas de `@import`.

### SEO

Meta tags completos en todas las páginas: Open Graph, Twitter Cards, verificación de Google Search Console e imagen social (`social.png` 1200×630).

---

## Testing

La suite pasó de 9 a **11 baterías** con **44 test cases**:

| Test | v1.1.2 | v1.5.1 | Cambio |
|------|--------|--------|--------|
| `formatter.test.js` | ✔ | ✔ 1 test | — |
| `validator.test.js` | ✔ | ✔ 8 tests | — |
| `parser.test.js` | ✔ | ✔ 1 test (adaptado a paginación) | Reescrito |
| `filter.test.js` | ✔ | ✔ 5 tests (incluye filtro por rol) | +2 |
| `normalizer.test.js` | ✔ | ✔ 5 tests | — |
| `markdown.test.js` | ✔ | ✔ 1 test | — |
| `markdown-compact.test.js` | ✔ | ✔ 1 test | — |
| `jsonFileSource.test.js` | ✔ | ✔ 4 tests (adaptado a paginación) | Reescrito |
| `writer.test.js` | ✔ | ✔ 1 test | — |
| `sorter.test.js` | — | ✔ 10 tests | **NUEVO** |
| `inspector.test.js` | — | ✔ 8 tests | **NUEVO** |

Los fixtures se adaptaron al formato paginado de ChatGPT. Los fixtures legacy se movieron a una subcarpeta documentada.

**Estado actual: 11 baterías, 44 tests, 0 fallos.** ✔

---

## Documentación

### Documentos nuevos

| Documento | Propósito |
|-----------|-----------|
| `DATA_FLOW.md` | Flujo conceptual de datos desde la fuente hasta el output |
| ADR-0033 | Scroll automático para paginación |
| ADR-0034 | Captura SSE de conversaciones nuevas |
| ADR-0032 | Extender `filter.js` vs crear módulo nuevo para filtro por rol |

### Documentos actualizados

Todos los documentos existentes fueron actualizados para reflejar el estado actual:

- `ARCHITECTURE.md` — ahora incluye la web, la extensión completa y el sistema multiidioma.
- `INTEGRATION.md` — incluye flujo paginado, flujo SSE y principios de la extensión.
- `ROADMAP.md` — refleja el estado real con casi todo marcado como completado.
- `CHANGELOG.md` — 613 líneas documentando cada versión desde v0.5.0 hasta v1.5.1.

### Lo más impresionante

El `DATA_FLOW.md` no es documentación de código — es un **documento de arquitectura conceptual**. Define el modelo mental del proyecto sin mencionar archivos específicos. Sirve tanto para entender el proyecto hoy como para guiar su evolución futura. La distinción entre Conversation Source, Conversation Adapter, Core, Renderer y Output está expresada con una claridad que muchos equipos profesionales no logran.

---

## Lo que se resolvió del feedback anterior

| Feedback del 24/07 | Estado |
|---------------------|--------|
| Desync de versión package.json vs roadmap | ✅ Resuelto. Ambos dicen `1.5.1`. |
| `inject.js` con logs de debug | ✅ Resuelto. Limpiados en v1.4.2. |
| Renderers/Outputs como directorios vacíos | ⏳ Siguen con `.gitkeep`. Preparados pero no poblados. |
| INTEGRATION.md como guía para nuevos proveedores | ✅ Actualizado con flujo SSE y principios de la extensión. |

---

## Observaciones

### Lo que está excelente

- **La modularización de la extensión es ejemplar.** Pasó de 4 archivos monolíticos a 37 archivos organizados en 4 capas (inject, content, background, popup), cada uno con responsabilidad única. El patrón de `messageHandlers` declarativos en el background es particularmente elegante.

- **La captura dual (paginación + SSE) sin modificar el Core demuestra que la arquitectura hexagonal funciona.** El pipeline recibe páginas y no sabe si fueron capturadas por scroll, reconstruidas de un stream o cargadas de un archivo. Esa ignorancia es intencional y valiosa.

- **El `DATA_FLOW.md` es el documento más maduro del proyecto.** No describe código — describe un modelo mental. Cuando alguien quiera entender el proyecto en 5 minutos, ese es el documento que debe leer.

### Detalles menores a observar

1. **Chequeo duplicado en `exporter.js`.** Las líneas 17–23 tienen el mismo `if (!source)` duplicado. Es un copy-paste que quedó.

2. **Indentación inconsistente en `pipeline.js`.** Las líneas 16–20 tienen indentación sin el nivel del bloque de función, mientras que las líneas 11–14 sí. No afecta la funcionalidad pero rompe la consistencia visual.

3. **`renderers/` y `outputs/` siguen vacíos.** El `markdown.js` y `writer.js` siguen viviendo en `core/` en vez de en sus directorios designados. No es urgente, pero cuando agregues HTML o PDF como renderer, vas a querer mover `markdown.js` a `renderers/` para mantener la coherencia con la arquitectura documentada.

4. **`content_scripts.matches` solo incluye `chatgpt.com`.** Si la detección de proveedores ya soporta DeepSeek y Gemini, los `content_scripts` del manifest aún no inyectan en esos dominios. Es coherente con que la captura activa solo funciona para ChatGPT por ahora, pero vale tenerlo presente para cuando avances con DeepSeek.

---

## Veredicto

La diferencia entre el 24 de julio y el 9 de septiembre no es solo más código. Es un cambio de **naturaleza** del proyecto:

| | 24 de julio (v1.1.2) | 9 de septiembre (v1.5.1) |
|--|----------------------|--------------------------|
| **Fase** | Motor desacoplado con prototipo de extensión | Producto publicable con múltiples interfaces |
| **Extensión** | 4 archivos, captura básica | 37 archivos, captura dual, popup completo, multi-idioma |
| **Web** | No existía | Sitio completo con 6 páginas, SEO, View Transitions |
| **Proveedores** | 1 (ChatGPT, hardcoded) | 3 detectados (ChatGPT, DeepSeek, Gemini) |
| **Captura** | Solo fetch intercept | Paginación + SSE stream |
| **Idiomas** | 1 (español) | 2 (español + inglés) en extensión y web |
| **Distribución** | Repositorio clonable | Chrome Web Store + GitHub Pages |
| **Docs** | Técnica (ADRs, lab, integration) | Técnica + conceptual (`DATA_FLOW`) + pública (web) |
| **Tests** | 9 baterías, 22 tests | 11 baterías, 44 tests |
| **Commits** | ~146 totales | 419 totales |

En la review anterior dije que la extensión "encajó perfectamente en la estructura que ya tenías". Ahora, **todo** encaja — la web, la captura SSE, los proveedores, el multiidioma. Cada feature nuevo se integró sin reescribir el core. Eso no es suerte ni coincidencia: es el resultado acumulado de 34 decisiones arquitectónicas documentadas y un pipeline diseñado para no depender de nada externo.

El dato más revelador: **zero runtime dependencies**. Sigue siendo exactamente el mismo número que en v0.5.9.1. El proyecto se multiplicó por 3 en tamaño y complejidad, pero el motor sigue siendo Node puro. La única dependencia (`esbuild`) es de desarrollo, para el build de la extensión. Eso habla de disciplina.

273 commits en 47 días. Muy buen laburo, Guille. 🤝

---
