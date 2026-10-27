## Asistente · 21/7/24, 3:55:43 a. m.

Para agregar un personaje en MUGEN, necesitas editar el archivo `select.def`, que se encuentra en la carpeta `data` de tu instalación de MUGEN. Sigue estos pasos:

1. Abre el archivo `select.def` con un editor de texto.
2. Busca la sección donde se agregan los personajes, que generalmente está indicada por un comentario como `;Insert your characters below`.

3. Añade la línea `saber/saber_nit.def` en esta sección.

Por ejemplo, el archivo `select.def` podría verse así:
```plaintext
[Characters]
;Insert your characters below.
kfm, stages/kfm.def
saber/saber_nit.def
```
Guarda los cambios y cierra el archivo. Luego, abre MUGEN y deberías ver al personaje añadido en el juego.