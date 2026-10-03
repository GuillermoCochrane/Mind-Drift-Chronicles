## Usuario · 3/3/25, 11:43:38 p. m.

Cómo se llama la propiedad de CSS similar a boxshadow pero para texto?

## Asistente · 3/3/25, 11:43:38 p. m.

La propiedad de CSS similar a `box-shadow` pero para texto es **`text-shadow`**.  
Su sintaxis básica es:  
```css
text-shadow: desplazamientoX desplazamientoY desenfoque color;
```
Ejemplo:  
```css
h1 {
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}
```
Esto aplicaría una sombra negra con un ligero desenfoque al texto del `<h1>`.

## Usuario · 3/3/25, 11:46:39 p. m.

Si quisiera poner una transición  hover a un botón que en su interior tiene un I. Quiero que al hacer hover al botón, el I escale 1,2 y el texto tenga sobra, como sería el CSS?

## Asistente · 3/3/25, 11:46:39 p. m.

Puedes lograrlo usando `:hover` en el botón y aplicando los estilos a los elementos internos (`i` y `span` o el texto). Aquí tienes un ejemplo de CSS para lograrlo:  
```css
button {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px; /* Espacio entre el icono y el texto */
  transition: all 0.3s ease;
}
button i {
  transition: transform 0.3s ease;
}
button span {
  transition: text-shadow 0.3s ease;
}
button:hover i {
  transform: scale(1.2);
}
button:hover span {
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}
```
### Explicación:
- `button i`: Aplica una transición a la propiedad `transform`, para que el icono escale al hacer `hover`.
- `button span`: Aplica una transición a `text-shadow` para que el texto tenga sombra al hacer `hover`.
- `button:hover i`: Escala el icono (`i`) a `1.2`.
- `button:hover span`: Aplica una sombra al texto.

Este código asume que dentro del botón hay un `i` para el icono y un `span` para el texto, por ejemplo:
```html
<button>
  <i class="fa fa-star"></i>
  <span>Click aquí</span>
</button>
```
Si el texto no está dentro de un `span`, puedes aplicar `text-shadow` directamente sobre `button`.

## Usuario · 3/3/25, 11:49:14 p. m.

En ningún momento hablé de un spam. Es solo un  botón con un I adentro (adivinaste jaja, es un icono de fontawesome, pero es la x para cerrar)

## Asistente · 3/3/25, 11:49:14 p. m.

El usuario usa iconos de FontAwesome en botones, como una "X" para cerrar.

## Asistente · 3/3/25, 11:49:16 p. m.

¡Entendido! Como solo tienes un `<i>` dentro del botón, puedes aplicar los efectos directamente a ese elemento sin necesidad de un `<span>`. Aquí tienes el CSS corregido:  
```css
button {
  padding: 10px;
  font-size: 16px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: text-shadow 0.3s ease;
}
button i {
  transition: transform 0.3s ease;
}
button:hover {
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}
button:hover i {
  transform: scale(1.2);
}
```
Este código hará que cuando pases el cursor sobre el botón:  
- El icono (`i`) se agrande a `1.2` veces su tamaño.  
- El texto (o en este caso el icono) tenga una sombra para resaltarlo más.  

Si usas FontAwesome, tu HTML sería algo así:  
```html
<button>
  <i class="fa fa-times"></i> <!-- Icono "X" de cierre -->
</button>
```  
Así te aseguras de que el efecto funcione correctamente solo con el `i` dentro del botón.