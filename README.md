# Estacionamiento App

Este proyecto es una aplicación de administración de estacionamiento que permite registrar la entrada y salida de vehículos, calcular tarifas, y generar reportes. La aplicación está construida con React para el frontend y Node.js/Express para el backend, y utiliza MongoDB Atlas como base de datos.

## Requisitos Previos

- [Node.js](https://nodejs.org/) y npm instalados en tu sistema.
- Cuenta en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) con un cluster configurado.


## Configuración de la Base de Datos

1. Crea una base de datos en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Crea un usuario de base de datos y configura la IP de acceso.
3. Obtén la URI de conexión a MongoDB Atlas (por ejemplo: `mongodb+srv://<usuario>:<contraseña>@<cluster>.mongodb.net/estacionamiento`).

## Configuración del Backend

1. Abre el archivo `server.js` en la carpeta `Backend`.
2. Sustituye la URI de MongoDB en la función `mongoose.connect()` con la URI de conexión de tu cluster de MongoDB Atlas.

## Instalación y Ejecución

### 1. Clonar el Repositorio

```bash
git clone https://github.com/tu-usuario/estacionamiento-app.git
cd estacionamiento-app
```
## Instalar Dependencias del Backend

cd Backend
npm install
El backend debería iniciar en http://localhost:4000.

## Iniciar el Servidor del Backend

En la carpeta Backend, ejecuta:

node server.js

## Instalar Dependencias del Frontend

cd ../Frontend
npm install

## Instalar Dependencias del Frontend

En la carpeta Frontend, ejecuta:
npm start