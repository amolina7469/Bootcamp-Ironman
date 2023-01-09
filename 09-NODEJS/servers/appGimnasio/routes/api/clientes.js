const router = require('express').Router();

const { getAll, getById, getByEdad } = require('../../models/cliente.model');

// /api/clientes?page=4&limit10
router.get('/then-catch', (req, res)=>{
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
    .then (([result, fileds])=>{ 
      res.json(result);
    })
    .catch((err) => {
      res.json(err.message);
    });
});

//? OPCIÓN 2: promesa con async await
router.get('/async-await', async (req, res)=> {
  try {
    const [result, fields] = await db.query('select * from clientes');
    res.json(result);
  }catch (err) {
    res.json(err.message);
  }
});

//? OPCIÓN 3: Opción chachi
router.get('/', async (req, res)=> {
  try{
    const [result] = await getAll();
    res.json(result);
  }catch (err){
    res.json(err.message);
  }
});


router.get('/:clienteId', async (req, res)=>{
  //select * from clientes where id=XXXXX
  const { clienteId } = req.params; //Destructuring
  try {
    const [result] =  await getById(clienteId);
    res.json(result[0]);
  }catch (err){
    res.json(err.message);
  }
});

router.get('/edad/:edadCliente', async (req, res)=>{
  const { edadCliente } = req.params;
  try{
    const [result] = await getByEdad(edadCliente);
    res.json(result);
  }catch(err){
    res.json({fatal:err.message});
  }
});

router.post('/', (req, res)=>{
  console.log(req.body);
  const { nombre, edad} = req.body;
  console.log(nombre, edad);
  res.send('Crea un cliente');
});

router.put('/:clienteId', (req, res)=>{
  const { clienteId } = req.params; //Destructuring
  console.log(clienteId);
  res.send('Edita un cliente');
});

router.delete('/:clienteId', (req, res)=>{
  const { clienteId } = req.params;
  
  res.send('Elimina un cliente');
});

module.exports = router;

