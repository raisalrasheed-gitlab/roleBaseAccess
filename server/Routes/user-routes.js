const express = require('express');
const { addUser, getUser, login } = require('../controller/user-controller');
const checkToken = require('../middlewares/checktoken');

const router = express.Router();

router.post('/', checkToken, addUser);
router.post('/login', login);
router.get('/', checkToken, getUser);

module.exports = router;
