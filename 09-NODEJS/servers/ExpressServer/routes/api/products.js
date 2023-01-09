const router = require('express').Router();

router.post('/new',(req, res)=>{
  res.send('POST desde api/products/new');
});

router.delete('/delete',(req, res)=>{
  res.send('DELETE desde api/products/new');
});
module.exports = router;