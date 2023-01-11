## Profesores

- Las 2 urls tienen que funcionar
- Demtro del fichero api.js hay que hacer el enlace con el fichero profesores.js
- Todas las queries sobre la tabla profesores irán en el fichero profesor.mode.js

### GET /api/profesores

- Recupera todos los profesores de la BD
- Función getAll

### GET /api/profesores/IDPROFESORES

- Recupera un único profesor de la BD
- Función getById
- ¿Qué pasa si el ID no existe?
  - ¿Qué podemos hacer para resolverlo?


### GET /api/clientes/edad/56

- Recupera todos los clientes cuya edad es mayor que el valor recibido por la URL
  - Que la url funcione
  - Recuperar el valor de la edad
  - Que query lanzamos?
  - Dentro del módelo generamos el método que lanza la query
  - Ejecutamos el método dentro del manejador de la ruta

### POST /api/profesores

- Inserta un profesor en la base de datos
  - Que la url funcione
  - Determinar en el fichero .rest que body vamos a mandar
  - Dentro del módelo de profesores crear el método que realice el insert
    - ¿Cuántos parámetros le pasasmos?
  - Ejecutar dicho método -> Recuperar datos de la promesa y responder con el nuevo profesor
  - Gestión de errores


### PUT /api/profesores/PROFESORID

- Actualizaun profesor en la base de datos
  - Que la url funcione
  - ¿ Cómo lanzamos la petición? -> body en el .rest
  - Método de actualización en el módelo profesores (Número de párametros)
  - Ejecución del método y repuesta