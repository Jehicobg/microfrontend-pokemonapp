# Microfrontend Pokémon App

Este repositorio contiene un proyecto de microfrontend para una aplicación de Pokémon, que incluye un host y varias aplicaciones remotas.

## Estructura del Proyecto

El proyecto está estructurado de la siguiente manera:

- **Host (`host`)**: Aplicación principal que integra y muestra las aplicaciones remotas.
- **App1 (`app1`), App2 (`app2`), App3 (`app3`)**: Aplicaciones remotas que consumen la API de Pokémon y muestran información específica.
- **Shared Components (`shared-components`)**: Paquete npm de componentes compartidos entre las aplicaciones.

## Estructura del proyecto

```bash
microfrontend-pokemonapp/
│
├── host/                      <-- Aplicación Host
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│   ├── package.json
│   ├── .env                    <-- Variables de entorno para el Host
│   └── ...
│
├── app1/                      <-- Aplicación Remota 1
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│   ├── package.json
│   ├── .env                    <-- Variables de entorno para App1
│   └── ...
│
├── app2/                      <-- Aplicación Remota 2
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│   ├── package.json
│   ├── .env                    <-- Variables de entorno para App2
│   └── ...
│
├── app3                  <-- Aplicación Remota 3
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│   ├── package.json
│   ├── .env                    <-- Variables de entorno para App3
│   └── ...
│

```

### Componentes Compartidos

Los componentes compartidos están organizados en el directorio `shared-components/`. Estos componentes están diseñados para facilitar la reutilización y mantener una consistencia visual en todas las aplicaciones remotas. La estructura del directorio `shared-components/` es la siguiente:

```bash
shared-components/
│
├── node_modules/
├── src/
│ ├── Button.js
│ ├── Input.js
│ ├── Checkbox.js
│ └── ...
├── package.json
└── ...
```

Estos paquetes han sido compartidos a través de un paquete npm, link del paquete: https://www.npmjs.com/package/shared-components-challenge

## Tecnologías Utilizadas

- **Frontend**: ReactJS v18, Next.js v13.5.6
- **Estilos**: CSS Module
- **Comunicación entre Microfrontends**: Custom Events para comunicación entre microfrontends, además de Module Federation para Next.js
- **Pruebas**: Jest para pruebas unitarias con una cobertura del 90%
- **Despliegue**: Vercel para despliegue automático

## Instalación y Uso

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/tu-usuario/microfrontend-pokemonapp.git
   cd microfrontend-pokemonapp

   ```

2. **Instalar Dependencias:**
   Para cada una de las aplicaciones (host, app1, app2, app3) navega a cada directorio y ejecuta npm install para instalar sus dependencias:

   ```bash
   cd host
   npm install
   cd ../app1
   npm install
   cd ../app2
   npm install
   cd ../app3
   npm install
   ```

   Este paso asegura que cada aplicación tenga instaladas sus dependencias necesarias.

3. **Ejecutar el proyecto**
   Cada aplicacion debe ser ejecutada de forma individual de la siguiente forma:

- **Host**
  ```bash
  # Iniciar Host
  cd host
  npm run dev
  ```
  Esto iniciará el servidor de desarrollo en http://localhost:3000 por defecto.
- **APP1**
  ```bash
  # Iniciar Host
  cd app1
  npm run dev
  ```
  Esto iniciará el servidor de desarrollo en http://localhost:3001 por defecto.
- **APP2**
  ```bash
  # Iniciar Host
  cd app2
  npm run dev
  ```
  Esto iniciará el servidor de desarrollo en http://localhost:3002 por defecto.
- **APP3**
  ```bash
  # Iniciar Host
  cd app1
  npm run dev
  ```
  Esto iniciará el servidor de desarrollo en http://localhost:3003 por defecto.

## Comunicación entre Microfrontends

Este proyecto utiliza eventos personalizados para la comunicación entre microfrontends. Cada aplicación remota puede enviar y recibir eventos para actualizar el estado o sincronizar acciones con el Host u otras aplicaciones.

## Despliegue

Este proyecto está configurado para el despliegue automático en Vercel. Cualquier cambio realizado en la rama principal (main) se desplegará automáticamente en Vercel.

## Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, ver el archivo LICENSE.
