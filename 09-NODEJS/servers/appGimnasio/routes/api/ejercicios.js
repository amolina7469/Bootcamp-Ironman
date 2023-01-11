const router = require('express').Router();

const { getAll, getById } = require('../../models/ejercicio.model');

router.get('/', async (req, res)=>{
  const [ result ] = await getAll();
  try{
    res.json(result);
  } catch (err){
    res.json({fatal: err.mesagge})
  }
});

router.get('/:ejercicioId', async (req, res)=>{
  const {ejercicioId} = req.params;
  try{
    const [ result ] = await getById(ejercicioId);
    if(result.length === 0){
      return res.json({fatal: `No existe ejercicio con Id: ${ejercicioId}`});
    }
    res.json(result[0]);
  }catch (err){
    res.json({fatal: err.message});
  }
});

module.exports = router;