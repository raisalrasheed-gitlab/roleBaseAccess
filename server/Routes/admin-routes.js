const express = require('express');
const { signup, login, getAdmin } = require('../controller/admin-controller');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/', getAdmin);

module.exports = router;
