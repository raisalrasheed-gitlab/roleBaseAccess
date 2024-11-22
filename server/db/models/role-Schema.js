const { Schema, model } = require('mongoose');

const roleSchema = Schema(
  {
    name: {
      type: String,
      require: true,
    },
    permission: [{ type: String, enum: ['Read', 'Write', 'Delete'] }],
  },
  { timestamp: true }
);
const Role = model('roles', roleSchema);
module.exports = Role;
