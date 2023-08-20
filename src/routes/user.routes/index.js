const express = require('express');
const userLoignRoutes = require('./user.login');

const userRoutes = express.Router();

userRoutes.use(userLoignRoutes);

module.exports = userRoutes;
