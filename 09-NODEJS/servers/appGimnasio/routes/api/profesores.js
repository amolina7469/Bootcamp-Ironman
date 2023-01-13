const router = require('express').Router();


const { getByProfesor } = require('../../models/cliente.model');
const { getAll, getById, create, update, deleteById, getNames } = require('../../models/profesor.model')

router.get('/', async (req, res) => {
  try {
    const [result] = await getAll();
    res.json(result);
  } catch (err) {
    res.json(err.message);
  }
});

router.get('/clientes', async (req, res) => {
  const [profesores] = await getAll();
  for (let profesor of profesores) {
    const [arrClientes] = await getByProfesor(profesor.id);
    profesor.clientes = arrClientes;
  }
  res.json(profesores);

});

// router.get('/nombres', async (req, res) => {
//   const [profesores] = await getAll();
//   const arrNombres = [];
//   for (let profesor of profesores) {
//     arrNombres.push(profesor.nombre);
//   }
//   res.json(arrNombres);
// });

router.get('/nombres', async (req, res) => {
  const [profesores] = await getAll();
  const arrNombres = profesores.map((profesor) => {
    return profesor.nombre;
  });//const arrNombres = profesores.map(p => p.nombre); Se puede simplificar así
  res.json(arrNombres);// res.json(profesores.map(p => p.nombre)); O directamente devolver el map
});


// router.get('/nombres', async (req, res) => {
//   const [profesores] = await getNames();
//   const arrNombres = [];
//   for (let profesor of profesores) {
//     arrNombres.push(profesor.nombre);
//   }
//   res.json(arrNombres);
// });


router.get('/:profesorId', async (req, res) => {
  const { profesorId } = req.params;
  try {
    const [result] = await getById(profesorId);
    if (result.length === 0) {
      return res.json({ fatal: 'No existe el profesor con es ID' });
    }
    res.json(result[0]);
  } catch (err) {
    res.json(err.message);
  }
});


router.post('/', async (req, res) => {
  // res.send('prueba post profesores')
  try {
    const [result] = await create(req.body);
    const [profesor] = await getById(result.insertId);
    res.json(profesor[0]);
  } catch (err) {
    res.json({ fatal: err.message });
  }
});

router.put('/:profesorId', async (req, res) => {
  // res.send('Put de profesores')
  const { profesorId } = req.params;
  try {
    const [result] = await update(profesorId, req.body);
    res.json(result);
  } catch (err) {
    res.json({ fatal: err.message });
  }
});

router.delete('/:profesorId', async (req, res) => {
  const { profesorId } = req.params;
  try {
    const [result] = await deleteById(profesorId);
    res.json(result);
  } catch (err) {
    res.json({ fatal: err.message });
  }
});

module.exports = router;