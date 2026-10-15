## Usuario · 1/10/24, 4:16:10 a. m.

en que archivo de mugen se definen las teclas de los poderes de los pj?

## Asistente · 1/10/24, 4:16:34 a. m.

En M.U.G.E.N, las teclas y combinaciones para ejecutar los movimientos y poderes de los personajes se definen principalmente en dos archivos: el archivo de configuración de M.U.G.E.N (`mugen.cfg`) y el archivo `.cmd` de cada personaje.
### Archivos relevantes:

1. **`mugen.cfg`**:
   - Se encuentra en la carpeta principal de M.U.G.E.N.
   - Este archivo controla la configuración general de las teclas del jugador. Las entradas como `Player1.Key1` o `Player2.Key1` definen las teclas asociadas para ambos jugadores.
   - Aquí se especifican las teclas básicas (movimiento, ataque, etc.). Puedes configurarlas en la sección `[Config]` del archivo.

2. **Archivo `.cmd` del personaje**:
   - Cada personaje tiene un archivo `.cmd` (Command) dentro de su carpeta en `chars`.
   - Este archivo define las combinaciones de teclas para ejecutar movimientos especiales y poderes.
   - Por ejemplo, un poder podría definirse así en el archivo `.cmd` del personaje:
     ```ini
     [Command]
     name = "Hadouken"
     command = D, DF, F, x
     time = 15
     ```
   - En este ejemplo, `D, DF, F` corresponde a la secuencia del movimiento (Abajo, Abajo-Derecha, Derecha) y `x` es el botón de ataque asociado.
### Pasos para modificar las teclas de poderes en M.U.G.E.N:

1. **Acceder a la carpeta del personaje** (`chars/nombre_del_personaje`).
2. Abrir el archivo `.cmd` con un editor de texto.
3. Buscar las secciones `[Command]` que definen cada movimiento.
4. Modificar la secuencia de `command` según las teclas que desees usar.

### Ejemplo de sección `[Command]` en un archivo `.cmd`:
```ini
[Command]
name = "SuperMove"
command = B, DB, D, DF, F, y
time = 30
```
- `B, DB, D, DF, F`: Esta secuencia corresponde a (Izquierda, Abajo-Izquierda, Abajo, Abajo-Derecha, Derecha).
- `y`: Indica la tecla que se presiona al final para ejecutar el movimiento.

### Consideraciones:
- Cualquier cambio en el archivo `.cmd` del personaje afectará directamente las combinaciones de teclas de sus movimientos.
- Si quieres cambiar las teclas básicas (arriba, abajo, izquierda, derecha y botones de ataque), hazlo en el archivo `mugen.cfg`.

Con estos cambios puedes ajustar las combinaciones de teclas para los poderes de tus personajes en M.U.G.E.N según tus preferencias.

## Usuario · 1/10/24, 4:20:44 a. m.

este seria el archivo?

## Asistente · 1/10/24, 4:21:02 a. m.

Sí, este archivo es uno de los que se utiliza para definir las teclas de los poderes en M.U.G.E.N. El archivo que compartiste contiene la configuración de comandos para el personaje, y se corresponde con el archivo `.cmd` que mencioné anteriormente.
En este archivo, se pueden ver los diferentes movimientos y poderes asignados a combinaciones de teclas específicas. Aquí tienes un par de ejemplos:
```ini
[Command]
name = "昇竜烈破_X"
command = ~D, F, D, DF, x
time = 20
```
Este comando define un movimiento llamado "昇竜烈破_X", que se ejecuta presionando la secuencia `Abajo, Derecha, Abajo, Diagonal Derecha, y luego x`. El parámetro `time = 20` establece la ventana de tiempo en la que deben presionarse estas teclas para que se ejecute correctamente.
Otro ejemplo:
```ini
[Command]
name = "ヨガ_X"
command = ~B, D, F ,x
time = 20
```
Este comando se ejecuta con la secuencia `Atrás, Abajo, Adelante` y luego el botón `x`.
En general, cada sección `[Command]` en el archivo `.cmd` define un nuevo movimiento, junto con su nombre (`name`) y la combinación de teclas necesaria (`command`). Así que, si deseas modificar o agregar nuevas combinaciones de teclas para los poderes de este personaje, puedes hacerlo aquí ajustando los valores de `command`.

## Usuario · 1/10/24, 4:21:41 a. m.

podrias traducirme los nombres de todos los comandos del archivo?

## Asistente · 1/10/24, 4:22:05 a. m.

Claro, aquí tienes la traducción de los nombres de los comandos del archivo a continuación:

1. **昇竜烈破_X** - Shoryu Retsuha X
2. **昇竜烈破_Y** - Shoryu Retsuha Y
3. **天地返し_Y** - Heaven and Earth Reversal Y
4. **ヨガ_X** - Yoga X
5. **ヨガ_Y** - Yoga Y
6. **波動_X** - Hadouken X
7. **波動_Y** - Hadouken Y
8. **波動_A** - Hadouken A
9. **波動_B** - Hadouken B
10. **FF_X** - Forward Forward X
11. **FF_Y** - Forward Forward Y
12. **GC** - Guard Cancel
13. **jump** - Jump
14. **一回転** - Full Rotation
15. **FF** - Forward Forward
16. **BB** - Back Back
17. **recovery** - Recovery
18. **helper** - Helper
19. **roll** - Roll
20. **down_a** - Down A
21. **down_b** - Down B
22. **a** - A (Ataque)
23. **b** - B (Ataque)
24. **c** - C (Ataque)
25. **x** - X (Ataque)
26. **y** - Y (Ataque)
27. **z** - Z (Ataque)
28. **start** - Start (Iniciar)
29. **fwd** - Forward (Adelante)
30. **back** - Back (Atrás)
31. **up** - Up (Arriba)
32. **down** - Down (Abajo)
33. **holdfwd** - Hold Forward (Mantener Adelante)
34. **holdback** - Hold Back (Mantener Atrás)
35. **holdup** - Hold Up (Mantener Arriba)
36. **holddown** - Hold Down (Mantener Abajo)
37. **hold_x** - Hold X (Mantener X)
38. **hold_y** - Hold Y (Mantener Y)

Para comandos más específicos, como los cambios de estado del personaje, necesitaríamos más contexto, pero esta es la traducción de los nombres de los comandos principales que se encuentran en el archivo. Si necesitas más detalles o alguna traducción en particular, avísame.

## Usuario · 1/10/24, 4:25:17 a. m.

podrias traducirme los 20 primeros, y que tengan la convinacion de teclas?

## Asistente · 1/10/24, 4:26:01 a. m.

Claro, aquí tienes la traducción de los 20 primeros comandos del archivo junto con la combinación de teclas de cada uno:

1. **昇竜烈破_X (Shoryu Retsuha X)**
   - Combinación de teclas: `Abajo, Adelante, Abajo, Diagonal Adelante, x`
   - `command = ~D, F, D, DF, x`

2. **昇竜烈破_Y (Shoryu Retsuha Y)**
   - Combinación de teclas: `Abajo, Adelante, Abajo, Diagonal Adelante, y`
   - `command = ~D, F, D, DF, y`

3. **天地返し_Y (Heaven and Earth Reversal Y)**
   - Combinación de teclas: `Adelante, Abajo, Atrás, Adelante, y`
   - `command = ~F, D, $B, F, y`

4. **DD_Y**
   - Combinación de teclas: `Abajo, Abajo, y`
   - `command = D, D ,y`

5. **ヨガ_X (Yoga X)**
   - Combinación de teclas: `Atrás, Abajo, Adelante, x`
   - `command = ~B, D, F ,x`

6. **ヨガ_Y (Yoga Y)**
   - Combinación de teclas: `Atrás, Abajo, Adelante, y`
   - `command = ~B, D, F ,y`

7. **波動_X (Hadouken X)**
   - Combinación de teclas: `Abajo, Adelante, x`
   - `command = ~D, F ,x`

8. **波動_Y (Hadouken Y)**
   - Combinación de teclas: `Abajo, Adelante, y`
   - `command = ~D, F ,y`

9. **波動_A (Hadouken A)**
   - Combinación de teclas: `Abajo, Adelante, a`
   - `command = ~D, F ,a`

10. **波動_B (Hadouken B)**
    - Combinación de teclas: `Abajo, Adelante, b`
    - `command = ~D, F ,b`

11. **FF_X (Forward Forward X)**
    - Combinación de teclas: `Adelante, Adelante, x`
    - `command = ~F, F, x`

12. **FF_Y (Forward Forward Y)**
    - Combinación de teclas: `Adelante, Adelante, y`
    - `command = ~F, F, y`

13. **GC (Guard Cancel)**
    - Combinación de teclas: `Atrás, Abajo, x`
    - `command = ~B, D, x`

14. **jump (Jump)**
    - Combinación de teclas: `Abajo, Arriba`
    - `command = ~$D, $U`

15. **一回転 (Full Rotation)**
    - Combinación de teclas: `Atrás, Abajo, Adelante, Arriba`
    - `command = ~B, $D, $F, U`

16. **一回転 (Full Rotation)**
    - Combinación de teclas: `Abajo, Adelante, Arriba, Atrás`
    - `command = ~D, $F, $U, B`

17. **一回転 (Full Rotation)**
    - Combinación de teclas: `Adelante, Arriba, Atrás, Abajo`
    - `command = ~F, $U, $B, D`

18. **一回転 (Full Rotation)**
    - Combinación de teclas: `Arriba, Atrás, Abajo, Adelante`
    - `command = ~U, $B, $D, F`

19. **一回転 (Full Rotation)**
    - Combinación de teclas: `Atrás, Arriba, Adelante, Abajo`
    - `command = ~B, $U, $F, D`

20. **一回転 (Full Rotation)**
    - Combinación de teclas: `Adelante, Atrás, Abajo, Arriba`
    - `command = ~F, $B, $D, U`
Cada uno de estos comandos tiene una secuencia de teclas específica que se utiliza para realizar los movimientos especiales del personaje.

## Usuario · 1/10/24, 4:26:28 a. m.

que significan ~ y $ ?

## Asistente · 1/10/24, 4:26:49 a. m.

En M.U.G.E.N, los símbolos `~` y `$` tienen significados especiales cuando se usan en las combinaciones de teclas (`command`) dentro de los archivos `.cmd` de los personajes:
### Significado de los símbolos:

1. **`~` (Tilde)**
   - Indica que el movimiento debe ser realizado como un "input rápido" o de manera consecutiva. 
   - Por ejemplo, en la secuencia `~D, F`, significa que debes presionar `Abajo` seguido rápidamente de `Adelante`. Es comúnmente utilizado para indicar movimientos como el **Hadouken** (↓, →), que se deben hacer de manera fluida y rápida.
   - Se utiliza para capturar comandos que se deben realizar en un tiempo corto, como combinaciones rápidas de movimientos.

2. **`$` (Dólar)**
   - Indica que la tecla debe ser mantenida presionada en lugar de solo ser pulsada momentáneamente.
   - Por ejemplo, en la secuencia `~B, $D, $F, U`, las teclas `Abajo` (`$D`) y `Adelante` (`$F`) deben mantenerse presionadas mientras se completa la rotación, antes de presionar `Arriba` (`U`).
   - Es útil para comandos que requieren mantener un botón o dirección, como cargas (por ejemplo, cargar hacia atrás antes de realizar un movimiento hacia adelante).
### Ejemplo práctico:
Un comando como:
```ini
command = ~D, F, D, DF, x
```
Indica que debes hacer la secuencia `Abajo, Adelante, Abajo, Diagonal Adelante` de manera rápida (por el `~`), y luego presionar `x`.
Mientras que un comando como:
```ini
command = ~B, $D, $F, U
```
Indica que debes realizar la secuencia `Atrás` rápido (`~B`), y luego mantener presionado `Abajo` y `Adelante` (`$D, $F`) antes de presionar `Arriba` (`U`).
Estos símbolos permiten definir comandos más complejos y precisos en M.U.G.E.N para lograr movimientos especiales con distintos tiempos y secuencias.