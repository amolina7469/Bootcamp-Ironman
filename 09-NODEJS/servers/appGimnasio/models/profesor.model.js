const getAll = () => {
  return db.query('select * from profesores');
};

const getById = (profesorId) => {
  return db.query ('select * from profesores where id = ? ', [profesorId]);
};

module.exports = {
  getAll,
  getById
};