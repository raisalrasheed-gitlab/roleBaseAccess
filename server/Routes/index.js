const express = require('express');
const adminRoutes = require('./admin-routes');
const rolesRoutes = require('./roles-routes');
const userRoutes = require('./user-routes');

const router = express.Router();

router.use('/admin', adminRoutes);
router.use('/roles', rolesRoutes);
router.use('/user', userRoutes);

module.exports = router;
