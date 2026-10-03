## Usuario · 12/2/25, 11:48:37 p. m.

Cómo calculo el refid de un ítem de oblivion que empieza con xx?

## Asistente · 12/2/25, 11:48:52 p. m.

En *Oblivion*, los *Reference IDs* (RefID) de los ítems que pertenecen a un mod empiezan con `xx`, donde `xx` representa el *load order* del mod en tu lista de carga. Para calcular el RefID de un ítem con `xx`, sigue estos pasos:  
### 1. **Encuentra el Load Order del Mod**  
Dado que juegas en GOG, puedes usar un programa como **Wrye Bash**, **Oblivion Mod Manager (OBMM)** o **Mod Organizer 2** para ver la lista de carga de tus mods.  

- En **Wrye Bash**, el número de carga de cada mod se muestra en la columna izquierda.  
- En **OBMM**, se muestra al lado del nombre del archivo `.esp` o `.esm`.  
- En **MO2**, lo puedes ver en la pestaña de *Plugins*.  

El *load order* se expresa en **hexadecimal** (por ejemplo, `02`, `0A`, `0F`, etc.).  
### 2. **Reemplaza `xx` con el Load Order**  
Una vez que tengas el número de carga del mod en hexadecimal, reemplázalo en el RefID.  
**Ejemplo:**  
Si el ID de un ítem es `xx000D62` y el mod que lo añade tiene un load order de `0A`, entonces el RefID real será `0A000D62`.  
### 3. **Usa la Consola para Verificar**  
Abre la consola (`~` o `ñ` en teclados españoles) y escribe:  
```
player.additem 0A000D62 1
```
Si el ítem aparece en tu inventario, significa que el RefID es correcto.  
Si no estás seguro de qué mod agrega el ítem, puedes usar:  
```
help "nombre del ítem" 4
```
Esto te mostrará los IDs relacionados con ese nombre.

## Usuario · 13/2/25, 12:11:52 a. m.

Cómo es comando para clonar un npc?

## Asistente · 13/2/25, 12:12:05 a. m.

En *Oblivion*, puedes clonar un NPC usando la consola con el comando:  
```
player.placeatme <BaseID> 1
```
### **Pasos para clonar un NPC**  

1. **Encuentra el BaseID del NPC**  
   - Si el NPC pertenece al juego base, puedes buscar su BaseID en la wiki de *Oblivion* (ejemplo: [UESP](https://en.uesp.net/)).  
   - Si el NPC es de un mod, usa el comando:  
     ```
     help "nombre del NPC" 4
     ```
     Esto te mostrará su BaseID.  

2. **Usa el comando para clonar**  
   - Reemplaza `<BaseID>` con el ID del NPC.  
   - El `1` al final indica que solo quieres crear una copia.  
   **Ejemplo:** Si quieres clonar a un guardia imperial cuyo BaseID es `0002299C`, usa:  
   ```
   player.placeatme 0002299C 1
   ```
### **Diferencia entre RefID y BaseID**  
- **BaseID**: Identifica el prototipo del NPC en el juego. Se usa con `placeatme` para clonar.  
- **RefID**: Es la instancia única del NPC en el mundo. No funciona con `placeatme`.  

Si necesitas mover un NPC en vez de clonarlo, usa:  
```
prid <RefID>
moveto player
```
Donde `<RefID>` es el identificador del NPC en el mundo.  
Si necesitas eliminar un clon, selecciónalo con la consola y usa:  
```
markfordelete
```
¡Déjame saber si necesitas más ayuda!

## Usuario · 13/2/25, 12:15:20 a. m.

Me desapareció el caballo y cuando pongo moveto.player Id del  caballo me aparece en una mancha de sangre 

## Asistente · 13/2/25, 12:15:33 a. m.

Si al usar `moveto player <RefID>` el caballo aparece muerto (con una mancha de sangre), significa que probablemente murió en algún punto del juego.  
### **Soluciones**  
#### **1. Revivir al caballo**  
Selecciona el caballo en la consola y usa:  
```
resurrect
```
Si no puedes seleccionarlo manualmente, usa:  
```
prid <RefID>
resurrect
```
Después de revivirlo, muévelo hacia ti:  
```
moveto player
```
#### **2. Clonar un nuevo caballo**  
Si el anterior no revive bien, crea uno nuevo con:  
```
player.placeatme <BaseID> 1
```
Esto genera una copia del caballo original, pero no será el mismo (no tendrá vínculos con tu personaje si era un caballo comprado).  
#### **3. Obtener otro caballo (si era comprado o de una quest)**  
Si perdiste el caballo de la Hermandad Oscura (Sombra), de un establo o de un mod, puedes:  
- Intentar volver al lugar donde lo obtuviste.  
- Si era un caballo comprado, volver a su establo, ya que suelen reaparecer ahí.  

Si no recuerdas el RefID o BaseID del caballo, dime qué caballo tenías y te ayudo a encontrarlo.

## Usuario · 13/2/25, 12:16:42 a. m.

El caballo del monje de la quest principal, tenía armadura 

## Asistente · 13/2/25, 12:16:53 a. m.

El caballo que mencionas es **Prior Maborel's Paint Horse**, que recibes al inicio de la misión principal en *Oblivion*. Como le pusiste armadura, significa que usaste el **DLC Horse Armor Pack**.  
Si el caballo desapareció o murió, aquí tienes varias soluciones:  

---
### **1. Intentar traerlo con la consola**  
Si aún existe en el mundo del juego pero está lejos o atascado:  
```
prid 00032BF5
moveto player
```
Si aparece muerto, usa:  
```
resurrect
moveto player
```
Esto debería revivirlo y traerlo de vuelta.  

---
### **2. Crear un nuevo Prior Maborel's Horse**  
Si el anterior no funciona, puedes generar uno nuevo con:  
```
player.placeatme 00032BF5 1
```
Este es un clon del caballo original, pero sin relación con tu personaje. Si necesitas uno funcional, intenta la opción 3.  

---
### **3. Obtener otro caballo gratis**  
Si Prior Maborel’s Horse está bugueado, puedes conseguir otro caballo gratis en la **Hermandad Oscura (Sombra)** o comprar uno en un establo y ponerle armadura de nuevo con el DLC.  
Si necesitas más ayuda, dime qué versión del juego usas (vanilla, con mods, etc.).

## Usuario · 13/2/25, 12:20:00 a. m.

Me pásate el refid de Shadow mere

## Asistente · 13/2/25, 12:20:10 a. m.

El RefID de **Shadowmere** en *Oblivion* es:  
```
00032BF5
```
Pero ojo, ese es el **RefID de Prior Maborel’s Horse**. **Shadowmere** tiene otro RefID y BaseID. Aquí están los correctos para Shadowmere:  

- **BaseID**: `00032BF4` (para generar un nuevo Shadowmere)  
- **RefID**: `00032BF3` (para moverlo o revivirlo si está muerto)  

### **Comandos útiles para Shadowmere**  

1. **Si desapareció y quieres traerlo a ti**  
   ```
   prid 00032BF3
   moveto player
   ```
   
2. **Si está muerto y quieres revivirlo**  
   ```
   prid 00032BF3
   resurrect
   moveto player
   ```
   *Nota*: Shadowmere es esencial y revive solo después de unos días, pero si no lo hace, usa este método.  

3. **Si todo falla y necesitas crear uno nuevo**  
   ```
   player.placeatme 00032BF4 1
   ```
   *Esto crea un clon, pero no tendrá los mismos scripts que el original.*  
Si Shadowmere sigue sin aparecer, dime si usas mods o si pasó algo raro antes de que desapareciera.

## Usuario · 13/2/25, 12:21:37 a. m.

32bf3 es el ID?

## Asistente · 13/2/25, 12:21:42 a. m.

Sí, **`00032BF3`** es el **RefID** de **Shadowmere** en *Oblivion*.  
Si quieres traerlo de vuelta a tu ubicación, usa estos comandos en la consola:  
```
prid 00032BF3
moveto player
```
Si aparece muerto, revívelo con:  
```
prid 00032BF3
resurrect
moveto player
```
Si necesitas generar un nuevo Shadowmere (aunque no será el mismo técnicamente), usa:  
```
player.placeatme 00032BF4 1
```
Si sigues teniendo problemas, dime qué pasó antes de que desapareciera.

## Usuario · 13/2/25, 12:22:03 a. m.

No, quiero el de prior maben

## Asistente · 13/2/25, 12:22:08 a. m.

El **RefID** del caballo de **Prior Maborel** en *Oblivion* es:  
```
00032BF5
```
Si quieres traerlo de vuelta, usa estos comandos en la consola:  
```
prid 00032BF5
moveto player
```
Si aparece muerto, revívelo con:  
```
prid 00032BF5
resurrect
moveto player
```
Si necesitas crear un nuevo Prior Maborel's Horse (aunque no será el mismo técnicamente), usa:  
```
player.placeatme 00032BF5 1
```
Déjame saber si necesitas más ayuda.

## Usuario · 13/2/25, 12:22:34 a. m.

Recuerda que tiene armadura 

## Asistente · 13/2/25, 12:22:48 a. m.

El usuario tiene el caballo de Prior Maborel con armadura en *Oblivion*.

## Asistente · 13/2/25, 12:22:48 a. m.

Si el caballo de Prior Maborel tenía armadura, el método estándar para traerlo de vuelta sigue siendo:  
```
prid 00032BF5
moveto player
```
Si aparece muerto:  
```
prid 00032BF5
resurrect
moveto player
```
El problema es que si tienes el **DLC Horse Armor Pack**, la armadura puede no aparecer al revivirlo o al generar uno nuevo. Si el caballo reaparece sin armadura, prueba volver a la ubicación donde pusiste la armadura originalmente e intenta aplicarla de nuevo.  
Si el juego no te deja volver a ponerle armadura, dime qué tipo de armadura tenía (Acero o Ébano) para ver si hay un comando que la reaplique.

## Usuario · 13/2/25, 12:23:49 a. m.

Por lo que leí, en uesp, los caballos con armadura empiezan con xx

## Asistente · 13/2/25, 12:24:08 a. m.

Sí, los caballos con armadura del **DLC Horse Armor Pack** tienen un ID que empieza con **`xx`**, porque provienen de un mod (*DLC*).  
### **Cómo encontrar el ID correcto de tu caballo con armadura**  

1. **Saber el *load order* del DLC**  
   - Como el **DLC Horse Armor Pack** es un `.esp`, su código de carga cambia según el orden de los mods.  
   - Puedes ver el *load order* en programas como **Wrye Bash**, **OBMM**, o **Mod Organizer 2**.  
   - El número de carga se expresa en **hexadecimal** (Ejemplo: `02`, `0A`, `0F`, etc.).  

2. **Reemplazar `xx` por el número del *load order***  
   - Según **UESP**, los ID de los caballos con armadura son:  
     - **Prior Maborel’s Horse con armadura de acero**: `xx002DB4`  
     - **Prior Maborel’s Horse con armadura de ébano**: `xx002DB5`  
   - Si el *load order* del DLC es, por ejemplo, `0A`, entonces el RefID sería:  
     - Acero: `0A002DB4`  
     - Ébano: `0A002DB5`  
### **Comandos para traerlo de vuelta**  
Si conoces el *load order*, usa el ID correcto en estos comandos:  
```
prid xx002DB4  (Si tenía armadura de acero)
prid xx002DB5  (Si tenía armadura de ébano)
moveto player
```
Si aparece muerto, revívelo antes de moverlo:  
```
resurrect
moveto player
```
Si el caballo no aparece, dime tu *load order* o intenta el comando:  
```
help "Prior Maborel" 4
```
Eso debería mostrar los IDs de los caballos disponibles en tu partida.

## Usuario · 13/2/25, 12:28:36 a. m.

Cargue una partida vieja afuera de una puerta de oblivion. El ID 03001c24

## Asistente · 13/2/25, 12:28:45 a. m.

Si el ID de tu caballo con armadura es **`03001C24`**, eso significa que el *load order* del **DLC Horse Armor Pack** es `03`.  
### **Cómo traer de vuelta tu caballo**  

1. **Mover el caballo a tu ubicación:**  
   ```
   prid 03001C24
   moveto player
   ```

2. **Si aparece muerto, revívelo y muévelo otra vez:**  
   ```
   prid 03001C24
   resurrect
   moveto player
   ```

3. **Si el caballo sigue sin aparecer o está bugueado, crea uno nuevo:**  
   - **Si tenía armadura de acero:**  
     ```
     player.placeatme 03002DB4 1
     ```
   - **Si tenía armadura de ébano:**  
     ```
     player.placeatme 03002DB5 1
     ```
El nuevo caballo generado **no estará vinculado a ti**, pero si el original no funciona, esta es la mejor alternativa.  
Si algo sigue fallando, dime qué ocurre exactamente al usar estos comandos.