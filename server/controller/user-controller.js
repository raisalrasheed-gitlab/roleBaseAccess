const User = require('../db/models/user-Schema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.addUser = async (req, res) => {
  try {
    const { name, email, password, confirmPassword, address, role, image } =
      req.body;
    const check = await User.findOne({ email: email });
    if (check) {
      return res.status(404).json({ message: 'account already exist' });
    }
    if (!(password == confirmPassword)) {
      return res.status(500).json({ message: 'password doesnot match' });
    }
    const hashedPassword = await bcrypt.hash(password, 3);
    const dbResponse = await User.create({
      name: name,
      email: email,
      password: hashedPassword,
      address: address,
      role: role,
    });
    return res.status(200).json(dbResponse);
  } catch (error) {
    res.status(404).json(error.message);
  }
};
module.exports.login = async (req, res) => {
  console.log('run');
  const { email, password } = req.body;
  const user = await User.findOne({ email: email, active: true });
  if (!user) {
    return res.status(404).json({ message: 'email or pasword is incorrect 1' });
  }
  const check = await bcrypt.compare(password, user.password);
  if (!check) {
    return res.status(500).json({ message: 'email or password is incorrect' });
  }
  const token = await jwt.sign(
    { id: user._id, role: user.role },
    process.env.SECRET_KEY,
    { expiresIn: '7d' }
  );
  return res
    .status(200)
    .json({ message: 'sucessfully login', token: token, id: user._id });
};
module.exports.getUser = async (req, res) => {
  try {
    const user = await User.aggregate([
      {
        $lookup: {
          from: 'roles',
          localField: 'role',
          foreignField: '_id',
          as: 'roles_details',
        },
      },
      { $unwind: '$roles_details' },
    ]);
    if (!user) {
      return res.status(404).json({ message: 'ddat is empty' });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(404).json(error.message);
  }
};
module.exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const user = await User.find({ _id: id }).populate('role');
    return res.status(200).json(user);
  } catch (error) {
    return res.status(404).json(error.message);
  }
};
module.exports.getDelete = async (req, res) => {
  const { id } = req.params;
  const dbResponse = await User.findByIdAndDelete({ _id: id });
  res.status(200).json(dbResponse);
};
module.exports.editUser = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const dbResponse = await User.findByIdAndUpdate(id, body);
  res.status(200).json(dbResponse);
};
