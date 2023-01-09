var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
/* POST users listing */
router.post('/new',(req, res)=>{
  res.send('Creación de usuario');
});
/* PUT users listing */
router.put('/edit/profile', (req, res)=>{
  res.send('Edito el usuario');
})

module.exports = router;
