const router = require('express').Router();


const { getAll, getById, create, update, deleteById} = require('../../models/profesor.model')

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
      return res.json({ fatal: 'No existe el profesor con es ID' });
    }
      res.json(result[0]);
    
  }catch (err) {
    res.json(err.message);
  }
});

router.post('/', async (req, res)=>{
  // res.send('prueba post profesores')
  try {
    const [result] = await create(req.body);
    const [profesor] = await getById(result.insertId);
    res.json(profesor[0]);
  } catch (err) {
    res.json({ fatal: err.message });
  }
});

router.put('/:profesorId', async (req, res)=>{
  // res.send('Put de profesores')
  const { profesorId } = req.params;
  try {
    const [result] = await update(profesorId, req.body);
    res.json(result);
  } catch (err) {
    res.json({ fatal: err.message });
  }
});

router.delete('/:profesorId', async (req, res)=>{
  const { profesorId } = req.params;
  try {
    const [result] = await deleteById(profesorId);
    res.json(result);
  } catch(err) {
    res.json({ fatal: err.message });
  }
});

module.exports = router;