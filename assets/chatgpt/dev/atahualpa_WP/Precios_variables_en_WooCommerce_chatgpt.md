## Usuario · 15/1/25, 3:55:52 p. m.

Estoy haciendo un e-commerce con  WordPress y woocomerce. Hay algúna forma de ponerle varios precios a un producto, por ejemplo, en una pizzería tengo pizzas chicas medianas y grandes (además de cada sabor de pizza)

## Asistente · 15/1/25, 3:56:19 p. m.

Sí, es completamente posible manejar varios precios para un mismo producto en WooCommerce utilizando **variaciones de productos**. En tu caso, puedes configurar un producto como "Pizza" y crear variaciones basadas en el tamaño (chica, mediana, grande) y el sabor. Aquí tienes cómo hacerlo paso a paso:
### 1. **Configura el producto como un producto variable**  
1. Ve a **Productos** > **Añadir nuevo**.
2. Escribe el nombre del producto, por ejemplo, "Pizza".
3. En la sección "Datos del producto", selecciona **Producto variable** en el desplegable.

### 2. **Añade atributos para las variaciones**  
1. En la pestaña **Atributos**, haz clic en "Añadir".
2. Escribe el nombre del atributo, por ejemplo, "Tamaño".
3. Añade los valores separados por una barra vertical `|`, por ejemplo: `Chica | Mediana | Grande`.
4. Marca la casilla **Usar para variaciones**.
5. Repite el proceso si necesitas otro atributo, como "Sabor", y escribe valores como: `Margarita | Pepperoni | Cuatro Quesos`.
6. Guarda los atributos.

### 3. **Configura las variaciones**  
1. Ve a la pestaña **Variaciones** y selecciona **Crear variaciones de todos los atributos** en el desplegable.
2. WooCommerce generará automáticamente todas las combinaciones posibles (por ejemplo, Margarita Chica, Pepperoni Grande, etc.).
3. Configura el precio de cada variación haciendo clic en el ícono de triángulo desplegable junto a cada combinación.  
   - Por ejemplo, "Margarita Chica: $10", "Margarita Mediana: $15", "Margarita Grande: $20".
4. Añade imágenes, stock y otros detalles específicos para cada variación si es necesario.

### 4. **Publica el producto**  
1. Revisa que todo esté configurado correctamente.
2. Publica el producto.

### Opcional: Mejorar la experiencia de usuario  
- **Plugins adicionales**: Para mejorar el diseño de selección de variaciones, puedes usar plugins como:
  - [WooCommerce Variation Swatches](https://wordpress.org/plugins/woo-variation-swatches/): Convierte las variaciones en botones visuales.
  - [Product Add-Ons](https://woocommerce.com/products/product-add-ons/): Permite agregar opciones personalizadas como ingredientes extras.
De esta manera, puedes manejar múltiples precios y tamaños de forma profesional en tu e-commerce de pizzería.