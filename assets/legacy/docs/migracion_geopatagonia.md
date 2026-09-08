
---

## **Prompt de Migración – Proyecto Gestión Geopatagonia**

Estamos trabajando en una aplicación web bajo arquitectura **MVC** usando **Node.js**, **Express**, **EJS**, **Sequelize** y **MySQL**, con manejo de sesiones, roles y notificaciones por correo electrónico.

El sistema está orientado a la gestión de **originaciones** y **observaciones/PACs**, con 5 roles predefinidos:

* **Ejecutor**
* **Originador**
* **Tratador**
* **Observador**
* **Administrador** (añadido para gestionar datos base)

Actualmente el foco está en cerrar completamente el rol **Originador**, implementar login/logout y luego comenzar el desarrollo del rol **Tratador**.

---

### **1. Estado del rol Originador**

Funcionalidades implementadas y probadas:

#### Main Page

* [x] Crear originaciones.
* [x] Acceso y edición de originaciones, con detalle de observaciones/PACs.
* [x] Crear observaciones.
* [x] Eliminar originaciones sin observaciones/PACs.
* [x] Notificación por email al crear la primera observación/PAC.
* [x] Notificación por email al crear observaciones/PACs.
* [x] Listado de observaciones/PACs con datos de la originación padre.
* [x] Filtros por diferentes campos, incluyendo formularios e incisos (carga dinámica en frontend vía JS).
* [x] Enlaces en tabla de observaciones/PACs para visualización, exportación, agregar tareas, cambio de responsable.

#### Detalle de observaciones/PACs

* [x] Vista con detalles de la originación padre, observaciones/PACs y listado de acciones.
* [x] Exportación de datos a PDF (en revisión de plantillas).
* [x] Creación de tareas asociadas.
* [x] Cambio de responsable.

---

### **2. Sistema de Login y Logout**

* **Middleware de validación de login**:

  * Valida email y formato.
  * Verifica que el usuario exista en DB (`Usuario` via Sequelize).
  * Valida la contraseña con `bcryptjs`.
* **Controlador de usuario (`usuarioController.js`)**:

  * `processLogin` guarda el ID del usuario en sesión.
  * Plan para cifrar el `userId` antes de guardarlo usando AES-256-CBC.
  * `logout` limpia la sesión y redirige al login.
* **Router de usuario (`usuariosRouter.js`)**:

  * Rutas para login, processLogin, logout y validaciones.

---

### **3. Módulo `utilities.js`**

Archivo centralizado con utilidades transversales a la app:

#### **Cifrado reversible con AES-256-CBC**

* Implementado con `crypto` de Node.js.
* Variables de entorno: `ENCRYPTION_KEY` (32 bytes/64 hex) y `ENCRYPTION_IV` (16 bytes/32 hex).
* Validaciones de clave e IV (`cryptoValidations`).
* **`encrypt(text, randomIV = false)`**:

  * Cifra texto UTF-8 → hex.
  * Incluye IV al inicio del mensaje cifrado.
  * Opción de IV aleatorio para mayor seguridad.
* **`decrypt(encryptedText)`**:

  * Extrae IV y texto cifrado.
  * Devuelve texto original UTF-8.
* Uso previsto: guardar `userId` cifrado en sesión y descifrarlo cuando se necesite.

#### **Utilidades generales**

* **Fechas**: `getDateParts`, `formatDateDisplay`, `formatDateForm`, `multipleDateFormat`.
* **Sequelize**: `plainData`, `dataFormatter`, exclusión de timestamps (`excludeTimestamps`) y contraseñas (`excludePassword`).
* **Textos**: `adjustUnderscores`, `adjustCase`.
* **Usuarios**: `checkEmail`, `hashPassword` (`bcrypt`), `passwordRemover`.
* **Formularios**: `incisos(id)` para obtener incisos desde un formulario.
* **PDFs**:

  * `generatePDF(template, data)` desde EJS.
  * `generateURLPDF(url)` desde una URL (con Puppeteer).
* **Otros**: `toBoolean` para checkboxes.

---

### **4. Próximos pasos**

1. Integrar **express-session** y **cookie-parser** para manejar login/logout con sesiones persistentes.
2. Usar el cifrado reversible en `usuarioController` para guardar el ID de usuario encriptado en sesión.
3. Comenzar desarrollo del rol **Tratador** tras finalizar autenticación.
4. Optimizar código existente y modularizar funciones reutilizables.
5. Revisar y optimizar plantillas PDF tras cambios en formularios/incisos.

---

Si entendiste, en este nuevo contexto deberías:

* Partir de que todo lo anterior está implementado.
* Tener presentes los controladores y utilidades existentes.
* Saber que `utilities.js` ya tiene el cifrado reversible listo para usar.
* Continuar desde la implementación de sesiones y luego el rol Tratador.

---