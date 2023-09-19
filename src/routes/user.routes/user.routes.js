const express = require('express');
const { userControllers } = require('../../controllers');
// const authenticator = require('../../middleware/authMiddleware');

const userRoute = express.Router();

userRoute.get('/get-users', userControllers.getUsers);
userRoute.post('/add-user', userControllers.addUserController);
userRoute.post('/login-user', userControllers.loginUserController);

module.exports = userRoute;
