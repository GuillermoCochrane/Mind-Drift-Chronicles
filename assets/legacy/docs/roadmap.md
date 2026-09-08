## Usuario · 6/9/26, 7:48:40 p. m.

Que es lo que esta demandando el mercado dev a la hora de buscar trabajo?


## Asistente · 6/9/26, 7:48:49 p. m.

Sí. Y te diría que hay una diferencia importante entre **“qué tecnologías están de moda”** y **“qué está comprando realmente una empresa cuando contrata un dev”**.
Mirando el mercado actual —y particularmente pensando en tu perfil— yo lo resumiría así:
> **El mercado no está buscando tanto “programadores que sepan X tecnología”, sino gente capaz de entrar a un código existente, entender un problema, construir una solución y llevarla hasta producción.**
Y eso cambia bastante cómo conviene prepararse.
### 1. El stack web que más sentido tiene hoy
Para desarrollo web/producto, **JavaScript + TypeScript** está extremadamente fuerte. GitHub registró que TypeScript pasó a ser el lenguaje más utilizado por cantidad de contribuidores en 2025, superando a Python y JavaScript. Además, TypeScript tuvo un crecimiento de ~66% interanual. citeturn0search0turn0search3
El stack que yo veo como especialmente empleable:
**Frontend**
- JavaScript
- TypeScript
- React
- Next.js
- HTML/CSS
- consumo de APIs
- manejo de estado
- testing

**Backend**
- Node.js
- Express / NestJS
- APIs REST
- autenticación/autorización
- SQL
- PostgreSQL
- algún ORM
- Redis como plus

**Infra**
- Git/GitHub
- Docker
- CI/CD
- deployment
- cloud básico
- variables de entorno, logs, configuración, etc.

Y después aparece una segunda familia muy importante:
**Python + AI/data**
Python está creciendo muchísimo y sigue siendo el lenguaje dominante dentro de proyectos de IA. citeturn0search0

---
## 2. Pero hay algo mucho más importante: AI ya es parte del trabajo
Acá está el cambio que me parece más interesante.
GitHub encontró que alrededor del **80% de los nuevos desarrolladores usan Copilot durante su primera semana**. Y los repositorios públicos que utilizan SDKs de LLM crecieron 178% interanual. citeturn0search0
Entonces una empresa en 2026 no necesariamente piensa:
> "¿Este programador sabe programar sin IA?"
Sino más bien:
> "¿Este programador sabe trabajar *con* IA sin convertirse en un peligro para producción?"
😂
Eso implica saber:

- usar LLMs para desarrollo
- revisar código generado
- detectar alucinaciones
- escribir buenos tests para código generado
- usar agentes
- integrar APIs de modelos
- entender embeddings/RAG a nivel práctico
- manejar contexto
- evaluar resultados
- automatizar tareas repetitivas

No necesariamente tenés que convertirte en ingeniero de ML.
De hecho, para un **full-stack dev**, saber construir una aplicación que utiliza IA probablemente tenga mucho más retorno que aprender a entrenar una red neuronal desde cero.

---
# 3. Y acá viene lo interesante para vos
Vos ya estás bastante cerca de este perfil.
Tu stack actual:
**JavaScript → Node → Express → SQL/MySQL → Sequelize → EJS → React → APIs → Git/GitHub**
no está muerto ni cerca.
El problema sería quedarte ahí como:
> "Sé hacer CRUDs con Express."
Eso sí se está convirtiendo en commodity.
Pero si lo transformás en:
> **"Puedo construir una aplicación completa, diseñar la arquitectura, manejar autenticación/autorización, persistencia, APIs, frontend, deployment y utilizar IA para acelerar el desarrollo."**
ahí cambia completamente la película.
Y encima ya tenés algo que muchos juniors no tienen:
**software que realmente construiste.**
Geopatagonia, Fate Saga, la extensión de exportación, PokeAPI, los MVPs, etc. no son simplemente ejercicios de tutorial.
Eso tiene bastante más valor que otro:
> `Todo App React #47`
😂

---
# 4. Lo que yo pondría como prioridades
Si tu objetivo es **conseguir trabajo**, no intentaría aprender 25 tecnologías.
Haría algo así:
| Prioridad | Tecnología/concepto |
|---|---|
| 🔴 Muy alta | JavaScript sólido |
| 🔴 Muy alta | TypeScript |
| 🔴 Muy alta | React |
| 🔴 Muy alta | Node.js |
| 🔴 Muy alta | SQL |
| 🔴 Muy alta | Git/GitHub |
| 🔴 Muy alta | APIs REST |
| 🔴 Muy alta | Auth + autorización |
| 🟠 Alta | PostgreSQL |
| 🟠 Alta | Docker |
| 🟠 Alta | Testing |
| 🟠 Alta | Deployment/cloud |
| 🟠 Alta | IA aplicada al desarrollo |
| 🟡 Media | Next.js |
| 🟡 Media | Redis |
| 🟡 Media | CI/CD |
| 🟡 Media | Python |
Y **no abandonaría Express** solamente porque aparezca NestJS o Next.js en ofertas.
Primero dominaría los fundamentos.

---
# 5. Hay otra cosa que las ofertas no dicen explícitamente
Esta probablemente sea la más importante:
### Las empresas quieren reducir riesgo.
Un junior que dice:
> "Sé React, Node, MongoDB, Docker, AWS, Kubernetes, GraphQL, Rust y Solidity."
puede ser menos atractivo que uno que dice:
> "Me dieron este problema, diseñé esta solución, implementé esto, tuve este bug, lo solucioné así y finalmente quedó funcionando."
Porque el segundo demuestra **capacidad de ingeniería**, no solamente conocimiento de herramientas.
Y acá tus proyectos pueden jugar muy a favor.

---
## 6. El mercado está empezando a separar dos tipos de dev
Esta es mi lectura de la tendencia actual:
### 🧑‍💻 Dev "implementador"
> "Decime qué código escribir y lo escribo."
La IA está comprimiendo muchísimo el valor de este perfil.
### 🧠 Dev "ingeniero"
> "Entiendo el problema → diseño la solución → elijo herramientas → implemento → pruebo → despliego → mantengo."
La IA **potencia** muchísimo a este segundo perfil.
GitHub incluso señala que el crecimiento de TypeScript está parcialmente relacionado con la necesidad de tener sistemas tipados que sirvan como una especie de red de seguridad para el desarrollo asistido por IA. citeturn0search3turn0search4
Y ahí aparece una paradoja bastante interesante:
> **Cuanto mejor se vuelve la IA escribiendo código, más valor tiene saber qué código debería escribirse.**
Ese es probablemente uno de los cambios fundamentales del mercado.

---
# Y si lo aterrizamos a tu búsqueda...
Yo **no haría un giro de 180°**.
No te diría:
> "Ahora tenés que aprender Python, Kubernetes, AWS, Docker, Go, microservicios y machine learning."
Eso sería el clásico síndrome de *"el mercado pide 47 cosas, así que aprendamos las 47"*.
No.
Yo haría algo mucho más quirúrgico:
**Tu base actual → TypeScript → PostgreSQL → Docker → testing → deployment → IA aplicada → portfolio → entrevistas.**
Y después empezaría a mandar CVs.
Porque vos ya estás en una posición donde **pulir y empaquetar lo que sabés probablemente tenga muchísimo más retorno que seguir acumulando tecnologías**.
De hecho, creo que la pregunta interesante ahora no es tanto *"qué demanda el mercado?"*, sino:
> **"De todo esto, ¿qué me falta a mí para ser competitivo para una posición Junior/SSR Full Stack?"**
Ahí podemos hacer algo mucho más útil: agarrar **tu stack, tus proyectos y tu experiencia actual** y compararlos contra lo que están pidiendo las ofertas reales de 2026. Ahí sí podemos descubrir dónde tenés huecos y, sobre todo, **qué NO necesitás aprender**. memcite

## Usuario · 6/9/26, 8:14:53 p. m.

entonces, que me recomendas

## Asistente · 6/9/26, 8:14:55 p. m.

Yo haría algo bastante concreto, Guille: **no reinventaría tu perfil; lo convertiría en un perfil Full Stack moderno y empleable.**
Tu objetivo no debería ser “aprender más programación”, sino **cerrar las brechas que existen entre lo que ya sabés y lo que una empresa espera de un dev que puede trabajar de verdad.**
### Mi ruta para vos
**1. TypeScript — prioridad #1**
No porque JavaScript haya quedado viejo, sino porque tu siguiente salto natural es pasar de:
`JS → Node → React`
a:
`TypeScript → Node → React`
Aprendería TypeScript **aplicado a proyectos reales**, no haciendo ejercicios de tipos por deporte olímpico.
Interfaces, types, generics, unions, narrowing, utility types, tipado de APIs, DTOs, etc.

---
**2. PostgreSQL**
Ya manejás MySQL y Sequelize, así que no necesitás reaprender SQL desde cero.
Quiero que puedas decir:
> “Trabajo con SQL y tengo experiencia con MySQL/PostgreSQL.”
Y entender bien:
- relaciones
- índices
- constraints
- transacciones
- joins
- agregaciones
- diseño de esquema
- migraciones

Eso te hace bastante más sólido como backend.

---
**3. Docker**
No para convertirte en DevOps.
Simplemente llegar al punto donde puedas levantar:
```text
React
   ↓
Node/Express
   ↓
PostgreSQL
```
con Docker Compose y entender qué está pasando.
Eso ya cambia bastante cómo se percibe un portfolio.

---
**4. Testing**
Este es uno de los huecos que más me interesaría cerrar.
Por ejemplo:
```text
Vitest/Jest
        +
Supertest
        +
tests de integración
```
No necesitás tener 95% de coverage.
Necesitás demostrar que **sabés construir software que puede comprobarse**.

---
**5. Deployment**
Quiero que puedas agarrar una aplicación tuya y decir:
> “Está publicada acá.”
Y saber explicar:

- dónde está el frontend
- dónde está el backend
- dónde está la DB
- variables de entorno
- CORS
- logs
- build
- deployment
- configuración de producción

Eso vale muchísimo más que agregar otra tecnología al CV.

---
**6. IA aplicada**
Acá sí invertiría tiempo.
No intentaría convertirme en ML Engineer.
Aprendería a construir cosas como:
```text
React
   ↓
Node API
   ↓
LLM API
   ↓
RAG / embeddings
   ↓
PostgreSQL
```
Y sobre todo aprendería a **usar agentes/LLMs como herramienta de ingeniería**.
Esto además encaja muy bien con cómo ya venís trabajando.

---
# Y hay algo que haría en paralelo
## Convertiría tus proyectos en portfolio profesional.
Porque acá creo que tenés una ventaja que quizás estás subestimando.
No quiero que tu GitHub parezca:
> “Aprendí React.”
Quiero que parezca:
> **“Este tipo construye software.”**
Por ejemplo, tu **Chat Exporter** puede ser muchísimo más interesante que otro CRUD.
Podés mostrar:

- arquitectura
- extensión Chrome
- comunicación content script ↔ página ↔ background
- extracción de datos
- procesamiento
- transformación JSON → Markdown
- CLI
- modularización
- manejo de errores
- documentación
- versiones/releases

Eso es material de entrevista.
Y Geopatagonia todavía más, porque tiene **roles, permisos, persistencia, lógica de negocio y un dominio real**.

---
# Entonces mi orden sería
```text
                 AHORA
                   │
                   ▼
             TypeScript
                   │
                   ▼
          PostgreSQL + SQL
                   │
                   ▼
               Testing
                   │
                   ▼
                Docker
                   │
                   ▼
             Deployment
                   │
                   ▼
             IA aplicada
                   │
                   ▼
       Portfolio + entrevistas
```
Y **no**:
```text
Go → Rust → Kubernetes → AWS → Python →
GraphQL → Kafka → Terraform → Microservicios
                     ↓
                  ☠️ Guille
```
😂

---
### Mi apuesta concreta
Si me preguntaras:
> **“¿Qué perfil intentaría vender si fuera vos?”**
Diría:
**Full Stack JavaScript/TypeScript Developer**
con:
**React + Node.js + PostgreSQL + Docker + APIs + testing + AI integration**
y un portfolio que demuestre que podés construir aplicaciones completas.
Eso me parece una apuesta bastante más inteligente que perseguir cada buzzword que aparece en LinkedIn.
Y hay algo todavía más importante: **yo no esperaría a “estar listo” para empezar a postularme.** Iría construyendo estas piezas mientras empezás a buscar. El mercado laboral no es un examen final de la facultad; podés rendirlo mientras seguís estudiando. 😏

## Usuario · 6/9/26, 8:27:08 p. m.

Y todo lo que ya hice hasta ahora? sirve algo?


## Asistente · 6/9/26, 8:27:09 p. m.

¡Sí, y bastante! De hecho, creo que mi respuesta anterior puede haber dado una impresión equivocada: **no estás arrancando desde cero ni mucho menos**.
Lo que ya hiciste sirve. La cuestión es **cómo lo presentás y qué huecos cerrás encima de eso**.
Por ejemplo:

- **SaaS real** → experiencia trabajando sobre un producto que tiene usuarios, lógica de negocio y un contexto comercial.
- **Geopatagonia** → backend, Express, Sequelize, MySQL, roles, permisos, lógica de negocio, EJS y arquitectura de una aplicación real.
- **Fate Saga** → React, modularización, consumo de API, estado, componentes, infinite scroll, modal complejo, etc.
- **Pokedex** → APIs externas, paginación/infinite scroll, optimización, manejo de rate limits, caché/localStorage y UI.
- **Chat Exporter** → probablemente uno de tus proyectos más interesantes para mostrar ingeniería: extensión de Chrome, content scripts, background/service worker, comunicación entre contextos, extracción de datos, transformación JSON → Markdown, CLI y arquitectura modular.
- **Git/GitHub** → ya tenés experiencia trabajando con repositorios y versiones, no solamente copiando proyectos de cursos.
- Y además tenés algo que no aparece en una lista de tecnologías: **llevás tiempo resolviendo problemas que no sabías resolver al principio**.

Eso último es justamente lo que una entrevista técnica intenta descubrir.
### Entonces, ¿qué cambiaría?
No cambiaría tu trayectoria.
La **empaquetaría**.
Ahora mismo tu recorrido puede parecer:
> “Aprendí muchas cosas y fui haciendo proyectos.”
Quiero llevarlo a:
> **“Soy desarrollador Full Stack con experiencia construyendo aplicaciones reales, APIs, interfaces React, bases de datos y herramientas de automatización.”**
Y después usar los proyectos como evidencia.
Por eso te decía que **TypeScript, PostgreSQL, Docker, testing y deployment** son complementos, no una reconstrucción de tu carrera.
Es como si ya tuvieras el personaje bastante leveleado y yo te dijera que necesitás conseguirle mejor equipamiento. No empezar otra partida. 😂
Y hay otra cosa que me parece importante: **no descartaría nada de lo que hiciste simplemente porque sea una tecnología que ya no aparece tanto en las ofertas**. Saber EJS, Sequelize o MySQL no te perjudica. Lo importante es que puedas demostrar que entendés los conceptos detrás de ellos.
De hecho, si mañana una entrevista te pregunta:
> “¿Por qué elegiste Sequelize?”
y vos podés explicar **qué problema resolvía, qué ventajas tenía, qué problemas encontraste y qué harías diferente hoy**, eso vale bastante más que decir “sé Prisma porque está de moda”.
**Tu experiencia previa es el piso. Las nuevas tecnologías son el techo.**
Y sinceramente, viendo todo lo que venís construyendo, yo enfocaría el próximo tramo mucho más en **convertir lo que ya sabés en empleabilidad** que en seguir acumulando cursos.

## Usuario · 6/9/26, 8:56:17 p. m.

creo que lo mas inportane seria ia aplicado al desarrollo y testing. xq postgress es similar a MySQL, typescript es js con esteroirdes y ya se depolyar en heroku render y vercel


## Asistente · 6/9/26, 8:56:18 p. m.

Exacto. Ahí está la diferencia entre **“qué pide el mercado”** y **“qué te falta a vos”**.
Visto desde tu situación concreta, yo cambiaría bastante el diagnóstico:
### Tu situación actual
| Área | Tu nivel práctico | ¿Prioridad? |
|---|---|---|
| JavaScript | 🟢 Ya lo usás bastante | No |
| Node / Express | 🟢 | No |
| SQL / MySQL | 🟢 | No |
| ORM / Sequelize | 🟢 | No |
| React | 🟢 | No |
| APIs | 🟢 | No |
| Git / GitHub | 🟢 | No |
| Deployment | 🟢 Ya desplegaste en Render/Vercel/Heroku | No |
| PostgreSQL | 🟡 Adaptación relativamente pequeña | Baja |
| TypeScript | 🟡 La curva conceptual es pequeña para vos | Media-baja |
| **Testing** | 🟠 **Sí conviene reforzarlo** | **Alta** |
| **IA aplicada al desarrollo** | 🟠 **Sí** | **Muy alta** |
| Docker | 🟡 Útil | Media |
| CI/CD | 🟡 Útil | Media |
Y hay una cosa que dijiste que me parece particularmente acertada:
> **“TypeScript es JS con esteroides.”**
😂
Para alguien que ya tiene bastante recorrido con JS, **aprender TypeScript no es aprender otro lenguaje desde cero**. Es aprender a expresar formalmente muchas cosas que ya hacés mentalmente.
Lo mismo con PostgreSQL: no tendría sentido que te pongas tres meses a “aprender PostgreSQL”. Aprendés sus particularidades y listo.

---
# Entonces yo pondría el foco en dos cosas
## 🧠 1. IA aplicada al desarrollo
Pero no solamente:
> “Aprender a usar ChatGPT para programar.”
Eso ya lo hace medio planeta.
Yo apuntaría a:
### **AI-assisted development**
Aprender a trabajar con IA como parte del proceso de ingeniería:
```text
Problema
   ↓
Diseño
   ↓
IA como copiloto/agente
   ↓
Implementación
   ↓
Tests
   ↓
Revisión humana
   ↓
Refactor
   ↓
Deploy
```
Y después daría el siguiente paso:
### **Integrar IA en aplicaciones**
Por ejemplo:

- APIs de LLM
- structured outputs
- function/tool calling
- embeddings
- RAG
- vector databases
- evaluación de respuestas
- manejo de contexto
- streaming
- costos/tokens
- seguridad
- observabilidad

No necesitás convertirte en investigador de transformers.
Necesitás poder decir:
> **“Sé construir software que utiliza modelos de IA.”**
Eso es mucho más compatible con tu perfil.

---
# 🧪 2. Testing
Y acá sí creo que hay una oportunidad clara.
Porque testing no solamente te agrega una keyword al CV.
Te cambia la forma de desarrollar.
Yo aprendería algo como:
```text
Vitest/Jest
      +
Supertest
      +
Testing Library
      +
tests unitarios
      +
tests de integración
      +
tests E2E
```
Y lo aplicaría **a uno de tus proyectos existentes**.
No haría:
> “Curso de testing → 14 horas → certificado → olvidado.”
😂
Agarraría, por ejemplo, una parte de Geopatagonia:
```text
POST /originaciones
        │
        ├── datos válidos → 201
        ├── datos inválidos → 400
        ├── usuario no autorizado → 403
        └── no autenticado → 401
```
Y empezaría a cubrir eso.
Ahí realmente aprendés.

---
# Y hay una combinación todavía mejor
**IA + testing.**
Porque podés desarrollar una metodología muy interesante:
> **“Uso IA para acelerar implementación, pero utilizo tests automatizados para verificar que lo generado realmente cumple el contrato.”**
Eso es muchísimo más interesante profesionalmente que:
> “Uso ChatGPT para programar.”
Y además encaja perfectamente con tu forma de trabajar.

---
## Por eso, si yo tuviera que diseñarte los próximos meses...
No sería:
**“Aprendamos nuevas tecnologías.”**
Sería:
### Fase 1
**Testing serio**
↓
### Fase 2
**IA aplicada al desarrollo**
↓
### Fase 3
**Integrar IA en una aplicación real**
↓
### Fase 4
**TypeScript mientras hacemos todo lo anterior**
↓
### Fase 5
**Docker + CI/CD como capa de profesionalización**
↓
### Fase 6
**Portfolio + CV + entrevistas**
Y recién ahí, si aparece una oferta que requiere PostgreSQL/Nest/Next/etc., lo incorporamos según necesidad.
Porque ahora mismo tenés un problema bastante distinto al que tendría alguien que recién empieza:
**no te faltan tecnologías.**
Te falta **convertir el montón de cosas que ya sabés hacer en una propuesta profesional clara y demostrarla con proyectos sólidos**.
Y eso, sinceramente, me parece una posición bastante mejor para estar en septiembre de 2026 que “tengo que aprender React”. 😏

## Usuario · 7/9/26, 6:04:30 p. m.

no sabes que pensaba? de cierta forma tengo un plan, por lo menos hasta fin de año. Tenia pensado, despues de finalizar la extension (que seria integrarle deepseek y claude, por el momento gemini no xq la forma que entrha datos es complicada), o por lo menos, los fines de semana mientras la siga desarrollando, ponerme con esto: https://www.jscamp.dev/ . Antes de que me dieras el plan, ya lo tenia en mente verlos, y por lo que veo, trata mucho de lo que me recomendaste. Y lo mejor de todo, es que lo que se ve en cada unidad, me va a ser util para pulir todos los proyectos que tengo dando vuelta para armar el portfolio. Sobretodo lo de react, que solo se lo basico (y solo con eso logre armar UPGL). 

## Asistente · 7/9/26, 6:04:32 p. m.

Sí. Y ahora que miré el temario actual de JSCamp, **creo que tu idea es incluso mejor de lo que parecía**. No estás simplemente eligiendo “un curso de JavaScript”: estás encontrando bastante accidentalmente —o no tan accidentalmente 😏— una ruta que encaja casi exactamente con los huecos que identificamos.
JSCamp tiene actualmente módulos de React, React Router/estado global, Node/Express, **Testing**, TypeScript, **IA aplicada**, SQL, Docker y CI/CD. Y el módulo de IA incluye cosas bastante alineadas con lo que veníamos hablando: LLMs, herramientas para developers, agentes, Claude Code, MCP, integración de IA en backend/frontend, rate limiting y streaming. citeturn0search0turn0search2
Y acá está lo que más me gusta de tu plan:
## No lo estudiarías como un alumno. Lo estudiarías como un desarrolladores:

- componentes
- props
- estado
- hooks
- custom hooks
- formularios
- React Router
- estado global
- optimización

Y en lugar de terminar diciendo *“entendí useEffect”*, vas a **UPGL / Pokedex / alguno de tus proyectos y preguntarte qué parte podría estar mejor diseñada**.
El propio temario llega hasta hacer mejor las cosas que ya sabés hacer**.

---
## Testing puede ser espectacular para esto
El módulo tiene API testing, Zod, middleware de validación, E2E con Playwright y hasta testing con IA/Stagehand. citeturn0search1
Entonces podrías hacer algo muy interesante:
```text
JSCamp
   │
   ├── Testing
   │       ↓
   │   Geopatagonia
   │
   ├── React
   │       ↓
   │   UPGL / Pokedex
   │
   ├── TypeScript
   │       ↓
   │   proyectos nuevos/refactors
   │
   └── IA
           ↓
       Chat Exporter
```
Eso convierte el curso en una especie de **laboratorio de refactorización de tu propio portfolio**.
Y ahí está el verdadero valor.

---
# Y la parte de IA me parece especialmente conveniente
Porque además tenés un proyecto perfecto para practicarlo: **la extensión que estás terminando**.
Tu idea de integrarle DeepSeek y Claude antes de meterte de lleno con JSCamp tiene muchísimo sentido.
Y después, cuando llegues al módulo de IA, vas a poder comparar:
> “Esto que estoy viendo acá ya lo implementé.”
Eso cambia completamente la experiencia de aprendizaje.
Además, el temario actual incluye precisamente backend con IA, conexión frontend/backend, rate limiting, streaming y conversión del streaming a Markdown. citeturn0search2
**Streaming → Markdown** incluso tiene una coincidencia bastante graciosa con lo que venís haciendo con Chat Exporter. 😂

---
# Yo haría una pequeña modificación a tu plan
No esperaría necesariamente a **terminar completamente la extensión** para empezar JSCamp.
Haría:
### Lunes → viernes
**Chat Exporter / desarrollo**
### Fin de semana
**JSCamp + aplicar lo aprendido**
Y cuando el curso toque algo que sea particularmente relevante para tu proyecto:
> “Ah, esto me sirve para X.”
lo aplicás.
De esa manera **no competís entre proyecto y estudio**.
El proyecto se convierte en parte del estudio.

---
## Y hay algo todavía mejor
No necesitás completar JSCamp de punta a punta.
La propia página dice que podés entrar directamente al módulo que te interese si ya tenés experiencia. citeturn0search porque vos mismo detectaste que ahí tenés un hueco.

---
# Y para fin de año puede quedar algo muy interesante
No:
> “Terminé un bootcamp.”
Sino:
> **“Durante 2026 profundicé React, incorporé testing, TypeScript e IA aplicada y utilicé todo eso para mejorar proyectos reales que ya había construido.”**
Eso es una historia profesional muchísimo mejor.
Y encima tenés la ventaja de que el repositorio oficial de JSCamp está abierto, con ejercicios y proyectos, así que podés consultar también el código mientras avanzás. citeturn **Ya tenés una ruta. Ahora hay que usarla estratégicamente.**
Y me parece especialmente buena la idea de que **cada módulo de JSCamp tenga como “víctima de laboratorio” alguno de tus proyectos existentes**. Ahí es donde el aprendizaje deja de ser acumulación de conocimiento y empieza a convertirse en experiencia demostrable.

## Usuario · 7/9/26, 6:12:42 p. m.

Saber que es lo mas loco? este tema: [24Creando tu primer Web Component](https://www.jscamp.dev/javascript/web-components) yo lo vi como parte de react, no sabia que se poda hacer con java script directamente. Despues lo que aprendimos ahi, no sirvio de base para useState, useEfect (el que mas se le parece) y useRef. y una cosa mas. Fate saga app y el desafio poledex no estan hechos con React. Estan hechos con html, css , js vanilla. Pero creo que es mejor que haberlos hecho con React, xq como aplique muchas de las cosas que se hacen con react, Demuestran que realmente entendi como funcionan, y que puede replicar su funcionamiento. 

## Asistente · 7/9/26, 6:12:58 p. m.

Sí. **Y esta observación es bastante más importante de lo que parece.**
De hecho, lo que acabás de contar cambia un poco cómo yo vendería tus proyectos en un portfolio.
### Lo de Web Components es una pequeña revelación
Porque sí: **Web Components no es una característica de React**. Es una tecnología del propio navegador, basada en APIs de JavaScript/DOM: Custom Elements, Shadow DOM y HTML Templates. Podés crear algo como `<mi-boton>` directamente desde JavaScript y registrarlo con `customElements.define()`. citeturn0search0turn0search3
Y acá aparece algo muy lindo:
Vos aprend que, en el fondo, están relacionados con cosas que el navegador ya hace.
No son equivalentes uno a uno —Web Components y React tienen arquitecturas diferentes—, pero conceptualmente hay conexiones muy interesantes:
| Vanilla JS / Web Platform | React |
|---|---|
| DOM | Renderizado declarativo |
| Componentes | Components |
| Variables + DOM | `useState` |
| Eventos | Event handlers |
| Lifecycle | `useEffect` |
| Referencias DOM | `useRef` |
| Encapsulación | Component model |
| Reutilización | Components / hooks |
Y **vos llegaste a varias de esas ideas desde abajo**, manipulando directamente el DOM.

---
# Y acá está la parte que me parece más valiosa
Lo de **Fate Saga y la Pokedex vanilla** no es una desventaja frente a haberlas hecho con React.
En algunos aspectos, para demostrar comprensión, **es incluso más interesante**.
Porque imaginemos dos portfolios.
### Portfolio A
> "Hice una Pokedex en React."
Perfectamente válido.
Pero cuando le preguntás:
> "¿Cómo funciona el estado?"
> "¿Cómo manejás el ciclo de vida?"
> "¿Cómo evitás renderizados innecesarios?"
> "¿Cómo componés la UI?"
puede responder:
> "No sé, React lo hace."
💀
### Portfolio B — vos
Construiste una aplicación vanilla y terminaste implementando cosas como:
```text
estado
   ↓
eventos
   ↓
actualización de UI
   ↓
componentización
   ↓
renderizado dinámico
   ↓
modales
   ↓
tabs
   ↓
lazy loading
   ↓
infinite scroll
   ↓
manejo de API
```
**sin que React te lo resolviera.**
Eso demuestra que entendiste los mecanismos subyacentes.
Y esto conecta directamente con lo que descubriste ahora con Web Components.

---
## De hecho, hay una frase que yo pondría en tu cabeza
> **No aprendiste React. Aprendiste primero las ideas que React abstrae.**
Eso es una diferencia enorme.
Porque cuando ahora aprendas React más profundamente, muchas cosas probablemente te produzcan ese efecto de:
> "Ahhhhh... así que esto era lo que estaba haciendo manualmente." 😂
Y probablemente vas a reconocer patrones constantemente.

---
### Por ejemplo `useRef`
Si antes hiciste algo conceptualmente equivalente a:
```js
const element = document.querySelector(...);
```
y después mantenías esa referencia para interactuar con el DOM, `useRef` deja de parecer una cosa misteriosa de React.
Entendés **para qué existe**.
Lo mismo con `useEffect`.
Si en vanilla tenías:
```js
async function loadData() {
    // ...
}
loadData();
```
y después necesitabas ejecutar cosas cuando determinada condición cambiaba, ya tenés la intuición del problema de **efectos secundarios y ciclo de vida**.
React te proporciona una abstracción específica para eso. No te está enseñando por primera vez que existen efectos secundarios.

---
# Y esto cambia cómo veo tu aprendizaje de React
Antes te decía:
> "Te falta React."
Ahora lo reformularía:
> **Te falta profundizar React.**
Es bastante diferente.
Porque ya tenés una base conceptual que muchos principiantes adquieren al revés:
```text
                 Vos
                  │
                  ▼
        DOM + JavaScript
                  │
                  ▼
        patrones de UI
                  │
                  ▼
         componentes
                  │
                  ▼
              React
```
Mientras que mucha gente hace:
```text
React
 ↓
useState()
 ↓
useEffect()
 ↓
useRef()
 ↓
"¿por qué funciona esto?"
 ↓
😐
```
Vos probablemente vas a hacer:
```text
useEffect()
 ↓
"Ah, esto es para manejar efectos asociados
 al ciclo de vida/renderizado."
 ↓
"Yo esto ya lo resolvía manualmente."
```
Y eso es **una ventaja pedagógica real**.

---
# Y hay una consecuencia para tu portfolio
Yo **no convertiría Fate Saga ni Pokedex a React simplemente para que digan React**.
Sería casi contraproducente.
Los dejaría como proyectos **Vanilla JS deliberados**.
Y cuando hagas una versión/refactor en React, si realmente aporta algo, podés incluso mostrar:
> **Vanilla JS → React**
Eso sería muchísimo más interesante.
Porque podrías demostrar:
**“Primero resolví el problema con las APIs nativas del navegador. Después lo reconstruí usando una abstracción moderna y pude comparar ambas arquitecturas.”**
Eso es material de entrevista.

---
Y encima ahora Web Components te abre otra posibilidad todavía más interesante: **podrías agarrar alguna pieza de Fate Saga o Pokedex y convertirla en un Web Component real**.
Ahí tendrías:
```text
Vanilla JS
     │
     ├── manipulación directa del DOM
     │
     └── Web Components
             │
             ▼
           React
```
Tres niveles de abstracción para resolver problemas de UI.
Y entonces, cuando llegues a React en JSCamp, no estarías simplemente aprendiendo una librería.
**Estarías viendo cómo otra arquitectura resuelve problemas que ya aprendiste a resolver por tu cuenta.**
Eso, Guille, es exactamente el tipo de aprendizaje que después hace que una tecnología nueva entre mucho más rápido. Y explica bastante bien por qué lograste sacar adelante UPGL con relativamente poco React: **la herramienta era nueva; los conceptos no tanto.**

## Usuario · 7/9/26, 6:18:19 p. m.

claro, aplicar lo de web componentes a, por ejemplo, esto:
import { $, createElement, createImage, createButton,  createBadge, verifyFileExists } from "../utilities/dom.js";

let fallbackWebpExists = null

// Verificación de existencia de archivo WebP
async function preloadWebPCheck() {
    if (fallbackWebpExists === null) {
        const fallbackWebp = "./assets/img/default.webp";
        fallbackWebpExists = await verifyFileExists(fallbackWebp);
    }
}

// Crea componente del header de la tarjeta del Pokemon
export function createCardHeader(id) {
    const $cardHeader = createElement("header", "card-header text-center");
    const $span = createElement("h5", "text-muted fw-semibold", `#${id}`);
    $cardHeader.append($span);
    return $cardHeader;
}

// Crea componente de los tipos del Pokemon
function createCardTypesBadges(types) {
    const $cardTypes = createElement("section", "d-flex justify-content-center flex-wrap gap-2 mb-3");
    for (const type of types) {
        const $badge = createBadge("", type.type.name, [type], true);
        $cardTypes.append($badge);
    }
    return $cardTypes;
}

// Crea componente de datos del Pokemon
function createCardInfo(nombre, id, tipos) {
    const $cardInfo = createElement("div", "card-body text-center");
    const $title = createElement("h5", "card-title product-card-title fw-bold text-capitalize fs-4",  nombre ? nombre : " Pokemon Generico", false);
    const $typeContainer = createCardTypesBadges(tipos);
    const $button = createButton("Ver Detalles", "btn btn-outline-light", null, "modal", "#detallesModal",  id ? id : "pokemon-generico");
    $cardInfo.append($title,$typeContainer, $button);
    return $cardInfo;
}

// Crea componente de la imagen del Pokemon
function createCardPicture(pokemon) { 
    const $picture = createElement("picture")
    $picture.className = "card-img-top";
    const fallbackWebp = "./assets/img/default.webp";
    const fallbackPng = "./assets/img/default.png";
    
    const $source = createElement("source")
    $source.srcset = (pokemon.sprites?.front_default && fallbackWebpExists) ? "" : fallbackWebp;
    $source.type = "image/webp";
    
    const imageUrl = pokemon.sprites?.front_default || fallbackPng;
    const $image = createImage(imageUrl, pokemon.name ? pokemon.name : "Pokemon Génerico", "w-100", null, true);
    $image.style.viewTransitionName = `pokemon-image-${pokemon.id}`;
    
    $image.onerror = function() { 
        if (fallbackWebpExists) {
            $source.srcset = fallbackWebp;
        }
        $image.src = fallbackPng;
    };
    
    $picture.append($source, $image);
    return $picture;
}

// Crea componente tarjeta de Pokemon
function createProductCard(pokemon) { 
    const $productCard = createElement("article", "card product-card m-3", null, false, null, pokemon.types);
    const $picture = createCardPicture(pokemon);
    const $cardInfo = createCardInfo(pokemon.name, pokemon.id, pokemon.types);
    $productCard.append($picture, $cardInfo);
    return $productCard;
}

// Crea Seccion de tarjetas de Pokemon
export async function createCardSection(pokemones) {
    const $section = $(`#pokemons`);

    //Verifica existencia de archivo WebP
    if (fallbackWebpExists === null) {
        await preloadWebPCheck();
    }

    for (const pokemon of pokemones) {
        const $productCard = createProductCard(pokemon);
        $section.append($productCard);
    };
}

## Asistente · 7/9/26, 6:18:20 p. m.

Exactamente. Y **ese código es un ejemplo espectacular** para hacer el experimento, porque sin darte cuenta ya hiciste una especie de sistema de componentes propio.
Mirá la estructura que ya tenés:
```text
createCardSection()
    │
    └── createProductCard()
          ├── createCardPicture()
          └── createCardInfo()
                └── createCardTypesBadges()
```
Eso es prácticamente un **árbol de componentes**. La diferencia es que en lugar de tener:
```jsx
<PokemonCard pokemon={pokemon} />
```
tenés:
```js
createProductCard(pokemon)
```
y en lugar de que React gestione el DOM, vos lo estás gestionando directamente:
```js
const $productCard = createElement(...);
$productCard.append(...);
```
### Y acá aparece lo interesante con Web Components
Podrías convertir, por ejemplo, `createProductCard()` en un elemento real:
```html
<pokemon-card></pokemon-card>
```
Y desde JavaScript:
```js
const card = document.createElement("pokemon-card");
card.pokemon = pokemon;
document.querySelector("#pokemons").append(card);
```
El componente podría encargarse internamente de:
```js
class PokemonCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    set pokemon(value) {
        this._pokemon = value;
        this.render();
    }
    render() {
        // crear imagen
        // crear título
        // crear badges
        // crear botón
        // etc.
    }
}
customElements.define("pokemon-card", PokemonCard);
```
Y ahí aparece una cosa que creo que te va a resultar **muy reveladora cuando llegues a React**:
```js
this.pokemon = value;
```
→ cambia el dato
```js
this.render();
```
→ actualiza la representación
Eso ya empieza a acercarse conceptualmente a lo que después encontrás en:
```jsx
const [pokemon, setPokemon] = useState(...)
```
No son equivalentes técnicamente, pero **el problema que estás resolviendo es el mismo**: *tengo datos → tengo una representación visual → cuando cambia el estado/dato, necesito que la interfaz refleje ese cambio.*
Y vos ya venís haciendo esto manualmente.

---
### Incluso tu `createCardPicture()` tiene cosas interesantes
Fijate todo lo que estás resolviendo ahí:

- creación de elementos
- composición
- datos opcionales
- fallback
- manejo de errores
- evento `onerror`
- estado (`fallbackWebpExists`)
- interacción entre elementos
- actualización del DOM

Esto:
```js
$image.onerror = function() { 
    if (fallbackWebpExists) {
        $source.srcset = fallbackWebp;
    }
    $image.src = fallbackPng;
};
```
es justamente el tipo de comportamiento que un framework te permite expresar de forma más declarativa.
Y esto:
```js
let fallbackWebpExists = null
```
con:
```js
if (fallbackWebpExists === null) {
    await preloadWebPCheck();
}
```
ya es una forma rudimentaria de **mantener estado/cache**.

---
### Y acá está la parte que me parece más importante para tu aprendizaje
No te recomendaría convertir este código a React **ahora**.
Haría algo bastante más interesante:
**1. Tu versión actual**
```text
Vanilla JS
    ↓
createElement()
createProductCard()
createCardPicture()
createCardInfo()
```
**2. Después de estudiar Web Components**
```text
Web Components
    ↓
<pokemon-card>
    ↓
Shadow DOM
    ↓
Custom Elements
```
**3. Después React**
```text
React
    ↓
<PokemonCard pokemon={pokemon} />
    ↓
state / props / effects / refs
```
Y ahí vas a poder mirar las tres implementaciones y decir:
> "Ahhhh... ahora entiendo qué problema estaba resolviendo cada una."
Eso es muchísimo más valioso que aprender:
> "`useEffect` se usa para X porque React dice que se usa para X."
De hecho, **tu Fate Saga App y la Pokédex pueden convertirse en excelentes proyectos didácticos precisamente porque están hechos en vanilla JS**. No los escondería ni los migraría simplemente para ponerles React.
En un portfolio incluso podés contar la historia:
> **"Implementé componentización, manejo de estado, renderizado dinámico, eventos, lazy loading, infinite scroll y consumo de APIs utilizando JavaScript vanilla, antes de profundizar en React."**
Y después tenés UPGL como evidencia de que **también podés trasladar esos conceptos a React**.
Ahí el mensaje no es *"sé React porque hice un tutorial de React"*.
Es:
**"Entiendo qué está haciendo React porque antes tuve que hacerlo yo."**
Y eso, Guille, es justamente lo que acabás de descubrir con ese módulo de Web Components. 😄
Además, MDN confirma que Web Components son APIs nativas del navegador —Custom Elements, Shadow DOM, templates/slots—, así que no es que JSCamp esté metiendo una versión "primitiva de React": estás viendo capacidades que existen directamente en la plataforma web. citeturn0search0turn0search3

## Usuario · 7/9/26, 6:21:35 p. m.

mejor aun, puedo crear una branch y aplicarle los webomponentes, y luego en otra, migrarla a react

## Asistente · 7/9/26, 6:21:36 p. m.

Sí. **Ahí ya no es solamente una buena idea: es un experimento de aprendizaje muy bueno.** 😂
Y además tenés una ventaja enorme: Git te permite conservar las tres versiones como evidencia de evolución.
Yo lo plantearía así:
```text
main
 │
 ├── vanilla-original
 │      └── implementación actual
 │
 ├── feature/web-components
 │      └── misma app
 │          └── Web Components
 │
 └── feature/react
        └── misma app
            └── React
```
Aunque incluso haría algo ligeramente distinto:
```text
main
  │
  └── web-components
        │
        └── react-migration
```
Así **React parte de la versión Web Components**, y podés comparar la evolución.
### Y lo mejor: no cambiarías la funcionalidad
La regla del experimento podría ser:
> **Misma aplicación, misma funcionalidad, distinta tecnología.**
Por ejemplo, tu tarjeta:
**Vanilla actual**
```js
createProductCard(pokemon)
```
↓
**Web Component**
```html
<pokemon-card></pokemon-card>
```
↓
**React**
```jsx
<PokemonCard pokemon={pokemon} />
```
Y ahí podés comparar:
| Problema | Vanilla | Web Component | React |
|---|---|---|---|
| Componentización | funciones | Custom Elements | componentes |
| Datos | argumentos | propiedades/atributos | props |
| DOM | manual | Shadow DOM / DOM | React DOM |
| Eventos | `addEventListener` | eventos del elemento | handlers |
| Estado | variables | propiedades/estado propio | `useState` |
| Referencias | variables DOM | `this` / refs DOM | `useRef` |
| Renderizado | manual | `render()` | render declarativo |
| Ciclo de vida | manual | callbacks del Custom Element | `useEffect`/lifecycle |
Y **ahí sí vas a poder descubrir por experiencia qué aporta realmente React** en vez de aprenderlo como una lista de APIs.
Incluso hay una pregunta muy interesante que podés responder haciendo la migración:
> **¿Qué código que escribí manualmente desaparece cuando paso a React?**
Ese es probablemente uno de los mejores ejercicios que podrías hacer con tu Pokédex.
Y después podés dejar las branches ahí. En una entrevista podrías mostrar:
> "La versión original está hecha en JavaScript vanilla. Después hice una implementación con Web Components y finalmente la migré a React para comparar las tres arquitecturas."
Eso es **muchísimo más interesante** que simplemente decir "tengo un proyecto en React".
Y encima encaja perfectamente con lo que acabás de descubrir: primero aprendiste a hacer muchas de estas cosas **a mano**, después vas a aprender la abstracción nativa del navegador, y finalmente el framework.
**Vanilla → Web Components → React.**
Ahora sí estás convirtiendo JSCamp en un laboratorio, no en otro curso para acumular certificados. 😄

## Usuario · 7/9/26, 6:23:34 p. m.

mejor aun, puedo crear una branch o un fork y aplicarle los webomponentes, y luego en otra, migrarla a react

## Asistente · 7/9/26, 6:23:36 p. m.

Sí. **Eso es bastante mejor que simplemente migrarlo a React.** Porque convertís el proyecto en una especie de experimento evolutivo.
Yo lo haría así:
```text
pokedex
│
├── main              ← versión original
│   └── Vanilla JS
│
├── web-components    ← misma app, otra arquitectura
│   └── Vanilla JS + Web Components
│
└── react             ← misma app, migrada
    └── React
```
O incluso mejor para Git:
```text
main
   ↓
feature/web-components
   ↓
feature/react-migration
```
Aunque **yo prefiero branches independientes desde `main`**, para que cada versión pueda compararse directamente.
### Y hay algo todavía más interesante
No tendrías que hacer una conversión mecánica de:
```js
createProductCard(pokemon)
```
a:
```jsx
<PokemonCard pokemon={pokemon} />
```
Podés preguntarte en cada versión:
> **¿Cómo resolví este mismo problema con esta tecnología?**
Por ejemplo:
| Problema | Vanilla | Web Component | React |
|---|---|---|---|
| Componente | función | `<pokemon-card>` | `<PokemonCard>` |
| Datos | argumentos | properties/attributes | props |
| Estado | variables | propiedades/estado interno | `useState` |
| DOM | manual | Shadow DOM / DOM API | Virtual DOM + render |
| Eventos | `onclick`, `addEventListener` | eventos custom/nativos | handlers |
| Referencia DOM | variable `$image` | `this.shadowRoot...` / refs | `useRef` |
| Ciclo de vida | funciones propias | lifecycle del custom element | `useEffect` |
| Renderizado | manual | `render()` | JSX/render |
Y ahí vas a tener una comparación **real**, basada en el mismo proyecto.
De hecho, tu `createProductCard()` ya tiene una ventaja enorme para esto: está suficientemente encapsulado como para que sea un candidato natural a componente.
Podrías terminar teniendo:
```text
Vanilla
createProductCard(pokemon)
```
↓
```text
Web Components
<pokemon-card pokemon="...">
```
↓
```text
React
<PokemonCard pokemon={pokemon} />
```
Y después podés hacer exactamente lo mismo con otras partes de la Pokédex: modal, badges, búsqueda, paginación/infinite scroll, etc.
Eso además te da **un proyecto de portfolio bastante más interesante que "Pokédex hecha con React"**.
Podrías presentarlo como:
> **Pokédex — Vanilla JS → Web Components → React**
>
> La misma aplicación implementada utilizando tres modelos de componentización diferentes, explorando cómo evolucionan el manejo del DOM, estado, eventos, ciclo de vida y composición de componentes.
Eso ya no demuestra solamente que sabés React.
Demuestra que **entendés la abstracción que React está intentando resolver**.
Y, paradójicamente, creo que *Fate Saga* y la Pokédex siendo originalmente vanilla son lo que hace posible hacer este experimento de una manera tan buena. 😄