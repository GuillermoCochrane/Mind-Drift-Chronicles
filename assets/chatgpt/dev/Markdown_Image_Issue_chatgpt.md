## Usuario · 19/9/24, 4:35:11 a. m.

<div align = "center">
![](https://github-readme-stats.vercel.app/api/top-langs/?username=GuillermoCochrane&theme=dark&hide_border=false&include_all_commits=true&count_private=true)
![](https://github-readme-stats.vercel.app/api?username=GuillermoCochrane&theme=dark&hide_border=false&include_all_commits=true&count_private=true)
</div>
porque no funciona?

## Asistente · 19/9/24, 4:35:26 a. m.

El problema es que estás intentando usar una imagen con la sintaxis de Markdown dentro de un bloque `<div>`, pero HTML y Markdown no siempre se mezclan bien. Para solucionar esto, puedes usar HTML completo dentro del bloque `<div>` en lugar de la sintaxis de Markdown.
Prueba con esto:
```html
<div align="center">
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=GuillermoCochrane&theme=dark&hide_border=false&include_all_commits=true&count_private=true" alt="Top Languages" />
  <img src="https://github-readme-stats.vercel.app/api?username=GuillermoCochrane&theme=dark&hide_border=false&include_all_commits=true&count_private=true" alt="GitHub Stats" />
</div>
```
Esto debería mostrar correctamente las imágenes dentro del bloque `<div>`.