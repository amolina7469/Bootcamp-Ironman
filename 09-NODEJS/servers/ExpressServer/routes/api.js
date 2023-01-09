const router = require('express').Router();

const apiClientsRouter = require('./api/clients');
const apiUsersRouter = require('./api/users');
const apiProductsRouter = require('./api/products')

router.use('/clients', apiClientsRouter);
router.use('/users', apiUsersRouter);
router.use('/products', apiProductsRouter);


module.exports = router;