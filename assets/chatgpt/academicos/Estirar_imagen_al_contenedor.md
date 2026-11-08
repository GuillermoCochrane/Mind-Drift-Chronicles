## Usuario · 21/5/24, 1:42:15 a. m.

propiedad de css para estirar imagen al contenedor

## Asistente · 21/5/24, 1:42:19 a. m.

Para estirar una imagen al contenedor usando CSS, puedes usar la propiedad `object-fit` con el valor `cover`. Esto hará que la imagen cubra completamente el contenedor, ajustando su tamaño para que no haya espacios en blanco. Aquí tienes un ejemplo de cómo hacerlo:
```css
.contenedor {
    width: 300px; /* Ancho del contenedor */
    height: 200px; /* Altura del contenedor */
    overflow: hidden; /* Para recortar cualquier parte de la imagen que se desborde */
}
.imagen {
    width: 100%; /* Ancho completo del contenedor */
    height: 100%; /* Altura completa del contenedor */
    object-fit: cover; /* Estirar la imagen al contenedor */
}
```
Y en tu HTML:
```html
<div class="contenedor">
    <img class="imagen" src="ruta_de_la_imagen.jpg" alt="Descripción de la imagen">
</div>
```
Esto hará que la imagen se estire para cubrir completamente el contenedor, manteniendo su relación de aspecto original. Si necesitas que la imagen se distorsione para ajustarse exactamente al contenedor sin mantener su relación de aspecto, puedes usar la propiedad `object-fit` con el valor `fill`.