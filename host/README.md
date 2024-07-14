# HOST

Esta aplicación actúa como el hub central del microfrontend, comunicándose con las aplicaciones a través de eventos personalizados. Cuando se hace clic en el botón `CAMBIAR POKÉMON`, las aplicaciones reciben la señal para actualizar los datos de los Pokémon.

## Uso

1. Para iniciar la aplicación en modo de desarrollo:

```bash
# Cambiar a la ruta principal
cd ..

# Cambiar a la ruta del Host
cd host

# Iniciar Host
npm run dev
```

Esto iniciará la aplicación en http://localhost:3000 por defecto.

2. Para compilar y ejecutar la aplicación en modo de producción:

```bash
# Cambiar a la ruta principal
cd ..

# Cambiar a la ruta del Host
cd host

# Iniciar Host
npm start
```

## Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, ver el archivo LICENSE.
