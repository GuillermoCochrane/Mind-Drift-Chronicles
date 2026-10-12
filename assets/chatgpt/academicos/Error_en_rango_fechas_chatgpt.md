## Usuario · 18/11/24, 6:46:57 p. m.

SELECT *
FROM movies
where release_date between 2009-01-01 00:00:00 and 2001-01-01 00:00:00
order by release_date desc
porque me tira error?

## Asistente · 18/11/24, 6:47:12 p. m.

El error ocurre porque estás usando un rango de fechas inválido en tu consulta. Específicamente, las fechas del rango están en orden incorrecto: la fecha de inicio (`2009-01-01`) es posterior a la fecha de fin (`2001-01-01`). Esto hace que el rango no tenga sentido lógico.
### Solución
Asegúrate de que la fecha inicial sea **menor o igual** a la fecha final en el rango. Además, las fechas deben estar entre comillas para que sean reconocidas como valores de tipo `DATE` o `DATETIME`. 
Corrige la consulta así:
```sql
SELECT *
FROM movies
WHERE release_date BETWEEN '2001-01-01 00:00:00' AND '2009-01-01 00:00:00'
ORDER BY release_date DESC;
```
### Notas:
1. Las fechas deben ir entre **comillas simples** (`'`).
2. El rango está ahora en el orden correcto: del **2001** al **2009**.
3. Con `ORDER BY release_date DESC`, los resultados se mostrarán desde la fecha más reciente hacia la más antigua.

Si tienes más dudas sobre consultas SQL, ¡puedes preguntar! 😊

## Usuario · 18/11/24, 6:47:33 p. m.

ah, el problema es que las fechas van entre comillas

## Asistente · 18/11/24, 6:47:48 p. m.

¡Exacto! 🚀 El problema principal es que las fechas deben ir **entre comillas simples (`'`)** para que el SQL las interprete como valores válidos de tipo `DATE` o `DATETIME`. Sin las comillas, el intérprete las ve como números o identificadores desconocidos, lo que genera el error. 
Con las comillas, tu consulta quedaría así:
```sql
SELECT *
FROM movies
WHERE release_date BETWEEN '2001-01-01 00:00:00' AND '2009-01-01 00:00:00'
ORDER BY release_date DESC;
```
Si no estás seguro del formato de las fechas que usa tu base de datos, también puedes probar con solo la parte de la fecha (`YYYY-MM-DD`):
```sql
SELECT *
FROM movies
WHERE release_date BETWEEN '2001-01-01' AND '2009-01-01'
ORDER BY release_date DESC;
```
Ambas versiones funcionarán correctamente siempre que el campo `release_date` sea de tipo `DATE`, `DATETIME` o similar. 😊