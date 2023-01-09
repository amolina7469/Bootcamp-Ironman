const router = require('express').Router();

router.get('/',(req, res)=>{
res.send('Recuperamos todos los clientes de la API')
});

module.exports = router;

