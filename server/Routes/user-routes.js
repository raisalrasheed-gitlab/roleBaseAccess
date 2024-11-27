const express = require('express');
const {
  addUser,
  getUser,
  login,
  getDelete,
  getUserById,
  editUser,
} = require('../controller/user-controller');
const checkToken = require('../middlewares/checktoken');

const router = express.Router();

router.post('/', addUser);
router.post('/login', login);
router.patch('/:id', editUser);
router.get('/', checkToken, getUser);
router.get('/:id', getUserById);
router.delete('/:id', getDelete);
module.exports = router;
