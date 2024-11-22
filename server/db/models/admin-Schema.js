const { Schema, model } = require('mongoose');

const adminSchema = Schema(
  {
    email: {
      type: String,
      unique: true,
      require: true,
      trim: true,
    },
    password: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      default: 'ADMIN',
      immutable: true,
    },
  },
  { timestamps: true }
);

const Admin = model('admins', adminSchema);
module.exports = Admin;
