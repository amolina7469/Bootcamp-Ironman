## Profesores

- Las 2 urls tienen que funcionar
- Demtro del fichero api.js hay que hacer el enlace con el fichero profesores.js
- Todas las queries sobre la tabla profesores irán en el fichero profesor.mode.js

### GET /api/profesores

-Recupera todos los profesores de la BD
-Función getAll

### GET /api/profesores/IDPROFESORES

-Recupera un único profesor de la BD
-Función getById
-¿Qué pasa si el ID no existe?
  -¿Qué podemos hacer para resolverlo?


### GET /api/clientes/edad/56

-Recupera todos los clientes cuya edad es mayor que el valor recibido por la URL
  - Que la url funcione
  - Recuperar el valor de la edad
  - Que query lanzamos?
  - Dentro del módelo generamos el método que lanza la query
  - Ejecutamos el método dentro del manejador de la ruta