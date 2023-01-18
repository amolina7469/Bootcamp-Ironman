const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: String,
  password: String,
  address: Boolean,
  age: {
    type: Number,
    min: 0,
    max: 100
  },
  role: {
    type: String,
    enum: ['regular', 'admin', 'moderator']
  }
});

module.exports = model('user', userSchema);