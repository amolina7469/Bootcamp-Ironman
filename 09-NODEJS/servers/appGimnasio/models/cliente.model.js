const getAll = () => {
  return db.query('select * from clientes');
};

const getById = (clienteId) => {
  return db.query('select * from clientes where id = ?', [clienteId]);
};

const getByEdad = (edadCliente) =>{
  return db.query('select * from clientes where edad > ?', [edadCliente]);
};



module.exports = {
  getAll,
  getById,
  getByEdad
};