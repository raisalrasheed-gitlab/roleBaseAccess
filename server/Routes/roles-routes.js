const express = require('express');
const {
  postRoles,
  getRoles,
  patchRole,
  deleteRoles,
} = require('../controller/roles-controller');
const checkToken = require('../middlewares/checktoken');

const router = express.Router();

router.get('/', checkToken, getRoles);
router.post('/', postRoles);
router.patch('/:id', checkToken, patchRole);
router.delete('/:id', deleteRoles);

module.exports = router;
