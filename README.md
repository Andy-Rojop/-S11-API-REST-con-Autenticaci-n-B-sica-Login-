#  Proyecto: API REST con Autenticación Básica y Login en Frontend

Este proyecto consiste en una API REST creada con **Node.js + Express** que permite realizar autenticación básica de usuarios.  
El frontend está hecho con **HTML, JavaScript y Bootstrap 5**, e incluye un formulario de inicio de sesión con alertas dinámicas.

---
## clonar el repositorio
```
git clone <url>
``` 

## Instalación y ejecución
```
/backend
npm install
npm start
```

## Ejecución del frontend
- click derecho a index.html y `Open with Live Server`

## Características

### 🔹 Backend (API REST)
- Endpoint `POST /login` para validar credenciales.
- Credenciales simples (hardcoded en el código).
- Devuelve una respuesta JSON con:
  - Mensaje de éxito o error.
  - Token simulado (en caso de login exitoso).

### 🔹 Frontend
- Formulario con campos de **correo** y **contraseña**.
- Validación y envío de datos al backend con `fetch()`.
- Alertas de **Bootstrap 5** para mostrar mensajes (éxito o error).
- Las alertas desaparecen automáticamente después de 3 segundos.
- Al iniciar sesión correctamente, el token se guarda en `localStorage`.

---

##  Estructura del Proyecto

```
login-api/
│
├── backend/
│ ├── package.json
│ └── server.js
│
└── frontend/
├── index.html
└── script.js
```

