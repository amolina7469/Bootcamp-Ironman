const { getAll, create, deleteById, getById, update } = require('../models/cliente.model');
const dayjs = require('dayjs')
const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    const [clientes] = await getAll();
    //Formatear fechas de nacimiento
    for (let cliente of clientes) {
      cliente.fecha_nacimiento = dayjs(cliente.fecha_nacimiento).format('DD-MM-YYYY');
      cliente.edad = dayjs().diff(cliente.fecha_nacimiento, 'years');
    }
    res.render('clientes/index', {
      clientes
    });
  } catch (err) {
    res.send(err.message);
  }

});

router.get('/new', (req, res) => {
  res.render('clientes/form');
});

router.get('/edit/:clienteId', async (req, res) => {
  const { clienteId } = req.params;
  const [cliente] = await getById(clienteId);
  cliente[0].fecha_nacimiento = dayjs(cliente[0].fecha_nacimiento).format('YYYY-MM-DD');
  res.render('clientes/formEdit', {
    cliente: cliente[0]
  });
});

router.get('/delete/:clienteId', async (req, res) => {
  const { clienteId } = req.params;
  const [result] = await deleteById(clienteId)
});

router.post('/create', async (req, res) => {
  const [result] = await create(req.body);
  res.redirect('/clientes');
});

router.post('/update', async (req, res) => {
  await update(req.body.clienteId, req.body);
  res.redirect('/clientes');
});


module.exports = router;