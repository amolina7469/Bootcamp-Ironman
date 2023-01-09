const router = require('express').Router();

const { getAll, getById } = require('../../models/profesor.model')

router.get('/', async (req, res)=> {
  try{
    const [result] = await getAll();
    res.json(result);
  }catch (err){
    res.json(err.message);
  }
});

router.get('/:profesorId', async (req, res)=>{
  const { profesorId } = req.params;
  
  try{
    const [result] = await getById(profesorId);
    if(result.length === 0){
      return res.json({ fatal: 'No existe el profesor con es ID'});
    }
      res.json(result[0]);
    
  }catch (err) {
    res.json(err.message);
  }
});

module.exports = router;