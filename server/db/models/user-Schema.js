const { Schema, model } = require('mongoose');

const userSchema = Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    trim: true,
    unique: true,
  },
  address: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
    trim: true,
  },
  image: {
    type: String,
    default: 'http://localhost:9000/images/3039079-200.png',
  },
  active: {
    type: Boolean,
    default: true,
  },
  role: {
    type: Schema.Types.ObjectId,
    ref: 'roles',
  },
});

const User = model('users', userSchema);
module.exports = User;
