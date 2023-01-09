const router = require('express').Router();

router.post('/create', (req, res) => {
  res.send('Creo un cliente')
})

router.patch('/update',(req, res) => {
  res.send('Actualizo el cliente');
});

router.delete('/', (req, res) =>{
  res.send('Borro un cliente');
})


module.exports = router;