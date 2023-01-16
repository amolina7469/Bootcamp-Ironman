const mongoose = require('mongoose');
const Product = require('./models/product.model');


(async () => {
  mongoose.set('strictQuery', false);
  await mongoose.connect('mongodb://127.0.0.1:27017/tienda_online');

  // const response = await Product.create({
  //   name: 'Pantalones marrones',
  //   description: 'Son para las piernas',
  //   price: 54,
  //   department: 'moda',
  //   available: true,
  //   stock: 28,
  //   image: 'https://www.bolf.es/spa_pl_Pantalon-chino-para-hombre-color-marron-Bolf-1146-86886_9.jpg'
  // });

  const products = await Product.find();

  console.log(products);

  await mongoose.disconnect();
})(); 