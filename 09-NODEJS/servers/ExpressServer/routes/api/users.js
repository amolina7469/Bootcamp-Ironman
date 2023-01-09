const router = require('express').Router();

router.put('/edit/profile',(req, res)=>{
res.send('PUT desde users/edit/profile')
});

module.exports = router;


