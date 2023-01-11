const router = require('express').Router();

router.use('/clientes', require('./api/clientes'));

router.use('/profesores', require('./api/profesores'));

router.use('/ejercicios', require('./api/ejercicios'));

module.exports = router;