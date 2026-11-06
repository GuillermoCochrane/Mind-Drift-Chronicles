## Usuario · 25/5/24, 6:44:49 p. m.

import PropTypes from 'prop-types';
function MovieRow({id, title="Pelicula sin título", rating, awards, length}) {
  return (
        <tr>
            <td className='text-center'>{id}</td>
            <td >{title}</td>
            <td className='text-center'>{rating}</td>
            <td className='text-center'>{awards}</td>
            <td className='text-center'>{length}</td>
        </tr>
  )
}
MovieRow.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  awards: PropTypes.number,
  length: PropTypes.number
}
export default MovieRow
dado este componente, quisiera modificarlo para que si el valor de length no viene nada, me muestre la frase "no hay datos"

## Asistente · 25/5/24, 6:44:52 p. m.

Puedes modificar el componente `MovieRow` para mostrar la frase "no hay datos" cuando el valor de `length` no esté presente utilizando una expresión condicional en JSX. Aquí tienes cómo puedes hacerlo:
```jsx
import PropTypes from 'prop-types';
function MovieRow({id, title="Pelicula sin título", rating, awards, length}) {
  return (
        <tr>
            <td className='text-center'>{id}</td>
            <td>{title}</td>
            <td className='text-center'>{rating}</td>
            <td className='text-center'>{awards}</td>
            <td className='text-center'>{length ? length : "no hay datos"}</td>
        </tr>
  )
}
MovieRow.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  awards: PropTypes.number,
  length: PropTypes.number
}
export default MovieRow;
```
Aquí, `{length ? length : "no hay datos"}` es una expresión condicional que verifica si `length` es verdadero. Si `length` tiene un valor, muestra ese valor; de lo contrario, muestra la cadena "no hay datos".