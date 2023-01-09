const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/info', (req, res)=>{
  res.send('Recuperamos la info de la página');
});

router.post('/formulario', (req, res) => {
  res.send('Actualizo el formulario')
})

module.exports = router;
