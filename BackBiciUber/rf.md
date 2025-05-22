# 📋 Requisitos Funcionales - Proyecto BiciUber

Este documento contiene los requisitos funcionales del sistema BiciUber, una aplicación web que permite gestionar servicios de transporte en bicicleta mediante el registro de clientes, visualización de productos y facturación.

---

## 👤 Módulo Cliente

### RF1 - Registro de Clientes
El sistema debe permitir a los usuarios registrarse mediante un formulario en el frontend (`cliente.jsx`) que se conecta con el endpoint del backend (`cliente.py`).

### RF2 - Inicio de Sesión
El sistema debe permitir a los clientes iniciar sesión con su cédula y contraseña (o correo si se implementa más adelante).

### RF3 - Actualización de Información del Cliente
El cliente debe poder actualizar su información personal mediante un formulario y una ruta `PUT` en el backend.

### RF4 - Eliminación de Cliente
El sistema debe permitir eliminar un cliente desde el backend (usado por el administrador).

---

## 📦 Módulo Productos

### RF5 - Listado de Productos
El sistema debe mostrar una lista de productos/servicios (por ejemplo: tipos de transporte o accesorios), cargados desde el backend y mostrados en `productos.jsx`.

### RF6 - Consulta de Detalles
El cliente debe poder ver los detalles de un producto (si se implementa).

---

## 🧾 Módulo Factura

### RF7 - Creación de Facturas
El sistema debe generar una factura cuando se solicite un servicio. Esto se gestiona desde el backend en `factura.py`.

### RF8 - Visualización de Facturas
El cliente debe poder ver el historial de sus facturas desde el frontend (`factura.jsx`).

---

## 🌐 Módulo Web y Conexión

### RF9 - Comunicación Frontend/Backend
El frontend en React debe comunicarse con FastAPI usando Axios, enviando datos de formularios a endpoints definidos en `cliente.py`, `factura.py`, etc.

### RF10 - Conexión a Base de Datos
El sistema debe almacenar toda la información en una base de datos MySQL usando la conexión definida en `Clever_MySQL_conn.py`.

---

## 🛡️ Módulo de Seguridad

### RF11 - Validación de Formularios
El sistema debe validar que todos los campos estén correctamente diligenciados antes de enviar la información al backend.

### RF12 - Manejo de Errores
El sistema debe mostrar mensajes claros cuando haya errores al conectarse con el backend o fallas en el formulario.

---

## 🎨 Módulo de Interfaz

### RF13 - Diseño Responsivo
La interfaz debe adaptarse a distintos tamaños de pantalla usando CSS.

### RF14 - Página “Quiénes Somos”
El sistema debe mostrar una página informativa con el contenido institucional del proyecto (`Quienessomos.jsx`).

