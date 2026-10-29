# Bitácora técnica: evolución de Guillermo Cochrane como desarrollador

## Propósito y criterio de lectura

Esta bitácora reconstruye la evolución técnica y profesional a partir de repositorios, decisiones, problemas enfrentados y contexto personal.

No busca evaluar los primeros trabajos como si fueran aplicaciones de producción. Busca identificar qué se aprendió, qué iniciativa hubo detrás de cada proyecto, cómo aumentó la complejidad y qué evidencias pueden servir para el portfolio y las entrevistas laborales.

Conviene distinguir tres cosas en cada etapa:

- **La consigna original:** qué se esperaba aprender o entregar.
- **La evolución real:** qué decidió construir Guillermo por iniciativa propia y qué mejoras se incorporaron después.
- **La evidencia disponible:** qué puede comprobarse en el código y qué depende del relato sobre el proceso de trabajo.

Un ejercicio inicial puede ser sencillo y, aun así, convertirse en el punto de partida de algo bastante más ambicioso.

---

# Etapa 1. Formación inicial y primeros proyectos fullstack

## 1. Grupo_3_ComidaLibre

**Repositorio:** [Grupo_3_ComidaLibre](https://github.com/GuillermoCochrane/Grupo_3_ComidaLibre)

### Contexto

Proyecto grupal realizado durante el curso Fullstack de Digital House. El trabajo se desarrolló entre cinco integrantes, con responsabilidades distribuidas por tareas.

En el sprint 8, correspondiente a React, Guillermo desarrolló el dashboard completo. Otro integrante trabajó en los endpoints necesarios para alimentarlo. También asumió la presentación final y la documentación del sprint cuando un compañero tuvo que ausentarse por un problema familiar. La responsabilidad de CSS quedó en manos de Laura, que prefería trabajar en esa área.

La persistencia terminó resolviéndose con MySQL. La dificultad para encontrar un proveedor gratuito y práctico hizo que el despliegue fuera más complicado.

### Tecnologías y alcance

- Node.js y Express.
- EJS para las vistas.
- MySQL, MySQL2 y Sequelize.
- Sesiones, autenticación y bcrypt.
- React para el dashboard.
- Rutas de vistas y endpoints de API.

El proyecto conserva material de retrospectiva y documentación de los sprints, útil para entender el trabajo de equipo y la organización ágil del curso.

### Qué demuestra

No solo sirve como evidencia de haber cursado Fullstack. Permite explicar una experiencia concreta de colaboración entre frontend y backend: una persona construyó la interfaz, otra preparó los endpoints y hubo que integrar ambas partes.

También demuestra capacidad para asumir responsabilidades adicionales cuando el equipo lo necesita.

**Valor para el portfolio:** experiencia de trabajo en equipo, integración de frontend con backend y participación en un ciclo de desarrollo compartido. Conviene presentarlo como proyecto formativo grupal, identificando con precisión qué partes desarrolló Guillermo.

---

## 2. Mercado-Liebre-2.0

**Repositorio:** [Mercado-Liebre-2.0](https://github.com/GuillermoCochrane/Mercado-Liebre-2.0)

### Contexto

Proyecto individual desarrollado en paralelo al trabajo grupal de Digital House. La intención era practicar por cuenta propia los conceptos que trabajaban los compañeros y experimentar con ideas que no estaban necesariamente incluidas en el programa.

En lugar de MySQL, utilizó persistencia mediante archivos JSON, lo que simplificaba el despliegue en plataformas como Heroku o Render.

### Tecnologías y funcionalidades

- Node.js, Express y EJS.
- Organización MVC.
- Datos persistidos en JSON.
- Autenticación con bcrypt.
- Sesiones y cookies, incluida la opción de recordar la sesión.
- Roles de usuario.
- CRUD de productos.
- Subida y gestión de imágenes.

Una iniciativa particularmente interesante fue implementar un contador de visualizaciones de productos, con la idea de que esos datos pudieran utilizarse más adelante para sugerir productos o desarrollar recomendaciones.

### Qué demuestra

Este proyecto marca una diferencia respecto de la tarea grupal: Guillermo no se limitó a cumplir con las responsabilidades asignadas. Creó una segunda oportunidad para practicar individualmente, experimentar y comprobar que podía integrar los conceptos sin depender de un equipo.

La idea del contador también muestra una forma inicial de pensar más allá de la interfaz: generar datos de uso que, posteriormente, pudieran alimentar otra funcionalidad.

**Valor para el portfolio:** iniciativa personal, autonomía, experimentación y construcción de un e-commerce con estructura de aplicación web.

---

# Etapa 2. Consolidación mediante práctica autónoma

## 3. Repaso

**Repositorio:** [Repaso](https://github.com/GuillermoCochrane/Repaso)

### Contexto

Después de terminar Digital House, Guillermo sintió que todavía no dominaba suficientemente los contenidos. En vez de dar el curso por terminado y seguir adelante, decidió volver a recorrerlo desde cero.

Tenía los PDF teóricos, encontró una manera de acceder a las clases grabadas de Vimeo y rehízo los ejercicios. También utilizó lo aprendido para desarrollar su proyecto integrador.

En esa etapa todavía no contaba con la IA comercial como herramienta habitual de programación. El proceso se apoyaba en los materiales de estudio, la documentación, Stack Overflow y las consultas a docentes.

### Contenidos

El repositorio reúne material de distintas áreas:

- Fundamentos de JavaScript y Node.js.
- Estructura de aplicaciones web.
- Express, MVC, EJS, CRUD y middleware.
- Sesiones y cookies.
- Bases de datos SQL y Sequelize.
- APIs.
- JavaScript para frontend.
- React, componentes y hooks.
- Ejercicios, prácticas y material teórico.

El repositorio fue evolucionando con el tiempo; no debe interpretarse como un trabajo realizado íntegramente en una única fecha.

### Qué demuestra

La secuencia de aprendizaje es importante:

1. Detectar una brecha de conocimiento.
2. Volver a la teoría.
3. Rehacer ejercicios para recuperar fluidez.
4. Aplicar lo aprendido en un proyecto propio.
5. Continuar incorporando y organizando material a medida que surgen nuevas necesidades.

Esta metodología permite explicar cómo Guillermo abordó sus limitaciones técnicas antes de contar con asistencia habitual de modelos de lenguaje.

**Valor para el portfolio:** no es necesariamente un proyecto para mostrar como producto final. Es una evidencia de disciplina, capacidad de autoevaluación y aprendizaje autónomo.

---

## 4. proyecto-integrador — Multihogar

**Repositorio:** [proyecto-integrador](https://github.com/GuillermoCochrane/proyecto-integrador)

**Demo:** [Multihogar en Render](https://multi-hogar.onrender.com)

### Contexto

Aplicación de comercio electrónico creada para practicar de forma integrada los contenidos del curso y del repositorio Repaso.

A diferencia de los ejercicios aislados, el proyecto necesitaba conectar las distintas partes de una aplicación completa: productos, usuarios, carrito, ventas y administración.

### Tecnologías y funcionalidades

- Node.js, Express y EJS.
- Estructura MVC.
- Persistencia mediante archivos JSON.
- Registro e inicio de sesión.
- Sesiones, cookies y bcrypt.
- Roles administrativos.
- Productos y gestión de imágenes.
- Carrito y ventas.
- Controladores y funciones separados por áreas.
- Envío de correos con Nodemailer.
- Tareas programadas mediante node-cron.

El desarrollo siguió después de la primera versión. Entre los cambios posteriores hubo trabajos relacionados con tareas programadas para mantener activa la instancia de Render.

### Qué demuestra

El valor principal está en la integración. Permite observar cómo los conocimientos adquiridos por separado empezaron a conectarse en una aplicación con múltiples responsabilidades y flujos.

También marca el paso desde ejercicios individuales hacia una aplicación que podía desplegarse y mantenerse en funcionamiento.

**Valor para el portfolio:** experiencia construyendo una aplicación fullstack con funcionalidades de negocio. Si se retoma para el portfolio, convendrá distinguir las funciones que siguen operativas de las que necesitan actualización.

---

# Etapa 3. Nuevos lenguajes, nuevos entornos y proyectos institucionales

## 5. curso-python

**Repositorio:** [curso-python](https://github.com/GuillermoCochrane/curso-python)

### Contexto

Curso de Python iniciado en abril de 2024. En ese período, Guillermo seguía repasando contenidos de Digital House y todavía tenía pendiente terminar el dashboard de React asociado a sus ejercicios anteriores.

Los cursos de la Universidad Popular de General Levalle también eran una forma de salir de casa y recuperar actividad. Python se desarrolló como experiencia formativa paralela, no como transición inmediata hacia un empleo en ese lenguaje.

### Contenidos y prácticas

El repositorio organiza materiales por clases, junto con teoría, prácticas, ejercicios y documentación. Entre las experiencias se encuentran:

- Fundamentos de programación.
- Programación orientada a objetos.
- Consumo de APIs.
- Una aplicación del clima.
- Un clon de Paint.

### Qué demuestra

Capacidad para aprender un lenguaje adicional, organizar materiales y experimentar con aplicaciones pequeñas.

**Valor para el portfolio:** evidencia secundaria de formación y versatilidad. No es necesario presentarlo como especialización profesional en Python si la experiencia práctica se concentró principalmente en JavaScript.

---

## 6. UPGLEduPortal

**Repositorio:** [UPGLEduPortal](https://github.com/GuillermoCochrane/UPGLEduPortal)

**Demo:** [UPGL Edu Portal](https://upgl-edu-portal.vercel.app)

### Contexto

El portal educativo nació después de que los docentes compartieran contenidos teóricos en PDF durante los cursos de la UPGL. En vez de limitarse a leer los materiales, Guillermo decidió desarrollar una web que los organizara y permitiera consultarlos.

La primera versión funcional tomó aproximadamente quince días. El contenido se mantenía mediante datos estructurados en JavaScript, consumidos desde la aplicación React.

Más adelante surgió la idea de separar frontend y backend para permitir editar clases, gestionar usuarios y abandonar la dependencia de un catálogo fijo. Esa línea de trabajo quedó pausada cuando apareció la oportunidad de trabajar en Geopatagonia, pero el portal original siguió recibiendo mantenimiento y actualizaciones de contenidos.

### Tecnologías y evolución

- React y Vite.
- React Router.
- Organización modular de contenidos.
- Datos de cursos en JavaScript.
- Generación y actualización de índices de contenidos.
- Scripts auxiliares para generar módulos y reconstruir índices.

El repositorio también muestra una evolución posterior de la estructura: los contenidos se organizan por curso, clase, tema y datos, y existen utilidades como `moduleGenerator.js` e `indexBuilder.js` para automatizar parte de esa organización.

### Qué demuestra

El proyecto nació de una necesidad concreta de la institución y siguió evolucionando mientras se incorporaban nuevos materiales.

No es solamente un ejercicio de React: tiene usuarios reales en mente, información que mantener y una estructura que debe soportar crecimiento. La idea posterior de separar frontend y backend muestra, además, que Guillermo empezó a detectar límites de la arquitectura inicial.

**Valor para el portfolio:** proyecto institucional mantenido en el tiempo, con utilidad práctica y una historia clara de evolución. Es importante explicar que la separación completa entre frontend y backend fue una idea de una versión posterior, no una funcionalidad ya implementada en el portal revisado.

---

## 7. gestion-geopatagonia

**Repositorio:** [gestion-geopatagonia](https://github.com/GuillermoCochrane/gestion-geopatagonia)

### Contexto

Después del curso de WordPress de la UPGL, un docente invitó a Guillermo a sumarse a un desarrollo para Geopatagonia, porque WordPress por sí solo no alcanzaba para resolver las necesidades de la organización.

En diciembre comenzó a revisar nuevamente los materiales de MySQL. En enero de 2025 recibió documentación en PDF con los requisitos de la aplicación. El proyecto todavía no tenía una aprobación definitiva ni una seña, pero Guillermo decidió avanzar porque le interesaba el desafío de implementar un sistema diseñado por otras personas.

Durante los meses siguientes la aprobación se demoró. A fines de marzo, según la información que recibió en ese momento, la empresa atravesaba una paralización de actividades y una situación económica que complicaba la continuidad del encargo. La incertidumbre afectó su motivación y redujo el ritmo de trabajo. En abril, el curso de frontend de la UPGL se convirtió en otra forma de recuperar impulso.

La secuencia de GitHub indica actividad del repositorio hasta agosto de 2025, aunque esa información por sí sola no explica exactamente cómo evolucionó el trabajo tras la incertidumbre inicial.

### Requisitos y dominio

La aplicación gestiona procesos relacionados con acciones, observaciones y PAC, con perfiles y responsabilidades distintas:

- Ejecutor.
- Originador.
- Tratador.
- Observador.

Los documentos describen flujos para crear y abrir PAC y observaciones, editar acciones, asignar responsables, administrar adjuntos, utilizar formularios, aplicar filtros y realizar verificaciones de efectividad.

### Tecnologías

- Node.js, Express y EJS.
- MySQL y Sequelize.
- Sesiones y autenticación.
- Validación de formularios.
- Control de acceso por roles.
- Subida de archivos con Multer.
- Envío de correos con Nodemailer.
- Generación de PDF mediante Puppeteer.
- Modelos de datos para acciones, usuarios, sectores, estados, formularios, observaciones y adjuntos.

### Qué demuestra

Es un salto importante en complejidad respecto de los proyectos de formación. Guillermo dejó de inventar todos los requisitos por su cuenta y tuvo que interpretar un problema de otra persona, traducirlo en flujos y modelos, y construir una aplicación con múltiples perfiles y responsabilidades.

También es una experiencia relevante de trabajo con requisitos externos, incluso si el encargo no terminó convirtiéndose en una oportunidad laboral estable.

**Valor para el portfolio:** uno de los proyectos más representativos de la experiencia fullstack y de modelado de procesos. Como quedó en desarrollo, antes de presentarlo como terminado hay que identificar qué funcionalidades están completas y cuáles siguen pendientes.

---

# Etapa 4. El curso de frontend: de la consigna al proyecto propio

## 8. curso-front-upgl

**Repositorio:** [curso-front-upgl](https://github.com/GuillermoCochrane/curso-front-upgl)

**Blog:** [Despertar en el laberinto](https://guillermocochrane.github.io/curso-front-upgl/proyecto-final/)

**Landing pages del trabajo final:** [CAE](https://github.com/GuillermoCochrane/curso-front-upgl/tree/main/trabajo-final-integrador/CAE) y [DCI](https://github.com/GuillermoCochrane/curso-front-upgl/tree/main/trabajo-final-integrador/DCI)

### Contexto

El curso de frontend de la UPGL comenzó como una actividad de formación en HTML, CSS, JavaScript y Bootstrap. Al principio, las clases resultaban algo rutinarias. En ese contexto, el uso de ChatGPT 4 y las conversaciones con Liria llevaron a Guillermo a interesarse por *Westworld*, que terminó siendo el disparador de un proyecto personal.

El repositorio reúne tanto los ejercicios del curso como algunos de los desarrollos más importantes de esa etapa: el blog, la primera versión de la Pokédex y el trabajo final grupal de los clubes de fútbol locales.

### 8.1. Blog: *Despertar en el laberinto*

La consigna original era practicar HTML. La idea del curso era que el ejercicio integrador se fuera mejorando a medida que se aprendieran nuevas herramientas, por lo que la primera versión tenía CSS y JavaScript mínimos.

Sin embargo, el tema dejó de ser un simple contenido de relleno. La serie ofrecía material para conectar narrativa, filosofía, conciencia, memoria, libertad e inteligencia artificial, y Guillermo empezó a convertir el blog en un proyecto propio.

El repositorio actual conserva una evolución más amplia que la consigna inicial:

- Página principal y navegación.
- Páginas de análisis de episodios.
- Sección de ensayos.
- Contenido relacionado con *Westworld*, *Matrix* y otras obras.
- Recursos de navegación y organización del contenido.
- Metadatos y elementos para compartir el sitio.
- Funcionalidades de interfaz como selector de tema.

Los primeros análisis publicados en el HTML están fechados en junio de 2025. El repositorio también conserva ensayos y páginas desarrollados posteriormente.

### Qué demuestra

La consigna inicial no pretendía producir una aplicación compleja. El valor apareció cuando Guillermo encontró un tema que le interesaba y empezó a ampliar el proyecto por iniciativa propia.

El blog sirve para mostrar el uso del frontend con un objetivo editorial y la capacidad de organizar contenido extenso en varias páginas. Además, conecta una experiencia de aprendizaje técnico con un interés personal sostenido.

**Valor para el portfolio:** proyecto personal con identidad temática. No hace falta presentarlo como una aplicación de producción: su valor está en el diseño de una experiencia de lectura, la navegación y la construcción de un espacio de análisis propio.

### 8.2. Trabajo final: dos landing pages de clubes locales

La consigna final del curso, con fecha de entrega prevista para el 18 de noviembre de 2025, exigía desarrollar páginas para clubes de fútbol locales utilizando HTML, CSS, JavaScript y Bootstrap.

La idea inicial de Guillermo era realizar solo el sitio de un tercer club. Sin embargo, durante la primera semana observó que los dos equipos formados para las entregas no conseguían organizarse ni avanzar. Los docentes le propusieron asumir el rol de PM y TL de ambos grupos, y aceptó el desafío.

### Organización del trabajo

Guillermo tomó como punto de partida dos proyectos de compañeros y preparó una plantilla común con:

- Header.
- Navbar.
- Footer.
- Estructura preparada para integrar las distintas secciones.

Luego dividió las páginas en secciones: historia del club, camiseta y escudo, plantel de jugadores, cancha y galería.

Antes de asignar tareas, consultó si alguien prefería trabajar en una sección en particular. Después distribuyó las restantes considerando la dificultad de cada sección y las capacidades de los integrantes.

Cada persona trabajaría sobre su parte y Guillermo integraría el resultado. Como los compañeros todavía no utilizaban Git, organizó la colaboración mediante archivos y estructuras compartidas en lugar de depender de un flujo de trabajo con ramas y pull requests.

### Resultados y evidencia

En aproximadamente 21 días consiguieron tener las landing pages listas. El repositorio conserva:

- Las páginas de CAE y DCI.
- Los recursos visuales de los clubes.
- La documentación de división de secciones.
- Los lineamientos de la entrega.
- Material de planificación.
- Versiones intermedias de las páginas.

### Qué demuestra

Este trabajo permite contar una experiencia distinta a la de programar una funcionalidad individual. Guillermo detectó un bloqueo, propuso una estructura para que los demás pudieran trabajar en paralelo y estableció un proceso de integración.

Hay evidencias concretas de planificación y comunicación: el documento `division_de_secciones.md` registra el reparto de tareas y las dificultades de las secciones, mientras que la documentación de lineamientos conserva los requisitos de la entrega.

La experiencia también tuvo un costo personal: la coordinación de dos equipos, el seguimiento de avances y la integración terminaron siendo agotadores.

**Valor para el portfolio:** liderazgo operativo, organización de tareas, reutilización de estructura, distribución según dificultad, comunicación e integración de entregables. Es una experiencia relevante incluso sin un título formal de PM o TL en un empleo.

Conviene contarla con precisión: fue una coordinación de equipos en un contexto formativo, no una experiencia comercial de gestión de proyectos.

---

# Etapa 5. Proyectos nacidos de intereses personales y desafíos técnicos

## 9. Fate Saga App

**Repositorio:** [fate-saga-app](https://github.com/GuillermoCochrane/fate-saga-app)

### Contexto

Después de empezar a ver *Fate*, Guillermo descubrió que la cantidad de series, películas, especiales y sagas hacía poco práctico mantener el seguimiento solamente en un documento Markdown.

El proyecto nació de una necesidad personal: organizar el orden de visualización y marcar el progreso. Con el tiempo, la idea se amplió a un tracker de franquicias audiovisuales con estructuras de datos y plantillas para diferentes universos.

### Funcionalidades observables

La aplicación actual incluye elementos como:

- Checklists de franquicias y sagas.
- Organización de contenidos por temporadas, episodios o categorías.
- Seguimiento del progreso completado y pendiente.
- Indicadores de progreso general.
- Filtros para ver elementos completados o pendientes.
- Importación y exportación de datos JSON.
- Cambio de franquicia.
- Opciones para reiniciar progreso y gestionar los datos.
- Reportes y ventanas modales.

El repositorio incluye datos organizados para *Fate*, MCU y otras estructuras, además de listas específicas. La organización de datos evolucionó hacia múltiples módulos y archivos por saga y contenido.

También hay evidencia de refactorizaciones posteriores en la estructura de JavaScript: la creación de componentes auxiliares, la separación de responsabilidades y la conversión de funciones de renderizado en orquestadores más claros.

### Mantenimiento paralelo al trabajo con Diego

Durante los meses en que trabajó en la SaaS, Guillermo no abandonó Fate Saga App. Aunque no estaba desarrollando una nueva funcionalidad importante en cada sesión, sí realizó mantenimiento para conservar el proyecto en movimiento.

Entre las tareas que recuerda se encuentran la auditoría y mejora de la base de datos de la aplicación, la ampliación de sus contenidos y la incorporación del Universo Cinematográfico de Marvel y otras secciones relacionadas con Marvel.

El historial del repositorio contiene cambios de mayo de 2026 vinculados con la modularización de los datos, la refactorización del renderizado y el uso de etiquetas semánticas. Es evidencia de trabajo sobre una aplicación existente, aunque el historial por sí solo no permite atribuir cada cambio a un período específico de la colaboración laboral.

### Qué demuestra

Es un ejemplo de cómo una necesidad cotidiana se convirtió en una aplicación que requiere modelar datos, representar jerarquías, mantener estado e implementar operaciones de importación y exportación.

También demuestra que la continuidad de un proyecto no exige desarrollar siempre grandes funcionalidades. A veces consiste en auditar datos, refactorizar una parte, incorporar contenido nuevo y mantener el código en condiciones de seguir evolucionando.

**Valor para el portfolio:** iniciativa personal, organización de datos, manipulación del DOM y desarrollo de una interfaz interactiva sin depender necesariamente de un framework. Para presentarlo, convendrá explicar qué decisiones permitieron que los datos fueran extensibles a otras franquicias.

---

## 10. desafio-pokedex

**Repositorio:** [desafio-pokedex](https://github.com/GuillermoCochrane/desafio-pokedex)

**Demo:** [Pokédex desplegada](https://guillermocochrane.github.io/desafio-pokedex/)

### Contexto

El punto de partida fue la clase de `fetch` del curso de frontend. Mientras los docentes utilizaban la PokéAPI para mostrar los nombres de los primeros diez Pokémon, Guillermo ya estaba construyendo tarjetas visuales con más información.

Los docentes lo desafiaron a desarrollar, en una semana, una página con tarjetas, imágenes, detalles en modales y estilos visuales propios. El requisito más creativo era que las tarjetas utilizaran glassmorphism con el color del tipo de cada Pokémon y, cuando hubiera varios tipos, una combinación en gradiente.

La primera implementación nació dentro del repositorio del curso. Luego se trasladó a un repositorio independiente para continuar desarrollándola.

### Tecnologías y funcionalidades

La aplicación se construyó con HTML, CSS, JavaScript vanilla y Bootstrap, consumiendo la PokéAPI.

La versión que existe actualmente en el repositorio va bastante más allá de la consigna inicial. El README y el código describen funcionalidades como:

- Búsqueda predictiva con autocompletado.
- Caché de datos para evitar solicitudes innecesarias.
- Carga progresiva de Pokémon mediante infinite scroll.
- Modal con pestañas de estadísticas, movimientos, habilidades y ubicaciones.
- Diseño responsive.
- Sistema de notificaciones.
- Filtrado y ordenamiento de datos.
- Gestión del estado sin librerías externas.
- Módulos separados para la lógica central, los componentes, los modales y las utilidades.
- Carga optimizada de imágenes, con soporte para WebP y alternativas cuando la imagen no está disponible.

### Evolución posterior

La consigna inicial fue un desafío de una semana, pero el historial del repositorio muestra trabajo posterior. Hubo refactorizaciones de la creación de tarjetas, resolución de problemas de asincronía, incorporación de fallbacks para imágenes y ajustes al sistema de filtrado.

Por eso, la Pokédex debe interpretarse en dos niveles: el desafío que impulsó la primera versión y el desarrollo posterior que hizo crecer la aplicación.

### Qué demuestra

Es una de las evidencias más fuertes de iniciativa técnica en el frontend. Guillermo recibió una restricción temporal, definió una experiencia visual diferenciada y empezó a resolver problemas que van más allá de mostrar datos de una API.

También muestra que el aprendizaje no se detuvo al conseguir una versión funcional: el proyecto siguió recibiendo mejoras, reorganización del código y atención a casos de error.

**Valor para el portfolio:** uno de los mejores proyectos de frontend para destacar. Permite mostrar consumo de API, JavaScript vanilla, modularización, búsqueda, manejo de datos, asincronía, experiencia de usuario y mejoras iterativas.

---

# Etapa 6. Primera experiencia laboral con agentes de IA y refactorización de código existente

## 11. Stock RA — SaaS de gestión para tiendas de ropa

**Repositorio de referencia:** [stock](https://github.com/GuillermoCochrane/stock)

**Ejemplo de trabajo en vistas:** [views/cajas](https://github.com/GuillermoCochrane/stock/tree/main/views/cajas)

### Contexto: una pausa que terminó siendo un punto de inflexión

Después del curso de frontend, Guillermo se tomó aproximadamente un mes sin programar. La pausa le permitió reconocer que ya contaba con suficientes conocimientos para defender sus decisiones técnicas en una entrevista: no necesariamente sabía todo, pero podía explicar por qué había elegido un enfoque y sostener sus argumentos.

En vez de lanzarse inmediatamente a otra tecnología, decidió pulir proyectos que ya tenía en marcha. Dejó la Pokédex en un estado que consideraba cercano a terminado y estaba por retomar Fate Saga App cuando Diego, uno de los docentes del curso de Python, le ofreció trabajar en una SaaS de gestión para tiendas de ropa.

La remuneración sería un porcentaje de los ingresos del proyecto. La aplicación ya estaba en desarrollo y Diego necesitaba ayuda con el trabajo pendiente.

Ese cambio llevó a Guillermo de los proyectos autocontenidos a un entorno de trabajo más cercano a la experiencia profesional: código escrito por otra persona, tickets, necesidades concretas y decisiones técnicas que no podía tomar como si el proyecto empezara de cero.

### Aprendizaje acelerado: PHP y un agente de programación

Guillermo tuvo unos quince días para aprender PHP y familiarizarse con el uso de un agente de IA integrado en el entorno de desarrollo. Eligió Antigravity IDE, principalmente por las posibilidades de uso gratuito que tenía disponibles en ese momento.

Al principio, trabajar sobre un proyecto ajeno y utilizar un agente generaba cierta inseguridad. El primer avance llegó cuando descubrió que la estructura de los templates PHP le resultaba conceptualmente familiar por su experiencia con EJS.

La sintaxis no es idéntica y PHP introduce sus propias particularidades, pero la familiaridad con la lógica de las plantillas, las variables y la mezcla de código de servidor con HTML permitió transferir conocimientos previos con rapidez.

En lugar de intentar dominar todo el sistema desde el principio, comenzó por optimizar templates que contenían grandes bloques de código, algunos de más de 500 líneas.

### Evolución de las responsabilidades

La colaboración fue aumentando progresivamente:

1. Aprender lo necesario de PHP para poder trabajar sobre el sistema existente.
2. Optimizar y refactorizar templates.
3. Recibir tickets y mejoras asignadas por Diego.
4. Continuar identificando y refactorizando templates durante los tiempos libres.
5. Desarrollar un sistema de breadcrumbs para mantener el contexto técnico entre sesiones de trabajo con el agente.
6. Evolucionar hacia un flujo de trabajo más estructurado y cercano a SDD.

El reparto inicial de tareas también importa: Diego se concentraba principalmente en el backend, mientras que Guillermo trabajaba sobre todo en las vistas y templates. No era un proyecto creado por Guillermo ni un ejercicio donde pudiera imponer una arquitectura desde el inicio. La responsabilidad consistía en mejorar partes de un sistema existente sin perder de vista cómo encajaban en el conjunto.

### De refactorizar templates a hacerse cargo de la aplicación

Con el tiempo, Diego comenzó a detectar un problema recurrente: las modificaciones producidas por sus propios agentes de IA rompían mejoras que ya había implementado. Las intervenciones podían resolver una tarea puntual, pero también deshacer trabajo anterior y volver más difícil mantener estable el sistema.

Según relata Guillermo, cuando la aplicación estuvo relativamente estable, Diego decidió delegársela por completo. La decisión surgió porque las refactorizaciones de Guillermo estaban dejando el código más ordenado y escalable, y las modificaciones posteriores generadas por agentes podían comprometer esa organización.

Esto marca un cambio importante dentro de la experiencia: Guillermo pasó de recibir tickets y mejorar templates a ser el responsable principal de la aplicación.

El valor no está en declarar que el código de una persona siempre es superior al de una IA. Está en el problema concreto que apareció: los cambios debían ser compatibles entre sí y preservar las mejoras anteriores. Una intervención útil no podía medirse solamente por si el ticket puntual funcionaba; también tenía que considerar el estado global del sistema.

### De las breadcrumbs a un flujo de trabajo estructurado

Uno de los problemas detectados fue la limitación de memoria y continuidad del agente: al cambiar de sesión o perder contexto, podía ser necesario volver a explicar decisiones, estructura y restricciones del proyecto.

Para resolverlo, Guillermo empezó a construir su propio sistema de breadcrumbs: notas y referencias de contexto que ayudaban a recuperar información relevante, documentar el estado del trabajo y orientar las siguientes intervenciones del agente.

Ese mecanismo fue evolucionando hasta convertirse en una metodología más estructurada. El flujo empezó a parecerse a un enfoque de *Spec-Driven Development* (SDD): mantener requisitos y contexto explícitos, delimitar tareas, guiar al agente y revisar el resultado en función de lo que el sistema necesitaba.

La semejanza con SDD debe entenderse como una evolución del método de trabajo, no necesariamente como una implementación formal de una metodología estándar. Lo importante es que el proceso nació de un problema real de continuidad y coordinación con la IA.

### Fin del proyecto y limitaciones de la oportunidad comercial

Después de aproximadamente seis meses, Diego dio de baja la SaaS. Con solo dos clientes, los ingresos no alcanzaban para cubrir el hosting y sostener el proyecto.

La decisión volvió a frustrar a Guillermo: había invertido tiempo en adaptarse a una tecnología nueva y a una forma de trabajo diferente, pero el proyecto no podía mantenerse económicamente.

Sin embargo, la experiencia no desaparece porque el negocio haya cerrado. La oportunidad le permitió trabajar con código ajeno, tickets, mejoras, refactorización y un agente de IA en un contexto mucho más cercano a las tareas habituales de desarrollo que un ejercicio de curso.

---

## 12. Repositorio `stock`: evidencia de refactorización de templates

**Repositorio:** [GuillermoCochrane/stock](https://github.com/GuillermoCochrane/stock)

**Sección de cajas:** [views/cajas](https://github.com/GuillermoCochrane/stock/tree/main/views/cajas)

### Cómo leer este repositorio

El repositorio público es una copia del estado del proyecto laboral, no un historial completo y fiel de cada cambio realizado durante los seis meses de trabajo. Tiene un único commit de respaldo, por lo que no permite reconstruir por sí solo la secuencia de las contribuciones.

Para interpretar esta evidencia hay que combinar dos fuentes:

- **El código conservado**, que permite ver la estructura final de determinados archivos.
- **El relato de Guillermo**, que explica su participación, las tareas recibidas, las refactorizaciones realizadas y el proceso de trabajo con Diego y el agente.

No corresponde atribuir a Guillermo la autoría de todo el sistema por tener una copia del repositorio. La contribución descrita se concentró principalmente en las vistas y, hacia el final, en la responsabilidad general de la aplicación.

### Ejemplo: `views/cajas`

En esa carpeta se conserva un archivo llamado `index_old.php`, de aproximadamente 29,5 KB, junto a una estructura refactorizada con archivos más pequeños:

- `index.php`
- `modules/cajas_logic.php`
- `modules/cajas_template.php`
- `modules/cajas_script.php`

La nueva entrada `index.php` actúa como orquestador: incorpora la lógica de preparación de datos, el encabezado, el template y los scripts. La presentación se distribuye además entre parciales reutilizables.

Por ejemplo, `cajas_template.php` delega la estructura en componentes separados para la sección principal, la información y distintos modales. Los parciales de apertura, cierre y resultados preparan los datos de cada modal y reutilizan un componente genérico de interfaz.

La lógica de `cajas_logic.php` prepara variables de sesión, información de sucursales, saldos de cierres anteriores y condiciones de disponibilidad de acciones. `cajas_script.php` expone datos seleccionados desde PHP para que JavaScript pueda utilizarlos en el navegador.

### Qué demuestra esta estructura

La evidencia observable permite identificar varias decisiones de organización:

1. **Separar responsabilidades:** la preparación de datos, el marcado de la página y la exposición de variables para JavaScript dejan de concentrarse en el archivo de entrada.
2. **Reducir la carga cognitiva:** la entrada principal es pequeña y ofrece un mapa de las partes que componen la pantalla.
3. **Descomponer componentes de interfaz:** los modales y secciones pueden entenderse y modificarse con menor necesidad de recorrer toda la página.
4. **Reutilizar estructuras existentes:** el uso de un modal genérico permite que distintos flujos compartan una base.
5. **Preservar el comportamiento de la aplicación:** la refactorización se realiza dentro de una arquitectura ajena, donde los nombres, variables, datos de sesión y dependencias deben seguir siendo compatibles con el resto del sistema.

Esto no demuestra automáticamente que todos los problemas del template original estén resueltos ni que cada archivo nuevo tenga una única responsabilidad perfecta. Sí proporciona un ejemplo concreto de cómo una vista extensa puede reorganizarse en piezas más comprensibles y fáciles de mantener.

### Valor para el portfolio y las entrevistas

El repositorio puede servir como material para explicar una refactorización sobre código preexistente, siempre que se presente de forma transparente:

- El sistema original pertenecía a un proyecto compartido con Diego.
- La contribución se concentró inicialmente en las vistas y templates.
- Con el tiempo, Guillermo asumió la responsabilidad de la aplicación según el relato de la colaboración.
- El repositorio público es una copia del estado final, no un registro completo de todos los commits de trabajo.
- La experiencia laboral incluyó tareas y mejoras adicionales que no necesariamente pueden reconstruirse solo a partir de esa copia.

La historia técnica es más fuerte cuando se acompaña con el problema inicial, las decisiones de descomposición, la forma de validar que la aplicación siguiera funcionando y el papel de las herramientas utilizadas.

---

# Etapa 7. Un año con interrupciones, una formación menos útil y aprendizaje por iniciativa propia

## 13. Curso de backend de la UPGL

**Repositorio:** [curso-back-upgl](https://github.com/GuillermoCochrane/curso-back-upgl)

### Contexto académico

Tras el cierre de la SaaS de Diego, Guillermo volvió a tener una frustración parecida a la que había experimentado después del proyecto de Geopatagonia. Había invertido esfuerzo en una experiencia que no podía continuar, pero esta vez tenía en paralelo el curso de backend de la UPGL.

El curso no le ofreció el acompañamiento que esperaba. Según su experiencia, durante este año hubo poca actividad práctica asignada, no se realizaron exámenes intermedios y parte importante de la teoría se entregó como imágenes PNG o archivos gráficos, en lugar de materiales estructurados.

El repositorio conserva carpetas por clase, ejercicios y materiales gráficos en PNG, JPEG y otros formatos. Esta organización sirve como archivo del curso, pero el uso de imágenes para la teoría complica su integración con la estructura del portal educativo que Guillermo mantenía.

### Impacto en el aprendizaje

La dificultad no era únicamente aprender contenidos nuevos. Guillermo ya tenía una infraestructura personal para organizar teoría, ejemplos y ejercicios: UPGLEduPortal y sus materiales asociados. La entrega de contenido como imágenes le obligaba a realizar más trabajo para convertirlo en material utilizable dentro de su propio sistema.

La falta de ejercicios y evaluaciones intermedias también redujo las oportunidades de comprobar el aprendizaje mediante tareas concretas y recibir feedback frecuente.

### Qué demuestra

El repositorio forma parte de la historia de formación, pero su valor no es que el curso haya sido especialmente exigente. Es evidencia del contexto en que Guillermo tuvo que decidir cómo continuar aprendiendo cuando el entorno formal no le proporcionaba suficiente estructura práctica.

En vez de depender exclusivamente del curso, buscó otros recursos y construyó un plan de aprendizaje alternativo.

**Valor para el portfolio:** evidencia complementaria de formación. No hace falta convertirlo en un proyecto destacado, pero sí incluirlo en la cronología porque explica por qué el aprendizaje autónomo volvió a ocupar un lugar central.

---

## 14. Contexto personal y planificación durante 2026

En esta etapa también hubo circunstancias personales que afectaron el ritmo de trabajo. La madre de Guillermo debía someterse a una operación por un nódulo en el cuello. El proceso requirió aproximadamente seis viajes a Córdoba capital, entre estudios, evaluación prequirúrgica y operación.

Cada viaje interrumpía la rutina y hacía más difícil retomar el hilo mental de los proyectos, sobre todo cuando intentaba volver al plan que había organizado antes de esas interrupciones.

Esta parte de la historia no debe leerse como una excusa ni como un indicador de falta de constancia. Es contexto concreto: cuando un proceso necesita continuidad mental, varias interrupciones importantes pueden obligar a recuperar contexto, reordenar prioridades y reconstruir el ritmo de trabajo.

En el mismo período coincidieron la experiencia con Diego, la frustración por el cierre de la SaaS, el curso de backend menos satisfactorio y las responsabilidades familiares. Por eso, el plan original perdió continuidad y Guillermo recurrió a cursos por YouTube para mantener el aprendizaje activo.

La lección práctica es que una planificación eficaz debe permitir reanudar el trabajo después de una pausa, sin asumir que todas las semanas tendrán las mismas condiciones.

---

# Etapa 8. Cursos de YouTube y reorganización del aprendizaje

## 15. Cursos de Midudev

**Repositorio:** [cursos-midudev](https://github.com/GuillermoCochrane/cursos-midudev)

**Canal:** [Midudev en YouTube](https://www.youtube.com/@midudev)

### Contexto

La idea original de Guillermo era realizar [JSCamp](https://www.jscamp.dev/) para complementar y consolidar conocimientos que ya venía aplicando en sus proyectos.

Antes de comenzarlo, Midudev recomendó una ruta de cursos en YouTube. Guillermo decidió seguir esa alternativa y creó un repositorio para llevar un registro de los ejercicios realizados.

### Organización del repositorio

El repositorio no funciona simplemente como una lista de cursos vistos. Los ejercicios se agrupan por curso y módulo, con laboratorios que se desarrollan progresivamente.

El README establece varias convenciones:

- Un laboratorio o `index.html` por unidad de trabajo.
- Commits organizados por curso y módulo.
- Un commit que deje el proyecto en un estado utilizable en el navegador.
- Un tag al cerrar un curso.
- Ejercicios implementados y comprendidos, no solo videos consumidos.

La ruta incluye HTML, CSS básico y contenidos previstos de Flexbox, Grid y animaciones. El propio repositorio diferencia lo completado de lo que queda pendiente.

### Qué demuestra

Esta forma de estudiar conecta la formación externa con hábitos ya adquiridos en proyectos propios: Git, organización por módulos, avances verificables y ejercicios que pueden volver a abrirse y revisarse.

También permite trabajar fundamentos específicos que no siempre tuvieron el mismo peso en los proyectos anteriores, en lugar de repetir desde cero todo lo que ya domina.

**Valor para el desarrollo profesional:** consolidación técnica y práctica deliberada. Es más útil como sistema de aprendizaje y evidencia de trabajo continuo que como producto central del portfolio.

---

## 16. Cursos de MoureDev sobre desarrollo con IA

**Repositorio:** [cursos-mouredev](https://github.com/GuillermoCochrane/cursos-mouredev)

### Contexto

Mientras trabajaba en la ruta de aprendizaje de Midudev, apareció el curso de MoureDev sobre desarrollo con inteligencia artificial. Guillermo decidió priorizar temporalmente esa formación y dejar el recorrido anterior en pausa.

La elección está relacionada con la experiencia acumulada durante el trabajo con Diego. Ya había utilizado un agente para desarrollar y refactorizar código, y había construido su propio sistema de breadcrumbs para resolver problemas de continuidad y contexto. El curso le ofrece una oportunidad para ordenar y sistematizar prácticas que en parte había ido desarrollando por necesidad.

### Materiales conservados

El repositorio contiene:

- Enlaces a las sesiones del curso.
- Apuntes teóricos en PDF para las distintas clases.
- Una guía de Antigravity.
- Una guía de Cursor.
- Material relacionado con la fatiga por IA.
- Un certificado del curso.

### Qué demuestra

La motivación no es aprender a pedirle código a una IA desde cero. Guillermo ya ha utilizado agentes en un contexto de desarrollo real. El objetivo de esta formación es convertir la experiencia adquirida de manera intuitiva en un método más explícito y transferible.

El aprendizaje previo con Diego aporta contexto para interpretar el curso: delimitación de tareas, conservación de información relevante, control de cambios y revisión del trabajo generado son necesidades que ya había tenido que resolver.

**Valor para el desarrollo profesional:** formación orientada a integrar agentes de IA en un proceso de desarrollo mantenible, en lugar de depender de instrucciones aisladas o de copiar resultados sin comprenderlos.

---

# Etapa 9. Proyecto personal activo: AI Chat Exporter

## 17. Chat Exporter

**Repositorio:** [chat-exporter](https://github.com/GuillermoCochrane/chat-exporter)

### Contexto: el proyecto que devolvió las ganas de programar

Después de varias frustraciones y cambios de ritmo, la extensión terminó siendo el proyecto que ayudó a Guillermo a recuperar las ganas de programar.

A diferencia de un ejercicio de curso, Chat Exporter resuelve una necesidad concreta: conservar conversaciones con sistemas de IA en un formato abierto, legible y reutilizable.

Guillermo lo pausó temporalmente por el viaje a Catamarca para la comunión de su sobrino. Al volver, su intención es retomar el proyecto después de terminar el curso de PHP.

La pausa, por tanto, no implica abandono: forma parte de la reorganización de prioridades después de un período con viajes y otras obligaciones.

### Objetivo y alcance

AI Chat Exporter convierte conversaciones exportadas desde plataformas de inteligencia artificial en documentos estructurados. La arquitectura conserva un núcleo de procesamiento reutilizable y ofrece dos interfaces principales:

- Una CLI para procesar archivos JSON locales.
- Una extensión de Chrome para capturar y exportar conversaciones desde el navegador.

El repositorio documenta soporte para ChatGPT, exportación a Markdown y JSON, y opciones como modo compacto y filtro por rol.

La extensión captura tanto conversaciones existentes, mediante paginación, como conversaciones nuevas mediante streaming SSE. También incluye una interfaz para la selección de formato y opciones de exportación.

### Arquitectura

La documentación describe una separación entre el núcleo y las interfaces de uso. Entre las responsabilidades organizadas por módulos están:

- Fuentes de conversaciones.
- Configuración del pipeline.
- Inspección y análisis de datos.
- Parseo y ordenamiento de mensajes.
- Filtrado y normalización.
- Generación de Markdown.
- Escritura y exportación.
- Interfaz de línea de comandos.
- Componentes de la extensión y comunicación con el navegador.

La extensión reutiliza el mismo motor de procesamiento que la CLI. Esa separación evita que toda la lógica de conversión tenga que duplicarse en cada interfaz.

El README y la hoja de ruta también documentan pruebas automatizadas y manuales, procesos de build y documentación técnica del proyecto.

### Evolución y mantenimiento

El historial de GitHub registra trabajo posterior a las primeras versiones. Entre las mejoras aparecen la detección del proveedor por URL, la extracción de servicios a módulos independientes, la actualización de los nombres de archivo y cambios relacionados con la experiencia de uso de la extensión.

La documentación consultada identifica la versión 1.5.0 como estable y la 1.5.1 como versión de desarrollo en su hoja de ruta.

Este proyecto tiene una característica particular: las plataformas que debe capturar cambian sus interfaces, formatos y mecanismos internos. Por eso, la extensión necesita pruebas y mantenimiento cuando cambian las condiciones externas.

Ese trabajo de mantenimiento no es accesorio. Forma parte del problema que la aplicación intenta resolver: conservar una herramienta útil a pesar de la evolución de los sistemas de IA con los que interactúa.

### Qué demuestra

Chat Exporter reúne varias de las capacidades adquiridas durante la trayectoria:

- Diseño de una herramienta a partir de una necesidad concreta.
- JavaScript y Node.js.
- Separación de responsabilidades.
- Integración de CLI y extensión sobre un núcleo compartido.
- Procesamiento de datos estructurados.
- Captura y tratamiento de flujos de información.
- Pruebas automatizadas y manuales.
- Documentación de arquitectura y decisiones.
- Evolución mediante versiones y mejoras incrementales.
- Mantenimiento ante cambios en plataformas externas.

También representa algo que los otros proyectos no miden directamente: el proyecto volvió a despertar el interés por programar. Esa continuidad motivacional es importante porque permite sostener un ciclo de desarrollo a partir de un problema que Guillermo quiere resolver, no solamente de una obligación académica o laboral.

**Valor para el portfolio:** proyecto personal de alta prioridad. Es un buen candidato para mostrar diseño modular, integración de interfaces, pruebas, documentación y mantenimiento. Antes de una presentación definitiva conviene verificar el estado de la versión actual, los casos cubiertos y las funciones que siguen pendientes.

---

# Etapa 10. Lectura global de la trayectoria

## 1. La iniciativa aparece antes de que exista una consigna formal

Mercado-Liebre-2.0 surgió como práctica individual paralela al trabajo grupal. El portal educativo nació de una necesidad de organizar materiales de clase. El blog comenzó como un ejercicio de HTML y terminó convertido en un espacio de análisis. Fate apareció porque un archivo Markdown no alcanzaba para manejar todo el contenido. La Pokédex creció a partir de un desafío de los docentes.

Chat Exporter representa otra iteración del mismo patrón: identificar una limitación práctica y convertirla en una herramienta que se puede seguir mejorando.

En varios casos, el proyecto nació de una pregunta práctica: *¿cómo puedo resolver esto de una manera más útil, más interesante o más completa?*

## 2. La complejidad crece a través de la práctica

La evolución no fue lineal ni respondió a un plan académico perfecto. Hubo cursos paralelos, proyectos pausados, revisiones de contenido, cambios de dirección e interrupciones personales.

Aun así, puede reconstruirse una progresión:

- Ejercicios guiados y trabajo en equipo.
- Aplicaciones individuales para practicar conceptos.
- Repaso autónomo de contenidos.
- Integración de funcionalidades fullstack.
- Aplicaciones institucionales con necesidades externas.
- Interfaces con mayor complejidad de datos e interacción.
- Organización del trabajo de varias personas.
- Refactorización de código ajeno y resolución de tickets.
- Responsabilidad sobre una aplicación preexistente.
- Incorporación de agentes de IA a un flujo de trabajo más estructurado.
- Proyectos propios con documentación, pruebas, versiones y mantenimiento.

## 3. El pensamiento de producto aparece en proyectos no comerciales

El contador de visualizaciones de Mercado-Liebre-2.0, la estructura del portal educativo y el tracker de franquicias muestran que Guillermo no se enfoca únicamente en escribir código para cumplir requisitos.

También piensa en para qué se usaría una funcionalidad, qué datos permitiría obtener, qué tareas facilitaría y cómo podría ampliarse.

Chat Exporter lleva esa tendencia a una herramienta mantenible con dos interfaces, un núcleo de procesamiento y un problema externo que sigue evolucionando.

## 4. El liderazgo aparece como respuesta a un problema

En el trabajo final de frontend, Guillermo no fue asignado inicialmente para dirigir ambos equipos. La propuesta surgió después de observar que la falta de organización impedía avanzar.

Su respuesta fue diseñar una estructura de trabajo: una plantilla común, secciones independientes, una distribución de tareas y un punto central de integración.

En la SaaS de Diego, el cambio tuvo otra forma: las refactorizaciones pasaron de ser tareas puntuales a convertirse en un argumento para delegarle la aplicación completa.

Las dos experiencias son diferentes, pero apuntan a una misma capacidad: identificar qué está impidiendo que un trabajo avance y modificar la estructura de trabajo para resolverlo.

## 5. Mantener y refactorizar un proyecto también forma parte del trabajo técnico

UPGLEduPortal, Fate Saga App, desafío-pokedex, Stock RA y Chat Exporter muestran distintas formas de volver sobre algo que ya existe.

En los proyectos personales aparecen mejoras de estructura, datos y funcionalidades. En el trabajo con Diego, la refactorización adquirió otro sentido: mejorar código que ya tenía un usuario, dependencias, restricciones y decisiones tomadas por otro desarrollador.

Eso introduce una competencia importante: no hace falta haber diseñado el sistema entero para aportar valor. También se puede mejorar una parte concreta con criterio, respetando el contexto existente.

## 6. La relación con la IA evoluciona junto con la experiencia técnica

En esta etapa, la IA dejó de ser solamente una herramienta para obtener explicaciones o resolver dudas. El agente pasó a participar directamente del trabajo sobre el código.

La primera dificultad no fue solo escribir instrucciones eficaces: también había que darle contexto suficiente, mantener restricciones, revisar cambios y recuperar el hilo de trabajo entre sesiones.

Las breadcrumbs nacieron como una respuesta práctica a ese problema. A partir de ahí, el proceso se acercó a una forma de trabajo en la que las especificaciones, las notas de contexto, las tareas delimitadas y la revisión de resultados tienen un papel central.

Chat Exporter refleja otra cara del mismo aprendizaje: no solo incorporar IA al desarrollo, sino crear una herramienta para preservar y reutilizar conversaciones con ella.

La lección no es que el agente elimine la necesidad de saber programar. Es que **el criterio técnico, la comprensión del sistema y la capacidad de organizar el contexto determinan cuánto valor se puede obtener de él**.

## 7. La continuidad no siempre es visible como nuevo código

Hay períodos en los que Guillermo no incorpora grandes funcionalidades: audita una base de datos, corrige una parte, estudia, adapta documentación, mantiene un proyecto o recupera contexto después de una interrupción.

No todo eso produce un proyecto nuevo para mostrar en el portfolio. Sin embargo, forma parte del proceso por el cual los conocimientos se consolidan y las aplicaciones se vuelven más fáciles de mantener.

Tampoco sería correcto interpretar cada pausa como abandono. La historia muestra proyectos que quedaron en segundo plano por motivos laborales, familiares o de planificación y que después volvieron a recibir atención.

El objetivo de la bitácora es conservar esas diferencias, no fabricar una historia artificial de productividad constante.

---

# Orientación para el futuro portfolio

La selección final no debería ser una lista indiscriminada de repositorios. Conviene elegir proyectos que permitan explicar capacidades distintas.

## Proyectos que merecen una revisión prioritaria

**Chat Exporter:** herramienta propia con arquitectura modular, CLI y extensión, procesamiento de datos, pruebas, documentación y mantenimiento ante cambios externos.

**Desafío Pokédex:** frontend interactivo, consumo de API, manejo de datos, experiencia de usuario y evolución posterior.

**UPGLEduPortal:** proyecto institucional con utilidad real, contenidos mantenidos y una historia clara de evolución.

**Gestión Geopatagonia:** modelado de procesos, permisos, roles y complejidad fullstack. Antes de presentarlo como terminado, habría que revisar qué quedó completo y qué falta.

**Fate Saga App:** aplicación independiente nacida de una necesidad concreta, con estructuras de datos ampliables e interacción.

**Multihogar:** proyecto integrador para explicar conocimientos fullstack y flujos de negocio.

**Trabajo final de frontend:** útil como caso de colaboración y coordinación, acompañado por las dos landing pages y la documentación que conserva la planificación.

**Stock RA:** experiencia de trabajo sobre código preexistente, refactorización de templates, resolución de tickets y utilización estructurada de agentes de IA. Para presentarlo correctamente, conviene explicar el alcance real de la contribución y el carácter de copia del repositorio disponible.

## Proyectos con una función complementaria

**Despertar en el laberinto:** proyecto personal con identidad temática y una experiencia editorial de varias páginas.

**Grupo_3_ComidaLibre:** evidencia de experiencia grupal e integración entre React y backend, indicando la contribución individual.

**Mercado-Liebre-2.0:** autonomía, práctica individual y experimentación.

**Repaso y curso-python:** disciplina de estudio, revisión de conocimientos y formación.

**Cursos de Midudev y MoureDev:** evidencias de aprendizaje continuo y, en el caso de MoureDev, formación específica sobre desarrollo asistido por agentes.

---

# Plan de continuidad

El plan actual debe entenderse como una secuencia de prioridades, no como una obligación rígida que deba cumplirse sin importar las circunstancias.

1. **Terminar el curso de PHP/backend actual.** Cerrar esta etapa formativa antes de sumar más contenidos.
2. **Retomar Chat Exporter.** Continuar el proyecto que ayudó a recuperar las ganas de programar, revisar su estado y atender los cambios que requiera la extensión.
3. **Retomar la formación de MoureDev sobre agentes.** Sistematizar las prácticas aprendidas durante el trabajo con Diego.
4. **Volver a los cursos de Midudev y a JSCamp según las necesidades detectadas.** Priorizar los módulos que complementen los conocimientos actuales, evitando estudiar fundamentos que ya están consolidados sin un objetivo concreto.
5. **Pulir los proyectos seleccionados para el portfolio.** Utilizar las técnicas de planificación y trabajo con agentes en mejoras acotadas, sin convertir cada proyecto antiguo en una reescritura completa.
6. **Preparar el portfolio profesional.** Presentar una selección de proyectos con su problema, decisiones técnicas, contribución individual, estado actual y aprendizajes.

---

# Alcance de esta reconstrucción

La cronología se concentra en los proyectos que ayudan a entender la evolución técnica y la experiencia de trabajo. Hay cursos menores, como Aptugo y WordPress, y otros proyectos pequeños que no se desarrollan en profundidad porque agregan menos información a la historia principal.

Eso no significa que carezcan de valor: simplemente no son imprescindibles para reconstruir los hitos más significativos. Se pueden incorporar después si ayudan a explicar una tecnología, una decisión o un cambio de dirección.

La bitácora tampoco debe confundirse con un inventario exhaustivo de toda la actividad de GitHub. Su objetivo es dar contexto a los repositorios relevantes y permitir que las decisiones futuras se basen en una historia más completa.

---

# Estado de la bitácora

- **Repositorios principales documentados:** 15.
- **Etapas identificadas:** formación inicial, práctica autónoma, consolidación fullstack, proyectos institucionales, aprendizaje frontend, proyectos personales, coordinación de equipos, primera experiencia laboral con asistencia de IA, formación de backend y desarrollo de una herramienta propia.
- **Evidencias destacadas:** repositorios, demos desplegadas, estructura de código, historial de cambios, documentación técnica, planificación, refactorización de templates, pruebas y