const jwt = require('jsonwebtoken');
const daysjs = require('dayjs');

const { getById } = require('../models/usuario.model');

const checkToken = async (req, res, next) => {
  // 1- Comprobar si la petición incluye el token
  if (!req.headers['authorization']) {
    return res.json({ fatal: 'Debes incluir la cabecera de autorización' })
  }
  // 2- Comprobar si el token es correcto
  const token = req.headers['authorization'];
  let obj;
  try {
    obj = jwt.verify(token, process.env.SECRET_KEY);
  } catch (err) {
    return res.json({ fatal: 'El token es incorrecto' });
  }
  // 3- Comprobar si el token está caducado (Opcional)
  if (daysjs().unix() > obj.exp) {
    return res.json({ fatal: 'El token está caducado' });
  }
  // TODO: Rescatar el usuario logado
  // El objeto obtenido a través del token tiene las claves: user_id, user_role, exp,   iat
  const [result] = await getById(obj.user_id);
  req.user = result[0]; // si el usuario pasa por el middleware ya podremos acceder al usuario loogado desde cliente.js y profesore.js con req.user
  next();
}


const checkAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    res.json({ fatal: 'No eres administrador' })
  }
  next();
}

// middleware con parámetros
const checkRole = (role) => { //ámbito superior con parámetros
  return (req, res, next) => { // retorno la función
    if (role === req.user.role) {
      return res.json({ fatal: 'No eres administrador' })
    }
    next();
  }
}


module.exports = {
  checkToken,
  checkAdmin,
  checkRole
}
