const express = require('express');
const { userControllers } = require('../../controllers');

const userLoignRoutes = express.Router();

userLoignRoutes.use('/login', userControllers.userLogin);

module.exports = userLoignRoutes;
