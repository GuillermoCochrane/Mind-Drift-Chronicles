## Usuario · 5/9/24, 6:59:43 p. m.

import { useState, useRef } from "react";
import PropTypes from 'prop-types';
import Input from "../../shared/InputSection/InputSection";
import FileInput from "../../shared/InputFileSection/InputFileSection";
import utilities from "../../../../../utilities/utilities";
const apiUrl = import.meta.env.VITE_API_URL;
const NewImage = ({ courseID, classID, topicID  }) => {
  const [validations, setValidations] = useState({});
  const [oldData, setOldData] = useState({ title: "",  alt: "", image: null });
  const [fileName, setFileName] = useState("");
  const form = useRef(null);
  const updateForm = (field, value) => {
    setOldData(utilities.updateInput(field, value, oldData));
  };
  const updateFileForm = (file) => {
    if (file) {
      setOldData((prevData) => ({ ...prevData, image: file }));
      setFileName(file.name);
    }
  };
  const createFigure = async (e) => {
    e.preventDefault();
    let type = "figure";
    let title = form.current.elements.title.value;
    let alt = form.current.elements.alt.value;
    let endpoint = `${apiUrl}api/course/newImage/${courseID.toLowerCase()}/${classID}/${topicID}`;
    let data = new FormData(); 
    data.append('title', title);
    data.append('type', type);
    data.append('alt', alt);
    if (oldData.image) {
      data.append('image', oldData.image);
    }
    let formData = utilities.fetchData(data, true);
    try {
      const response = await fetch(endpoint, formData);
      const result = await response.json();
      
      if (result.meta.created) {
        setValidations({ success: "Se creó la imagen" });
        setOldData({ title: "", alt: "", image: null });
        setFileName("");
      } else {
        setValidations(result.errors);
        setOldData(result.oldData);
      }
    } catch (error) {
      setValidations({ error: error.message });
      console.log(error);
    }
  };
  return (
    <form className="panel-form" ref={form} onSubmit={createFigure}>
      <Input
        type="text"
        name="title"
        id="title"
        value={oldData.title}
        label="Título de la imagen"
        onChange={updateForm}
        styles="section-flex"
        validations={validations}
      />
      <Input
        type="text"
        name="alt"
        id="alt"
        value={oldData.alt}
        label="Texto alternativo"
        onChange={updateForm}
        styles="section-flex"
        validations={validations}
      />
      <FileInput
        name="figure"
        id="figure"
        label="Imagen a subir"
        onChange={updateFileForm}
        styles="section-flex"
        validations={validations}
        fileName={fileName} 
      />
      <span className="success">
        {validations.success ? validations.success : "\u00A0 "}
      </span>
      <button type="submit">Crear</button>
    </form>
  );
};
NewImage.propTypes = {
  courseID: PropTypes.string.isRequired,
  classID: PropTypes.string.isRequired,
  topicID: PropTypes.string.isRequired,
};
export default NewImage;
dado este componente, cuando hago validaciones en el backend, que campo de capturar para vaildar la imagen?
te ajunto el middleware donde hago las validaciones:
//Middleware de configuración de express-validator para rutas de usuarios, para imagen de perfil
const path = require('path');
const { body } = require('express-validator');
const imageValidations = [
    body('title')
            .notEmpty().withMessage("Debes incluir un título").bail()
            .isLength({ min: 2 }).withMessage("El título debe tener al menos 2 caracter").bail()
            .isLength({ max: 30 }).withMessage("El título no puede tener más de 30 caracteres"),
    body('alt')
        .notEmpty().withMessage("Debes incluir un texto alternativo").bail()
        .isLength({ min: 2 }).withMessage("El texto alternativo debe tener al menos 2 caracter").bail()
        .isLength({ max: 50 }).withMessage("El texto alternativo no puede tener más de 50 caracteres"),
    body('type')
        .notEmpty().withMessage('Debes seleccionar el tipo de contenido').bail(),
    body('figure').custom((value, {req}) => {
        let file = req.file;
        let acceptedExt = [".bpm", ".png", ".jpg", ".gif", ".webp", ".svg"];
        if(!file){
            throw new Error("Debes incluir la imagen");
        } else {
            let ext = path.extname(file.originalname)
            if(!acceptedExt.includes(ext)){
                throw new Error("El formato del archivo es incompatible");
            }
        }
        return true
    }) 
]
module.exports = imageValidations

## Asistente · 5/9/24, 6:59:54 p. m.

Para validar la imagen en el backend con el middleware de `express-validator`, debes capturar el campo que contiene la imagen en el formulario. En tu código frontend, el campo del formulario que envía la imagen se llama `image`, pero en el middleware del backend lo estás validando como `figure`.
Para que la validación funcione correctamente, debes asegurarte de que el nombre del campo que envías desde el frontend coincida con el que esperas validar en el backend.
### Soluciones posibles:
1. **Cambiar el nombre del campo en el frontend para que coincida con el middleware:**
   - Modifica el nombre del campo en el `FileInput` de tu formulario a `figure`:
     ```javascript
     <FileInput
        name="figure" // Cambiar de 'image' a 'figure'
        id="figure"
        label="Imagen a subir"
        onChange={updateFileForm}
        styles="section-flex"
        validations={validations}
        fileName={fileName} 
      />
     ```
   - Asegúrate de que en `createFigure`, el campo que estás añadiendo al `FormData` sea `figure` en lugar de `image`:
     ```javascript
     if (oldData.image) {
       data.append('figure', oldData.image); // Cambiar de 'image' a 'figure'
     }
     ```

2. **Cambiar la validación en el backend para que coincida con el nombre del campo en el frontend:**
   - Modifica la validación en el backend para que utilice `body('image')` en lugar de `body('figure')`:
     ```javascript
     body('image').custom((value, { req }) => { // Cambiar de 'figure' a 'image'
       let file = req.file;
       let acceptedExt = [".bpm", ".png", ".jpg", ".gif", ".webp", ".svg"];
       if (!file) {
         throw new Error("Debes incluir la imagen");
       } else {
         let ext = path.extname(file.originalname)
         if (!acceptedExt.includes(ext)) {
           throw new Error("El formato del archivo es incompatible");
         }
       }
       return true;
     })
     ```
Ambas soluciones son válidas, pero lo más importante es que el nombre del campo en el frontend coincida con el nombre del campo que esperas validar en el middleware del backend.

## Usuario · 5/9/24, 7:01:17 p. m.

gracias, realizare los cambios en el middleware

## Asistente · 5/9/24, 7:01:18 p. m.

¡De nada! Me alegra que la solución te haya sido útil. Si necesitas más ayuda al hacer los cambios o cualquier otra cosa, estaré aquí para ayudarte. ¡Buena suerte con la implementación!