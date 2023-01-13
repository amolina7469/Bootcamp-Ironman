const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('index', {
    mensaje: 'Este es mi mensaje',
    animales: ['perro', 'gato', 'loro', 'canguro', 'galartija']
  });
});

module.exports = router;