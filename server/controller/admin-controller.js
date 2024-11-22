const Admin = require('../db/models/admin-Schema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email: email });
    if (admin) {
      return res.status(404).json({ message: 'Admin Account Already Exist' });
    }
    const hashedPaswword = await bcrypt.hash(password, 3);
    const dbResponse = await Admin.create({
      email: email,
      password: hashedPaswword,
    });
    return res.status(200).json({ dbResponse });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};
module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email: email });
  if (!admin) {
    return res.status(404).json({ message: "Account doesn't exist" });
  }
  const check = await bcrypt.compare(password, admin.password);
  if (!check) {
    return res.status(404).json({ message: 'email or password incorrect' });
  }
  const token = await jwt.sign(
    { id: admin._id, role: admin.role },
    process.env.SECRET_KEY,
    {
      expiresIn: '7d',
    }
  );

  return res.status(200).json({ message: 'you are login', token: token });
};
