const router = require('express').Router();

router.put('/edit', (req, res) => {
  res.send('Edito un producto')
})

router.get('/all', (req, res) =>{
  res.send('Obtengo todos los productos');
})


module.exports = router;