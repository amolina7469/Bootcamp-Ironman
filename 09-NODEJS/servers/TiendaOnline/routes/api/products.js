const router = require('express').Router();

const Product = require('../../models/product.model');

router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.json({ fatal: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.json(product);
  } catch (err) {
    res.json({ fatal: err.message });
  }
});

router.put('/:productId', async (req, res) => {
  const { productId } = req.params;
  try {
    const product = await Product.findByIdAndUpdate(productId, req.body, { new: true });
    res.json(product);
  } catch (err) {
    res.json({ fatal: err.message });
  }
});

router.delete('/:productId', async (req, res) => {
  const { productId } = req.params;
  try {
    const product = await Product.findByIdAndDelete(productId);
    res.json(product);
  } catch (err) {
    res.json({ fatal: err.message });
  }
});

router.get('/actives', async (req, res) => {
  try {
    // const products = await Product.find({ available: true, stock: { $gt: 0 } });
    const products = await Product.find({ $or: [{ stock: 0 }, { available: false }] }); //para productos no disponibles
    res.json(products);
  } catch (err) {
    res.json({ fatal: err.message })
  }
});

router.get('/:departamento', async (req, res) => {
  const { departamento } = req.params;
  console.log(departamento);
  try {
    const products = await Product.find({ department: departamento });
    res.json(products);
  } catch (err) {
    res.json({ fatal: err.message });
  }
});

router.get('/min/:minPrice/max/:maxPrice', async (req, res) => {
  const { minPrice, maxPrice } = req.params;
  try {
    const products = await Product.find({ price: { $gt: minPrice, $lt: maxPrice } });
    res.json(products);
  } catch (err) {
    res.json({ fatal: err.message })
  }
});



module.exports = router;