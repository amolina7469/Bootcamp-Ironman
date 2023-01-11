const getAll = () => {
  return db.query('select * from profesores');
};

const getById = (profesorId) => {
  return db.query ('select * from profesores where id = ? ', [profesorId]);
};

const create = ({ nombre, experiencia }) => {
  return db.query(
    'insert into profesores (nombre, experiencia) values (?, ?)', 
    [nombre, experiencia]
  );
};

const update = (profesorId, { nombre, experiencia }) => {
  return db.query(
    'update profesores set nombre = ?, experiencia = ? where id = ?', 
    [nombre, experiencia, profesorId]
  );
};

const deleteById = (profesorId) => {
  return db.query('delete from profesores where id = ?',
  [profesorId]);
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById
};