const getAll = () => {
  return db.query('select * from clientes');
};

const getById = (clienteId) => {
  return db.query('select * from clientes where id = ?', [clienteId]);
};

const getByEdad = (edadCliente) => {
  return db.query('select * from clientes where edad > ?', [edadCliente]);
};

// La función create recibe un único objeto con las claves especificadas en los parámetros de la función

const create = ({ nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni }) => {
  return db.query(
    'insert into clientes (nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni) values (?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni]
  );
};

const update = (clienteId, { nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni }) => {
  return db.query(
    'update clientes set nombre = ?, apellidos = ?, direccion = ?, email = ?, edad = ?,genero = ?, cuota = ?, fecha_nacimiento = ?, dni = ? where id = ?', [nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni, clienteId]
  );
};

const deleteById = (clienteId) => {
  return db.query('delete from clientes where id = ?', [clienteId]);
};

const getByProfesor = (profesorId) => {
  return db.query('select * from clientes where profesor_id = ?', [profesorId]);
};


module.exports = {
  getAll,
  getById,
  getByEdad,
  create,
  update,
  deleteById,
  getByProfesor
};