const Roles = require('../db/models/role-Schema');

module.exports.getRoles = async (req, res) => {
  try {
    const roles = await Roles.find();
    if (!roles) {
      return res.status(404).json({ message: 'empty role' });
    }
    return res.status(200).json(roles);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
module.exports.postRoles = async (req, res) => {
  try {
    const { name, permission } = req.body;
    console.log(name);
    if (!name) {
      return res.status(404).json({ message: 'Enter details' });
    }
    const check = await Roles.findOne({ name: name });
    if (check) {
      return res.status(404).json({ message: 'name already setup' });
    }
    const dbResponse = await Roles.create({
      name: name,
      permission: permission,
    });
    res.status(200).json({ dbResponse });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};
module.exports.patchRole = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const dbResponse = await Roles.findByIdAndUpdate(id, body);
  res.status(200).json({ message: 'updation successfully' });
};
module.exports.deleteRoles = async (req, res) => {
  const { id } = req.params;
  const dbResponse = await Roles.findByIdAndDelete(id);
  res.status(200).json({ message: 'deletion succesffully' });
};
