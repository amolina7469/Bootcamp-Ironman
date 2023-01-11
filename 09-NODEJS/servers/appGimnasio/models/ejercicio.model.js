const getAll = () =>{
  return db.query('select * from ejercicios');
};

const getById = (pId) =>{
  return db.query('select * from ejercicios where id = ?', [pId]);
};

module.exports = {
  getAll,
  getById
}