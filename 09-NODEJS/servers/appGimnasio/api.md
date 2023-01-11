## Api clientes

- GET /api/clientes
  - Recupera un array con todos los clientes de la BD

- GET /api/clientes/IDCLIENTE
  - Recupera *un único* cliente a partir de su ID

- GET /api/clientes/EDADCLIENTE
  - Recupera todos los datos de los clientes mayores de una edad determinada

-POST /api/clientes
  - Inserta un nuevo cliente
  - En el body de la petición debemos pasar un objeto con las claves: nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni

-PUT /api/clientes/IDCLIENTE
  - Actualiza el cliente especificado en la URL
  - En el body de la petición debemos pasar un objeto con las claves: nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni

- DELETE /api/clientes/IDCLIENTE
  - Borra el cliente especificado en la url


## Api Profesores

- GET /api/profesores
  - Recupera un array con todos los clientes de la BD

- GET /api/profesores/IDPROFESORES
  - Recupera *un único* profesor a partir de su ID. Si no existe el ID nos devuelve un error

- POST /api/profesores
  - Inserta un nuevo profesor
  - En el body debemos pasar un objeto con las claves: nombre y experiencia