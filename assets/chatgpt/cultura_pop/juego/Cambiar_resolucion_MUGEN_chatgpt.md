## Usuario · 31/12/24, 1:04:47 p. m.

en mugen, que archivo debo modificar para cambiar la resolucion?

## Asistente · 31/12/24, 1:05:00 p. m.

En MUGEN, puedes cambiar la resolución modificando el archivo de configuración principal llamado `mugen.cfg`. Este archivo se encuentra en la carpeta `data` dentro del directorio principal de tu instalación de MUGEN. 
### Pasos para cambiar la resolución:

1. **Abrir el archivo `mugen.cfg`:**
   - Ve a la carpeta `data` en tu instalación de MUGEN.
   - Busca el archivo llamado `mugen.cfg`.
   - Ábrelo con un editor de texto, como el Bloc de notas o Visual Studio Code.

2. **Buscar la sección `[Video]`:**
   Dentro del archivo, localiza la sección `[Video]`. Esta contiene las configuraciones relacionadas con la resolución y otros aspectos gráficos.

3. **Modificar la resolución:**
   Busca las líneas que contienen `GameWidth` y `GameHeight`. Cámbialas según la resolución que desees. Por ejemplo:
   ```ini
   GameWidth = 1280
   GameHeight = 720
   ```

4. **Ajustar el modo de renderizado (opcional):**
   También puedes ajustar el modo de renderizado si es necesario. Busca la línea que contiene `RenderMode` y cámbiala a una de las opciones compatibles (por ejemplo, `OpenGL`, `System`, etc.).

5. **Guardar los cambios:**
   Guarda el archivo y cierra el editor de texto.

6. **Probar la configuración:**
   Ejecuta MUGEN para asegurarte de que los cambios se aplicaron correctamente.
### Notas adicionales:
- Algunas pantallas de título (screenpacks) pueden estar diseñadas para resoluciones específicas. Si cambias la resolución, es posible que necesites ajustar o descargar un screenpack compatible con la nueva resolución.
- Si tienes problemas con los gráficos después de modificar la configuración, revisa que el modo de renderizado (`RenderMode`) sea compatible con tu hardware y configuración del sistema operativo.

¿Quieres ayuda con algún screenpack o ajustes específicos?