## Usuario · 13/6/24, 3:48:34 p. m.

Dada la siguiente ruta: /course/: courseID/class/:ckassID, como puedo recuperar courseID y classID usando location?

## Asistente · 13/6/24, 3:48:44 p. m.

Para recuperar los parámetros `courseID` y `classID` de la URL en JavaScript, puedes usar el objeto `location` en combinación con expresiones regulares o métodos de manipulación de cadenas. A continuación te muestro cómo hacerlo usando ambos enfoques.
### Usando Expresiones Regulares
Puedes usar una expresión regular para extraer los parámetros de la URL:
```javascript
const url = location.pathname;
const regex = /\/course\/([^/]+)\/class\/([^/]+)/;
const match = url.match(regex);
if (match) {
    const courseID = match[1];
    const classID = match[2];
    console.log(`courseID: ${courseID}, classID: ${classID}`);
} else {
    console.log("URL no coincide con el patrón esperado.");
}
```
### Usando Manipulación de Cadenas
Si prefieres no usar expresiones regulares, puedes dividir la cadena de la URL y extraer los valores:
```javascript
const url = location.pathname;
const parts = url.split('/');
let courseID, classID;
if (parts.length >= 5) {
    courseID = parts[2];
    classID = parts[4];
    console.log(`courseID: ${courseID}, classID: ${classID}`);
} else {
    console.log("URL no coincide con el patrón esperado.");
}
```
Ambos métodos asumirán que la URL sigue exactamente el patrón `"/course/:courseID/class/:classID"`. Asegúrate de validar y manejar posibles casos donde la URL no tenga el formato esperado para evitar errores.