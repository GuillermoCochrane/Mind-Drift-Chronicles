## Usuario · 19/8/26, 9:09:13 p. m.

Cual es el modelo de IA local por excelencia hoy en dia para la programacion?

## Asistente · 19/8/26, 9:09:14 p. m.



## Asistente · 19/8/26, 9:09:16 p. m.

Bienvenido de vuelta 😏. Sí: **en agosto de 2026 el panorama local para programación cambió bastante**, y hay un nombre que aparece una y otra vez.
### 🏆 Si me obligás a elegir uno: Qwen3-Coder
Pero hay una pequeña trampa: depende muchísimo de **qué hardware tengas** y de si querés *chat sobre código*, *autocompletado* o un **agente capaz de modificar un proyecto entero**.
Hoy lo ordenaría así:
| Modelo | Para qué destaca | Hardware orientativo |
|---|---|---|
| **Qwen3-Coder 30B** | 🥇 Equilibrio general / coding agent | ~24 GB VRAM |
| **Qwen3.6 27B** | 🥇 Calidad general + programación | ~24 GB VRAM |
| **Qwen3-Coder 80B-A3B** | 🚀 Máxima calidad local razonable | ~96 GB+ |
| **Devstral Small 2 24B** | 🤖 Agentes que editan repositorios | ~24 GB |
| **Qwen3-Coder 8B** | 💻 Máxima accesibilidad | ~8 GB |
| **Codestral** | ⚡ Autocompletado/FIM | ~16–24 GB |
Varias comparativas recientes ponen **Qwen3-Coder 30B** como el mejor equilibrio para una máquina con una GPU de 24 GB, mientras que Qwen3.6 27B destaca especialmente en benchmarks de SWE-bench. citeturn0search3turn0search4turn0search6
Y acá está lo interesante:
### 🧠 Qwen3-Coder ≠ simplemente "un LLM que escribe código"
Está pensado para **coding agent**:
> repo → entiende estructura → busca archivos → razona → modifica varios archivos → ejecuta cosas → corrige → vuelve a intentar.
Eso es muchísimo más interesante que el viejo paradigma de:
> "¿Me hacés una función que ordene este array?"
Para tu forma de trabajar, **esto es exactamente la categoría que miraría**.

---
### 🥈 Qwen3.6 27B
Este es probablemente el rival más interesante.
Es un modelo generalista muy fuerte que también programa extremadamente bien. Las cifras publicadas actualmente lo colocan alrededor de **77,2% en SWE-bench Verified**, con hasta 262K de contexto. citeturn0search1turn0search7
La diferencia conceptual sería:
**Qwen3-Coder**
→ *"Soy programador y además sé conversar."*
**Qwen3.6**
→ *"Soy un modelo general muy bueno que además programa como un condenado."*
Para trabajar cotidianamente en VS Code, ambos son candidatos muy serios.

---
### 🤖 Y Devstral tiene una especialidad muy interesante
Mistral diseñó Devstral específicamente alrededor de **agentes de software**, incluyendo exploración de codebases y edición de múltiples archivos. citeturn0search12turn0search13
Por eso, si tu pregunta fuera:
> "¿Cuál quiero para darle un repositorio y decirle *arreglá esto*?"
**Devstral Small 2** entra inmediatamente en la conversación.

---
## Pero hay un detalle MUY importante
No elegiría el modelo todavía sin saber **tu máquina**.
Porque en local la pregunta:
> "¿Cuál es el mejor modelo?"
es casi la pregunta equivocada.
La pregunta correcta es:
> **"¿Cuál es el mejor modelo que puedo ejecutar con suficiente velocidad y contexto en mi hardware?"**
Por ejemplo:
**8 GB VRAM**
→ Qwen3-Coder 8B
**16 GB VRAM**
→ Devstral Small 2 / modelos ~20B cuantizados
**24 GB VRAM**
→ **Qwen3-Coder 30B / Qwen3.6 27B** ← zona dulce
**48–96+ GB**
→ Qwen3-Coder 80B-A3B y otros monstruos.
Las comparativas actuales coinciden bastante en esa división por hardware. citeturn0search6turn0search8

---
Y hay otra cosa que creo que te va a interesar especialmente por **tu extensión de AI Chat Exporter y la forma en que venís trabajando el código**:
**no necesariamente buscaría el modelo que mejor responde en un chat.**
Buscaría el que mejor funcione como:
**Ollama + VS Code + agente de código + acceso al filesystem + terminal + contexto del repo.**
Ahí cambia completamente el juego.
Si querés, decime **qué PC tenés actualmente (CPU, RAM y GPU)** y te digo **qué modelo local instalaría yo hoy para programar**, incluyendo tamaño/quant, velocidad esperable y si conviene Ollama, LM Studio, llama.cpp, etc.

## Usuario · 19/8/26, 9:12:10 p. m.

## System Summary
unknown-node · windows
CPU
**13th Gen Intel(R) Core(TM) i7-13650HX**
20 cores
Total RAM
**15.7 GB**
Available RAM
**7.1 GB**
GPU
**NVIDIA GeForce RTX 5060 Laptop GPU (8.0 GB), Intel(R) RaptorLake-S Mobile Graphics Controller**

## Asistente · 19/8/26, 9:12:12 p. m.

Ah, perfecto. Con esa máquina ya podemos dejar de hablar en abstracto. 😏
Tenés:

- **i7-13650HX** → CPU muy capaz para inferencia.
- **16 GB RAM** → suficiente, pero es tu principal limitación.
- **RTX 5060 Laptop 8 GB VRAM** → acá está el cuello de botella importante.
- Windows.

### Mi elección para TU máquina
**Qwen3-Coder 8B**, cuantizado a 4-bit.
Es probablemente el punto dulce para vos: suficientemente capaz para programación real y suficientemente pequeño para que los **8 GB de VRAM no se conviertan en una tragedia griega**.
Pero hay una cuestión importante:
### ❌ No intentaría Qwen3-Coder 30B
Aunque técnicamente podés hacer offload a RAM, con solamente 16 GB de RAM vas a terminar en algo parecido a:
> GPU: "yo ya hice mi parte."  
> RAM: "¿POR QUÉ ME ODIÁS?"  
> Windows: *empieza a paginar*  
> LLM: **0.7 tokens/s**
😂
Un 30B cuantizado necesita bastante más memoria que tus 8 GB de VRAM, y el offload hacia esos ~16 GB de RAM disponibles no resulta una experiencia agradable.

---
## Lo que yo montaría
Para tu máquina:
**Ollama**
↓
**Qwen3-Coder 8B**
↓
**VS Code**
↓
**Continue / Cline / Roo Code**
Y ahí sí tenés algo bastante interesante:
```text
                RTX 5060 8 GB
                      │
                      ▼
               Qwen3-Coder 8B
                      │
                      ▼
                 coding agent
                 ┌────┴────┐
                 │         │
              VS Code    Terminal
                 │         │
                 └────┬────┘
                      ▼
                   tu repo
```
Eso es muchísimo más potente que simplemente abrir un chatbot local.

---
### Y hay una alternativa que probaría
**Qwen3.5 9B** también merece una prueba.
Con tu hardware, yo compararía:
**Qwen3-Coder 8B**
vs.
**Qwen3.5 9B**
porque puede ocurrir que el segundo te resulte mejor como asistente general de programación aunque el primero esté especializado en coding.
Y acá aparece una ventaja interesante de tu **i7-13650HX**: si algún modelo ligeramente mayor no entra completamente en VRAM, podés experimentar con **CPU/GPU offload**. No va a ser tan rápido, pero no estás limitado exclusivamente a los 8 GB.

---
## ¿Y los modelos de 3B–4B?
También existen y van a volar.
Pero **yo no bajaría tanto** teniendo una 5060.
Un 4B puede ser excelente para:

- autocompletado;
- funciones pequeñas;
- boilerplate;
- explicar código sencillo.

Pero cuando le das:
> "Mirá este repo, entendé cómo está desacoplado el pipeline, modificá `extractMessages`, actualizá los tests y asegurate de no romper Markdown."
ahí empieza a aparecer la diferencia.
Y justamente **ese tipo de trabajo es el que vos hacés**.

---
### Mi ranking específicamente para tu notebook
| Modelo | Tu máquina | Mi opinión |
|---|---:|---|
| **Qwen3-Coder 8B** | 🟢 Excelente | ⭐⭐⭐⭐⭐ |
| **Qwen3.5 9B** | 🟢 Excelente | ⭐⭐⭐⭐⭐ |
| Devstral pequeño | 🟡 Posible | ⭐⭐⭐⭐ |
| Qwen ~14B | 🟡 Offload | ⭐⭐⭐½ |
| Qwen3-Coder 30B | 🔴 Muy pesado | ⭐⭐ |
| 70–80B | ☠️ | *Skynet todavía no* |
Y hay una última cosa que me parece **mucho más importante que elegir entre 8B y 9B**:
### Tu RAM.
Tenés **16 GB** y ahora mismo solamente **7,1 GB libres**.
Para trabajar con VS Code + navegador + Ollama + agente + proyecto grande, **32 GB de RAM sería una mejora enorme**.
Tu GPU está bastante bien equilibrada para modelos locales chicos/medianos. La RAM, en cambio, es donde tu notebook empieza a respirar como Darth Vader después de subir una escalera.
**Si le ponés 32 GB, tu 5060 de 8 GB se vuelve muchísimo más interesante para IA local.**
Si querés, puedo buscar **los modelos de coding que están rindiendo mejor específicamente en 8 GB de VRAM a día de hoy** y compararte benchmarks + velocidad aproximada en tu 5060, porque ahí podemos afinar bastante más la elección.

## Usuario · 19/8/26, 9:15:12 p. m.


| <br>**unsloth/Qwen2.5-Coder-3B-bnb-4bit⎘** | unsloth                                 | 3.2B    | **Perfect** | **GPU**     | llama.cpp | 86.9      | 44.4 | 51.7 | 32,768 | —      |                                                                      |
| :----------------------------------------- | :-------------------------------------- | :------ | :---------- | :---------- | :-------- | :-------- | :--- | :--- | :----- | :----- | -------------------------------------------------------------------- |
|                                            | **Qwen/Qwen2.5-Coder-3B-Instruct⎘**     | Alibaba | 3.1B        | **Perfect** | **GPU**   | llama.cpp | 86.9 | 45.6 | 50.5   | 32,768 | 2024-11-06                                                           |
|                                            | **Qwen/Qwen2.5-Coder-3B-Instruct-AWQ⎘** | Alibaba | 3.4B        | **Perfect** | **GPU**   | vLLM      | 85.4 | 82.9 | 31.2   | 32,768 | 2024-11-09<br><br><br>esto me rcomienda  una app que mira mi maquina |

## Asistente · 19/8/26, 9:15:13 p. m.



## Asistente · 19/8/26, 9:15:15 p. m.

Ahhh, **ahora entiendo de dónde sale esa recomendación**. Y sí: con esos datos, la app no está diciendo una locura. Pero hay una distinción importante.
La tabla que te muestra está recomendando **modelos que puede ejecutar "perfectamente" en GPU**, y por eso te pone arriba los 3B. Eso no significa necesariamente que **3B sea el mejor modelo que tu máquina puede usar**, sino que es el mejor *fit* según su criterio de memoria/velocidad.
### Lo interesante de esos números
Ese:
**`unsloth/Qwen2.5-Coder-3B-bnb-4bit`**
es una versión **4-bit** del Qwen2.5-Coder 3B. Con 3.2B parámetros, para tus **8 GB de VRAM** es prácticamente un paseo.
Y Qwen2.5-Coder 3B no es un modelo inútil ni mucho menos. Qwen reporta para la versión 3B resultados bastante buenos para su tamaño; por ejemplo, en su evaluación oficial el 3B alcanza **74,4 HumanEval y 72,7 MBPP** como modelo instruct. citeturn0search0turn0search1
Pero mirá esta comparación:
| Modelo | Parámetros | VRAM aprox. | Coding |
|---|---:|---:|---|
| Qwen2.5-Coder 3B Q4 | 3B | 🟢 ~2–3 GB | Bueno |
| **Qwen2.5-Coder 7B Q4** | 7B | 🟢 ~5 GB | **Mucho mejor** |
| Qwen3-Coder 8B Q4 | 8B | 🟢 ~5–6 GB | **Mucho más moderno** |
| 14B Q4 | 14B | 🟠 ~9–10 GB+ | Mejor, pero offload |
| 30B Q4 | 30B | 🔴 ~18+ GB | No tiene sentido en tu máquina |
Y acá está el detalle que **la aplicación probablemente no está considerando suficientemente**:
### Vos tenés 8 GB de VRAM.
No 3 GB.
Por lo tanto, yo **no me quedaría con el 3B simplemente porque dice "Perfect"**.
Probaría primero un modelo de alrededor de **7–8B cuantizado a 4 bits**.
Qwen2.5-Coder 7B, por ejemplo, tiene una diferencia considerable respecto al 3B: en las cifras oficiales pasa de 84,1 → **88,4 en HumanEval** y de 73,6 → **82,3 en MBPP**, según la configuración/evaluación reportada. citeturn0search27
Y encima vos tenés una **5060 de 8 GB**.
Es justamente el tipo de GPU donde tiene sentido decir:
> "No quiero el modelo que apenas entra.  
> Quiero el modelo más grande que todavía entre cómodamente."

---
## Pero hay una segunda trampa
La tabla que pegaste tiene esta columna:
**`Perfect | GPU | llama.cpp`**
Eso me parece más interesante que el nombre del modelo.
La aplicación está probablemente clasificando **compatibilidad**, no calidad absoluta.
Algo como:
```text
3B Q4
████████████████████  PERFECT
GPU
```
mientras:
```text
7B Q4
███████████████░░░░░  GOOD
GPU
```
Y:
```text
14B Q4
████████░░░░░░░░░░░░  PARTIAL
GPU + RAM
```
Eso es perfectamente razonable desde el punto de vista del software.
Pero para **vos**, yo cambiaría el criterio:
### 🎯 Objetivo
**Máxima capacidad de programación manteniendo todo el modelo en GPU.**
Con tu hardware eso apunta aproximadamente a:
> **7–8B Q4**
Y ahí es donde empezaría a mirar **Qwen3-Coder 8B**, no Qwen2.5-Coder 3B.

---
### De hecho, hay algo gracioso
La propia tabla te está mostrando:
> Qwen2.5-Coder 3B → 32.768 contexto
Eso está perfecto.
Pero **32K de contexto no significa que el modelo tenga capacidad para razonar sobre 32K tokens de código**. Significa que puede recibirlos.
Es como darle a un programador una mesa de 20 metros:
> "Mirá qué workspace."
Sí.
Pero si el programador es mediocre, ahora tenés **más código mediocre simultáneamente**. 😂
El salto de 3B → 7/8B es bastante más importante para tu caso que pasar de 32K a 128K de contexto.

---
## Mi recomendación concreta
Con tu notebook yo haría **tres pruebas**, en este orden:
**1. Qwen3-Coder 8B Q4**  
→ candidato principal.
**2. Qwen2.5-Coder 7B Q4**  
→ excelente referencia y probablemente muy rápido.
**3. Qwen2.5-Coder 3B Q4**  
→ como modelo ultrarrápido para comparar.
Y mediría algo que los benchmarks no te dicen:
**tokens/s + calidad real trabajando sobre tu repo.**
Porque para vos la prueba definitiva no es HumanEval.
Es darle algo como:
> "Entendé la arquitectura de `chat-exporter`, modificá el pipeline sin romper la separación entre core e interfaces y explicame qué archivos tocarías."
Ahí vamos a saber inmediatamente si el modelo es **"programador"** o **"autocompletado con autoestima"**.
Y con **16 GB de RAM**, además, yo evitaría por ahora modelos que necesiten demasiado offload. Tu 5060 tiene margen; tu RAM es la que está haciendo de portero del boliche.

## Asistente · 19/8/26, 9:17:29 p. m.

Sí. **Ahora sí se ve clarísimo qué está haciendo la TUI**, y de hecho tengo que corregir una parte de lo que te dije antes: con esta información, **Qwen2.5-Coder 7B es probablemente la elección más sensata para tu máquina**.
Mirá la línea clave:
> **Qwen/Qwen2.5-Coder-7B — 7.6B — 37.0 tok/s — GPTQ-Int4 — 3.8G — GPU — 60% — 32K — Perfect — Coding**
Eso es prácticamente un cartel luminoso diciendo **"instalame"**. 😂
### Lo que realmente te está mostrando la TUI
Tu máquina:

- RTX 5060 Laptop → **8 GB VRAM**
- RAM → **15.7 GB**
- disponible ahora → **6.9 GB**

Y el modelo:
| | Qwen2.5-Coder 7B |
|---|---:|
| Parámetros | 7.6B |
| Quant | GPTQ-Int4 |
| Disco | **3.8 GB** |
| Memoria GPU estimada | **60%** |
| Contexto | **32K** |
| Velocidad estimada | **37 tok/s** |
| Ejecución | **GPU** |
| Fit | 🟢 **Perfect** |
| Uso | **Coding** |
Ese **60%** es particularmente lindo.
Significa que no estás intentando meter un modelo de 14B a los empujones dentro de los 8 GB. Te queda margen para el contexto, runtime, etc.

---
### Y hay algo todavía más interesante
La TUI está poniendo arriba:
**Orion-zhen/Qwen2.5-Coder-7B-AWQ**  
**Qwen/Qwen2.5-Coder-7B**
Ambos:
**91 puntos**
Y ambos:
**37 tok/s**
Eso te da una pista importante sobre el algoritmo de ranking:
> No está simplemente buscando "el modelo más grande".
Está combinando **calidad + velocidad + compatibilidad con tu hardware + caso de uso**.
Por eso aparecen modelos de 12–15B con scores similares pero:
> `Marginal`
mientras que el 7B dice:
> `Perfect`

---
## Y mirá lo que pasa con 14B
Tenés:
**Microsoft/Phi-3-medium — 14B**
```text
40.3 tok/s
5.2G
GPU
81%
Good
```
Eso, honestamente, es bastante tentador.
Pero **no es coding especializado** en la tabla; aparece como `Chat`.
Y después:
**Qwen3.5-13B**
```text
43.1 tok/s
4.8G
GPU
86%
Marginal
```
Ahí yo ni me metería.
Porque ese **86% de memoria GPU** parece cómodo en papel, pero tu VRAM disponible no es solamente "pesan los parámetros". Hay KV cache, contexto, runtime, buffers, etc.
El **60% del Coder 7B** es mucho más saludable.

---
# Ahora, lo que yo haría
### 🥇 Primero: Qwen2.5-Coder-7B-Instruct
Preferentemente:
**`Qwen/Qwen2.5-Coder-7B-Instruct`**
La TUI te da:
**37 tok/s**
Eso es **rapidísimo** para un modelo de este tamaño.
Y además está todo en GPU.

---
### 🥈 Después probaría Qwen3
En la captura aparece:
**Qwen3.8-4B...**
con:
```text
45 tok/s
3.3G
62%
Perfect
```
Pero ojo: ese modelo es **3.1B**, generalista. No lo elegiría como principal para programar sólo porque sea más rápido.
Podría ser excelente como:
> "modelo rápido para preguntas pequeñas / explicación / autocomplete".
Pero para tu uso principal:
**7B Coder > 3B generalista**

---
### 🥉 Y hay una prueba que me interesa MUCHO
Buscaría en esa TUI:
**Qwen3-Coder**
Porque en la captura **no aparece en los primeros resultados**.
Y eso es precisamente lo interesante.
No asumiría ya que:
> Qwen3-Coder 8B > Qwen2.5-Coder 7B
como te dije antes.
Si la TUI tiene benchmark propio y puede estimar:

- tok/s
- memoria
- fit
- score
- use case

**dejemos que la máquina haga de árbitro.**

---
## Y hay una cosa que me encanta de esta TUI
Mirá:
**Qwen2.5-Coder-7B**
`60% GPU`
pero:
**DeepSeek 8B Reasoner**
`90% GPU`
y sólo:
**27.5 tok/s**
con:
`Perfect`
Eso muestra que tenés otra posibilidad:
### No necesitás maximizar sólo tokens/s.
Para **coding agent**, quizá un modelo de reasoning de 8B a 27 tok/s pueda ser más útil que un coder de 7B a 37 tok/s en determinadas tareas complejas.
Ahí ya entramos en:
> **velocidad × capacidad de razonamiento × capacidad de coding**
y no simplemente "qué modelo tiene más parámetros".

---
### Mi conclusión después de ver esta pantalla
Yo **no instalaría todavía el 3B** que te recomendaba la otra vista.
Con tu hardware, la TUI está encontrando un candidato mucho mejor:
> 🟢 **Qwen2.5-Coder-7B-Instruct — 4-bit — GPU — ~37 tok/s — 60% VRAM**
Eso es prácticamente **el sweet spot de tu notebook**.
Y si querés hacer la prueba definitiva, buscá `Qwen3-Coder` en esa misma TUI y pasame la pantalla. **Ahí sí podemos comparar modelos bajo exactamente el mismo criterio**, que es mucho más útil que comparar benchmarks publicados por cada fabricante.

## Asistente · 19/8/26, 9:20:09 p. m.

Ahí está. Y ahora sí tenemos la pieza que faltaba. 😎
Y te diría algo bastante distinto de mi primera recomendación:
## Para TU máquina, yo elegiría Qwen2.5-Coder-7B antes que Qwen3-Coder
La propia TUI está haciendo una comparación bajo **el mismo hardware y el mismo criterio**, y el resultado es bastante contundente.
Mirá la diferencia:
| Modelo | Params | Velocidad | VRAM | Fit | Score |
|---|---:|---:|---:|---|---:|
| **Qwen2.5-Coder-7B** | 7.6B | **37 tok/s** | **60%** | 🟢 Perfect | **91** |
| Qwen3-Coder ~8B | 7.9B | 23.6 tok/s | 89% | 🟢 Perfect | 78 |
| Qwen3 ~8B coding | 8.2B | 27.5 tok/s | 90% | 🟢 Perfect | 79 |
| Qwen3.5-4B | 4.5B | 31 tok/s | 79% | 🟢 Perfect | 82 |
| Qwen3-Coder 12.7B | 12.7B | 29.5 tok/s | 88% | 🟣 Marginal | 81 |
| Qwen3-Coder 14.8B | 14.8B | 38.1 tok/s | 91% | 🟣 Marginal | 83 |
Y acá aparece algo **muy interesante**.
### El Qwen3-Coder 14.8B parece tentador
38.1 tok/s.  
Score 83.  
5.5 GB de disco.
Pero:
**91% de VRAM → Marginal.**
No lo quiero en tu notebook.
Porque ese 91% es jugar al Jenga con la memoria. Puede funcionar en una prueba sintética y después explotar cuando el contexto crezca o el agente necesite buffers adicionales.

---
# El ganador real es este
### 🥇 Qwen2.5-Coder-7B
```text
7.6B
37.0 tok/s
GPTQ-Int4
3.8 GB
GPU
60% VRAM
32K context
Perfect
Coding
Score: 91
```
Eso es **exactamente lo que querés**.
Y fíjate en la diferencia con el Qwen3-Coder:
```text
Qwen2.5-Coder 7B
████████████░░░░░░░░ 60%
37 tok/s
91 score
```
contra:
```text
Qwen3-Coder 7.9B
██████████████████░░ 89%
23.6 tok/s
78 score
```
La segunda generación no está ganando **en este benchmark/configuración concreta**.

---
## Y esto cambia algo de lo que te dije antes
Yo venía razonando:
> "Qwen3-Coder es más nuevo → debería ser mejor."
Y eso es precisamente lo que **no debemos hacer**.
La TUI nos está mostrando una realidad mucho más útil:
**para tu hardware concreto y con sus cuantizaciones disponibles, Qwen2.5-Coder-7B es una opción extraordinariamente bien equilibrada.**
No hay que perseguir el número de versión como si fuera Pokémon.

---
## Pero hay una sorpresa todavía mejor
Mirá este:
### `coder3101/Qwen3.5-4B`
```text
4.5B
31.0 tok/s
Q8_0
4.6 GB
79% VRAM
Perfect
Score 82
Coding
```
Eso es **muy interesante**.
Porque está a sólo 9 puntos del Qwen2.5-Coder 7B en el score de la TUI, pero es un modelo mucho más chico.
Y hay otro:
### `bigtuna/Qwen3-1.7B`
```text
1.7B
81.8 tok/s
1.8 GB
40%
Perfect
Score 78
Coding
```
Eso debe volar.
Podría ser un excelente **modelo secundario** para tareas rápidas.

---
# Entonces yo montaría dos
Y esto me parece incluso mejor que intentar encontrar *"el modelo definitivo"*.
### 🚀 Modelo principal
**Qwen2.5-Coder-7B GPTQ-Int4**
Para:

- trabajar sobre repositorios;
- entender arquitectura;
- refactorizar;
- escribir funciones;
- debugging;
- generar tests;
- modificar varios archivos;
- conversar sobre decisiones técnicas.

### ⚡ Modelo rápido
**Qwen3-1.7B Q8**
Para:

- preguntas pequeñas;
- explicaciones;
- boilerplate;
- transformaciones sencillas;
- consultas rápidas;
- cosas donde no necesitás gastar el modelo grande.

Y podrías tener algo así:
```text
                    TU VS CODE
                       │
             ┌─────────┴─────────┐
             │                   │
       tarea compleja       tarea pequeña
             │                   │
             ▼                   ▼
   Qwen2.5-Coder 7B        Qwen3 1.7B
       37 tok/s              82 tok/s
        60% VRAM              40%
```
Eso es muchísimo más inteligente que usar el cañón de 7B para preguntarle:
> "¿Cómo hago un `.map()`?"
😂

---
## Y una última observación importante
**No descartaría Qwen3-Coder 7.9B definitivamente.**
Tiene una ventaja que el número de `Score 78` de esta TUI no necesariamente captura: es una generación posterior y puede comportarse mejor en determinadas tareas de agente/contexto.
Pero **no lo pondría como primera instalación**.
Primero:
> **Qwen2.5-Coder-7B**
Después lo enfrentamos **cara a cara** con Qwen3-Coder 7.9B usando tareas reales de tu `chat-exporter`.
Ahí sí podemos hacer el benchmark que realmente importa:

1. entender el repo;
2. localizar dónde hacer un cambio;
3. proponerlo;
4. modificarlo;
5. no romper arquitectura;
6. escribir tests;
7. corregir errores.

Porque sinceramente, viendo estas dos pantallas, **tu notebook tiene un sweet spot clarísimo alrededor de 7B**. Y ese 7B de Qwen2.5 está sentado exactamente ahí, con un saludable **40% de VRAM de margen** respecto de los modelos que empiezan a jugar con fuego.
**Yo instalaría ese primero.**