const router = require('express').Router();

const { json } = require('express');
const { getAll, getById, getByEdad, create, update, deleteById, getByPage, count } = require('../../models/cliente.model');

// /api/clientes?page=4&limit10
router.get('/then-catch', (req, res) => {
  // const { page = 1, limit = 10 } = req.query;
  // console.log(page, limit);
  //? Como hacer un -select * from clientes-
  db.query('select * from clientes')
    //? 
    // .then((result) => {
    // console.log(result); //result es un array de 2 posiciones
    // console.log(result[0]);// la posicion [0] son los datos
    // console.log(result[1]); // la posición [1] es la definición de los campos
    // console.log(result[0][0].nombre);
    // res.json(result[0]);
    // })

    //? OPCIÓN 1: promesa con then catch
    .then(([result, fileds]) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err.message);
    });
});

//? OPCIÓN 2: promesa con async await
router.get('/async-await', async (req, res) => {
  try {
    const [result, fields] = await db.query('select * from clientes');
    res.json(result);
  } catch (err) {
    res.json(err.message);
  }
});

//? OPCIÓN 3: Opción chachi
router.get('/', async (req, res) => {
  const { limit = 10, page = 1 } = req.query;
  try {
    const [clientes] = await getByPage(page, limit);//recupero los clientes por pagina
    const [num] = await count(); //devuelve un array con un objeto [{count:95}]
    const total = num[0].count;//accedemos a la propiedad count del primer registro[0]

    res.json({
      info: {
        current_page: parseInt(page),
        count: total,
        pages: Math.ceil(total / limit)
      },
      results: clientes
    });
  } catch (err) {
    res.json(err.message);
  }
});


router.get('/:clienteId', async (req, res) => {
  //select * from clientes where id=XXXXX
  const { clienteId } = req.params; //Destructuring
  try {
    const [result] = await getById(clienteId);
    res.json(result[0]);
  } catch (err) {
    res.json(err.message);
  }
});

router.get('/edad/:edadCliente', async (req, res) => {
  const { edadCliente } = req.params;
  try {
    const [result] = await getByEdad(edadCliente);
    res.json(result);
  } catch (err) {
    res.json({ fatal: err.message });
  }
});


router.post('/', async (req, res) => {
  try {
    //Insertamos el cliente en la BD
    const [result] = await create(req.body);
    //Recupero de la base de datos el nuevo cliente creado
    const [cliente] = await getById(result.insertId);
    res.json(cliente[0]);
  } catch (err) {
    res.json({ fatal: err.message });
  }
});


router.put('/:clienteId', async (req, res) => {
  const { clienteId } = req.params; //Destructuring
  try {
    const [result] = await update(clienteId, req.body);
    res.json(result);
  } catch (err) {
    res.json({ fatal: err.message });
  }
});


router.delete('/:clienteId', async (req, res) => {
  const { clienteId } = req.params;
  try {
    const [result] = await deleteById(clienteId);
    res.json(result);
  } catch (err) {
    res.json({ fatal: err.message });
  }
});

module.exports = router;

