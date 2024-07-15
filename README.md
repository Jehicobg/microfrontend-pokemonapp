# Microfrontend Pokémon App

Este repositorio contiene un proyecto microfrontend para una aplicación de Pokémon, incluye un host y varias aplicaciones remotas.

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

Los componentes compartidos están organizados en el directorio `shared-components/`.

Estos componentes están diseñados para facilitar la reutilización y mantener una consistencia visual en todas las aplicaciones remotas. Además, este paquete incluye el hook usePokemon, el cual realiza peticiones a la API de `https://pokeapi.co/` para obtener datos de Pokémon. La estructura del directorio shared-components/ es la siguiente:

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

Estos componentes han sido compartidos a través de un paquete npm, link del paquete: https://www.npmjs.com/package/shared-components-challenge

## Tecnologías Utilizadas

- **Frontend**: ReactJS v18, Next.js v13.5.6
- **Estilos**: CSS Module
- **Comunicación entre Microfrontends**: Custom Events para comunicación entre microfrontends, además de Module Federation para Next.js
- **Pruebas**: Jest para pruebas unitarias con una cobertura del 90%
- **Despliegue**: Vercel para despliegue automático

## Requisitos previos

Antes de comenzar, asegúrate de que tengas instalados los siguientes requisitos:

- Node.js (versión 20.15.1LTS o superior)

Puedes verificar si tienes instalados estos requisitos ejecutando los siguientes comandos en tu terminal:

```bash
# Node.js
node --v
```

## Instalación y Uso

1. **Clonar el repositorio:**

   ```bash
    # Clonar el repositorio
    git clone https://github.com/Jehicobg/microfrontend-pokemonapp.git

    # Cambiar al directorio del proyecto clonado
    cd microfrontend-pokemonapp
   ```

2. **Instalar Dependencias:**
   Para cada una de las aplicaciones (host, app1, app2, app3) navega a cada directorio y ejecuta npm install para instalar sus dependencias:

   ```bash
   # Para el proyecto Host
   # Cambiar a la ruta del host
   cd host

   # Instalar los paquetes
   npm install
   ```

   ```bash
   # Para la aplicación App1
   # Cambiar a la ruta principal
   cd ..

   # Cambiar a la ruta APP1
   cd app1

   # Instalar los paquetes
   npm install

   ```

   ```bash
   # Para la aplicación App2
   # Cambiar a la ruta principal
   cd ..

   # Cambiar a la ruta APP2
   cd app2

   # Instalar los paquetes
   npm install
   ```

   ```bash
   # Para la aplicación App3
   # Cambiar a la ruta principal
   cd ..

   # Cambiar a la ruta APP3
   cd app3

   # Instalar los paquetes
   npm install
   ```

Este paso asegura que cada aplicación tenga instaladas sus dependencias necesarias.

3. **Ejecución local del proyecto:**
   Cada aplicación debe ser ejecutada de forma individual de la siguiente forma.

- **Host**

  ```bash
  # Cambiar a la ruta principal
  cd ..

  # Cambiar a la ruta del host
  cd host

  # Ejecutar host
  npm run dev
  ```

  Esto iniciará el servidor de desarrollo en http://localhost:3000 por defecto.

- **APP1**

  ```bash
  # Cambiar a la ruta principal
  cd ..

  # Cambiar a la ruta APP1
  cd app1

  # Ejecutar APP1
  npm run dev
  ```

  Esto iniciará el servidor de desarrollo en http://localhost:3001 por defecto.

- **APP2**

  ```bash
  # Cambiar a la ruta principal
  cd ..

  # Cambiar a la ruta APP2
  cd app2

  # Ejcutar APP2
  npm run dev
  ```

  Esto iniciará el servidor de desarrollo en http://localhost:3002 por defecto.

- **APP3**

  ```bash
  # Cambiar a la ruta principal
  cd ..

  # Cambiar a la ruta APP3
  cd app1

  # Ejcutar APP3
  npm run dev
  ```

  Esto iniciará el servidor de desarrollo en http://localhost:3003 por defecto.

4. **Ejecutar el proyecto para producción:**
   Cada aplicación debe ser ejecutada de forma individual de la siguiente forma.

- **Host**

  ```bash
  # Cambiar a la ruta principal
  cd ..

  # Cambiar a la ruta del Host
  cd host

  # Iniciar Host
  npm start
  ```

- **APP1**

  ```bash
  # Cambiar a la ruta principal
  cd ..

  # Cambiar a la ruta APP1
  cd app1

  # Iniciar APP1
  npm start
  ```

- **APP2**

  ```bash
  # Cambiar a la ruta principal
  cd ..

  # Cambiar a la ruta APP2
  cd app2

  # Iniciar APP2
  npm start
  ```

- **APP3**

  ```bash
  # Cambiar a la ruta principal
  cd ..

  # Cambiar a la ruta APP2
  cd app1

  # Iniciar APP3
  npm start
  ```

**Nota:** Al ejecutar los proyectos en modo producción, es importante considerar que Next.js utiliza el puerto 3000 por defecto. Si deseas ejecutar todas las aplicaciones a la vez en diferentes puertos, debes modificar el atributo `scripts --> start` en cada `package.json` de la siguiente manera:

```bash
"scripts": {
    "start": "npm run build && next start --p PUERTO",
  }
```

Asegúrate de reemplazar `PUERTO` con el número de puerto deseado donde deseas ejecutar la aplicación.

## Comunicación entre Microfrontends

Este proyecto utiliza eventos personalizados para la comunicación entre microfrontends. Cada aplicación remota puede enviar y recibir eventos para actualizar el estado o sincronizar acciones con el Host u otras aplicaciones.

## Funcionamiento

El Host se comunica con las aplicaciones remotas. Cuando se hace clic en el botón 'CAMBIAR POKÉMON', el Host envía un evento personalizado (custom event) que las aplicaciones escuchan. Al recibir este evento, las aplicaciones realizan una nueva solicitud a la API para actualizar su contenido con los nuevos recursos.

## Despliegue

Este proyecto está configurado para el despliegue automático en Vercel mediante el archivo `vercel-deploy.yml`. Cualquier cambio realizado en la rama principal (main) se desplegará automáticamente en Vercel.

Link del proyecto publicado: https://host-woad.vercel.app/

## Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, ver el archivo LICENSE.
