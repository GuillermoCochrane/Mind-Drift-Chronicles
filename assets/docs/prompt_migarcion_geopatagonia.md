## **Prompt de migración para continuar el desarrollo de la app de gestión (Geopatagonia)**

**Contexto general:**
Estoy trabajando en una aplicación web desarrollada bajo el paradigma **MVC**, usando **Node.js + Express + Sequelize + MySQL**, con vistas en **EJS**. El proyecto se llama **Geopatagonia** y gestiona el ciclo de vida de "originaciones" (reportes iniciales), sus "observaciones/PAC" (planes de acción correctiva) y acciones asociadas, con manejo de sesiones, roles y notificaciones por correo electrónico.

El sistema maneja **5 roles predefinidos**:

1. **Ejecutor** → encargado de ejecutar acciones asignadas.
2. **Originador** → reporta originaciones y crea observaciones/PAC.
3. **Tratador** → gestiona el tratamiento de las observaciones/PAC.
4. **Observador** → revisa y valida las originaciones.
5. **Administrador** → gestiona datos básicos y configuración general (rol agregado por mí).

Actualmente el foco está en cerrar completamente el rol **Originador**, implementar login/logout y luego comenzar el desarrollo del rol **Tratador**.

---

### **Estado actual del desarrollo**

### **1. Estado del rol Originador**

Funcionalidades implementadas y probadas:

#### **Main Page**

* [x] Crear originaciones.
* [x] Acceso y edición de originaciones, con detalle de observaciones/PACs.
* [x] Crear observaciones/PAC asociadas.
* [x] Eliminar originaciones sin observaciones/PAC de forma automatica al cerrar el modal.
* [x] Notificación automática por email de la originacion al crear la primera observación/PAC de la misma.
* [x] Notificación automática por email al responsable asignado de una observación/PAC.
* [x] Listado de observaciones/PAC incluyendo datos de su originación padre.
* [x] Filtro de observaciones/PAC por múltiples campos (incluyendo formulario e incisoc con carga dinámica en frontend vía JS).
* [x] En la tabla de observaciones/PAC: enlaces a visualización, exportación PDF, agregar tareas y cambio de responsable.

#### **Detalle de observaciones/PAC**

* [x] Vista con datos de la originación padre, observaciones/PAC y lista de acciones.
* [x] Exportación de datos en PDF (faltan retoques de plantilla).
* [x] Creación de tareas desde la vista de detalle.
* [x] Cambio de responsable desde la vista de detalle.

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

### **Últimos cambios relevantes**

1. **Notificaciones por email**:

   * Modularización de `mailUtilities` para crear funciones reutilizables (`pacNotificationData`, `originacionNotificationData`).
   * Ahora se incluye opcionalmente en la notificación de PAC los datos de la originación.

2. **Filtrado avanzado**:

   * En la sección de observaciones/PAC, ahora se pueden filtrar por **formulario** e **inciso**, cargando dinámicamente los incisos según el formulario seleccionado vía JavaScript en el frontend.

3. **Optimización de controladores**:

   * Refactor de `registerCreationHandler` para delegar responsabilidades en funciones especializadas y mantenerlo limpio.

---

### **4. Próximos pasos**

1. Comenzar desarrollo del rol **Tratador** tras finalizar autenticación.
2. Optimizar código existente y modularizar funciones reutilizables.

---

### **Archivos clave a cargar en este contexto (en este orden)**

1. `package.json` y `app.js` → para entender dependencias y configuración inicial.
2. Routers y controladores del **rol Originador** (`originacionesRouter.js`, `originacionesController.js`).
3. `originacionUtilities.js` y `mailUtilities.js` (con las últimas funciones de notificación).
4. Routers y controladores de **usuarios** (`usuariosRouter.js`, `usuarioController.js`, `usuarioUtilities.js`, `loginValidations.js`).
5. Cualquier archivo de utilidades generales (`utilities.js`) o modelos relevantes (`Originacion.js`, `ObservacionPAC.js`, `Usuario.js`).

---

**Instrucción para el nuevo contexto:**
A partir de este prompt y los archivos que iré cargando, tu tarea será **retomar el desarrollo en el punto exacto en que estaba**, sin reexplicar lo ya implementado, y ayudarme a:

1. Planificar e implementar las funcionalidades del **rol Tratador** según el PDF original del proyecto.
2. Mantener buenas prácticas de modularización, escalabilidad y mantenibilidad.
3. Tener presentes los controladores y utilidades existentes.
4. Saber que `utilities.js` ya tiene el cifrado reversible listo para usar.

---