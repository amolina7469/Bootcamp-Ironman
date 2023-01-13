const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { checkToken } = require('../../helpers/middlewares');
const { createToken } = require('../../helpers/utils');


const { create, getByEmail } = require('../../models/usuario.model');

router.get('/profile', checkToken, (req, res) => {
  res.json(req.user);
});

router.post('/registro', async (req, res) => {
  // Encriptamos la password
  req.body.password = bcrypt.hashSync(req.body.password, 8);
  try {
    // Dentro de req.body rercibo todos los datos del nuevo usuario
    const [result] = await create(req.body);
    res.json(result);
  } catch (err) {
    res.json({ fatal: err.message })
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const [result] = await getByEmail(email);
  // si existe email result es un array con 1 usuario
  // si no existe result es un array vacio
  if (result.length === 0) {
    return res.json({ fatal: 'Error en email y/o contraseña' });
  }
  //Recupero el usuario
  const usuario = result[0];
  const iguales = bcrypt.compareSync(password, usuario.password);
  if (!iguales) {
    return res.json({ fatal: 'Error en email y/o contraseña' });
  }
  res.json({
    success: 'Login correcto',
    token: createToken(usuario)
  });
});

module.exports = router;