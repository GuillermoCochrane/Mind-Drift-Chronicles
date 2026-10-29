## Usuario · 3/7/24, 8:38:37 p. m.

dado el siguiente componente de react:
import  { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Link } from "react-router-dom";
import Error404 from "../Error404/Error404.jsx";
import ClassIndex from "../ClassIndex/ClassIndex.jsx"; //modiicarlo para que cargue de acuerdo a la url
import Topics from '../Topics/Topics';
import NavBarIndex from "../../partials/NavBarIndex/NabBarIndex.jsx";
function Courses({ match }) {
  
  const navBar = useRef(null);
  const handleClick = () => {
    navBar.current.classList.toggle("hidden");
  }
  const [index, setIndex] = useState([]);
  const [courseId, setCourseId] = useState("");
  useEffect(() => {
    setCourseId(match.params.courseId);
  }, [match.params.courseId]);
  useEffect(() => {
    const endpoint = `http://localhost:6006/api/${courseId}`;
    const fetchData = async () => {
      try {
        const response = await fetch(endpoint);
        const data = await response.json();
        setIndex(data.data);
      }
      catch (error) {
        console.log(error);
        setIndex([]);
      }
    }
    fetchData();
  }, [courseId]);
  
  return (
    <>
      <header>
          <button onClick={handleClick} id="index">Índice</button>
          {courseId.toUpperCase() == "IA" && <h1>Curso de ChatGPT e Inteligencia Artificial</h1>}
          {courseId.toUpperCase() == "PYTHON" && <h1>Curso de Python</h1>}
      </header>
      <main>
        <nav className='sumario' ref={navBar}>
          <ol>
            {
              index.map((item, idx) => (
                <NavBarIndex data={item} key={idx} />
              ))
            }
          </ol>
          <Link to="/">
            <button>Volver al inicio</button>
          </Link> 
        </nav>
        <Switch>
          <Route path={`${match.url}`} exact component={ClassIndex} />
          <Route path={`${match.url}/class`} exact component={ClassIndex} />
          <Route path={`${match.url}/class/:classId`} exact component={ClassIndex} />
          <Route path={`${match.url}/class/:classId/:topicId`} exact component={Topics} /> 
          <Route component={Error404} />
        </Switch>
      </main>
    </>
  );
}
Courses.propTypes = {
  match: PropTypes.object.isRequired,
};
export default Courses;
porque me tira el siguiente error?
VM91:1 
 GET http://localhost:6006/api/ 404 (Not Found)
_0x225df8.fetch	@	VM91:1
fetchData	@	Courses.jsx:27
(anonymous)	@	Courses.jsx:36
commitHookEffectListMount	@	react-dom_client.js?v=66e08445:16936
commitPassiveMountOnFiber	@	react-dom_client.js?v=66e08445:18184
commitPassiveMountEffects_complete	@	react-dom_client.js?v=66e08445:18157
commitPassiveMountEffects_begin	@	react-dom_client.js?v=66e08445:18147
commitPassiveMountEffects	@	react-dom_client.js?v=66e08445:18137
flushPassiveEffectsImpl	@	react-dom_client.js?v=66e08445:19518
flushPassiveEffects	@	react-dom_client.js?v=66e08445:19475
(anonymous)	@	react-dom_client.js?v=66e08445:19356
workLoop	@	react-dom_client.js?v=66e08445:197
flushWork	@	react-dom_client.js?v=66e08445:176
performWorkUntilDeadline	@	react-dom_client.js?v=66e08445:384
Show less

## Asistente · 3/7/24, 8:39:01 p. m.

El error `404 (Not Found)` indica que la solicitud a la URL `http://localhost:6006/api/` no pudo encontrar el recurso en el servidor. Esto ocurre porque `courseId` está vacío en la URL de la API cuando se realiza la solicitud.
Para solucionar este problema, asegúrate de que `courseId` tiene un valor antes de usarlo para construir la URL. Una forma de hacerlo es agregar una condición para verificar que `courseId` no esté vacío antes de realizar la solicitud `fetch`.
Aquí tienes una versión modificada del componente `Courses` que incluye esta verificación:
```jsx
import { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Link } from "react-router-dom";
import Error404 from "../Error404/Error404.jsx";
import ClassIndex from "../ClassIndex/ClassIndex.jsx";
import Topics from '../Topics/Topics';
import NavBarIndex from "../../partials/NavBarIndex/NabBarIndex.jsx";
function Courses({ match }) {
  const navBar = useRef(null);
  const handleClick = () => {
    navBar.current.classList.toggle("hidden");
  }
  const [index, setIndex] = useState([]);
  const [courseId, setCourseId] = useState("");
  useEffect(() => {
    setCourseId(match.params.courseId);
  }, [match.params.courseId]);
  useEffect(() => {
    if (!courseId) return;
    const endpoint = `http://localhost:6006/api/${courseId}`;
    const fetchData = async () => {
      try {
        const response = await fetch(endpoint);
        const data = await response.json();
        setIndex(data.data);
      }
      catch (error) {
        console.log(error);
        setIndex([]);
      }
    }
    fetchData();
  }, [courseId]);
  return (
    <>
      <header>
          <button onClick={handleClick} id="index">Índice</button>
          {courseId.toUpperCase() === "IA" && <h1>Curso de ChatGPT e Inteligencia Artificial</h1>}
          {courseId.toUpperCase() === "PYTHON" && <h1>Curso de Python</h1>}
      </header>
      <main>
        <nav className='sumario' ref={navBar}>
          <ol>
            {
              index.map((item, idx) => (
                <NavBarIndex data={item} key={idx} />
              ))
            }
          </ol>
          <Link to="/">
            <button>Volver al inicio</button>
          </Link> 
        </nav>
        <Switch>
          <Route path={`${match.url}`} exact component={ClassIndex} />
          <Route path={`${match.url}/class`} exact component={ClassIndex} />
          <Route path={`${match.url}/class/:classId`} exact component={ClassIndex} />
          <Route path={`${match.url}/class/:classId/:topicId`} exact component={Topics} /> 
          <Route component={Error404} />
        </Switch>
      </main>
    </>
  );
}
Courses.propTypes = {
  match: PropTypes.object.isRequired,
};
export default Courses;
```
En esta versión, se agrega una verificación para asegurarse de que `courseId` no esté vacío antes de realizar la solicitud `fetch`. Esto debería evitar el error `404 (Not Found)` al intentar obtener datos de una URL sin un `courseId` válido.