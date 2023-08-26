const express = require('express');
const { userControllers } = require('../../controllers');

const userRoute = express.Router();

userRoute.get('/get-users', userControllers.getUsers);
userRoute.post('/add-user', userControllers.addUserController);
userRoute.post('/login-user', userControllers.loginUserController);

module.exports = userRoute;
