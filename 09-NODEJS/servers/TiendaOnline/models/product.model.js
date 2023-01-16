const { model, Schema } = require('mongoose');

const productSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  available: Boolean,
  stock: Number,
  department: String,
  image: String
});

module.exports = model('product', productSchema);