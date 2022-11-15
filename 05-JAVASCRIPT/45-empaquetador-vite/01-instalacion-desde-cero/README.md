# Instalar Vite desde cero

1. En la carpeta donde quieras instalar vite ejecutas el comando `npm create vite@latest`
2. Contestas todas las preguntas. 
3. Te borras todos los archivos que no quieras y te orgnizas las carpetas a tu gusto. 
4. Si no quieres crear un archivo de configuración de Vite, no cambies de posición el archivo `index.html`. déjalo en la raíz del proyecto.
5. A partir de aquí solo tienes que lanzar el servidor con `npm run dev` y empezar a funcionar.


## Cosas que aporta
* Puedes usar directamente archivos `.scss` sin compilar porque Vite se encargará de hacerlo.
* Puedes usar archivos TypeScript también que él se encarga.
* Cuando haces un `import` de otro archivo `js` o `ts` no hace falta que pongas las extensiones finales.
* Cuando haces un `import` de un paquete `npm` no hace falta que busques la ruta del archivo a importar, directamente pones por ejemplo: `import { nanoid } from 'nanoid'`
* Todos los archivos estáticos que necesites (fotos, fuentes, svg, etc) los metes en la carpeta public y para llamarlos tienes que utilizar la ruta con una barra '/'. La barra significa la carpeta public.
  
  ```html
  <img src="/imagenes/logo.jpg" alt="Logo que está en la carpeta public/imagenes">
  ```
