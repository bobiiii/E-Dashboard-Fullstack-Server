// eslint-disable-next-line import/no-extraneous-dependencies
const JWT = require('jsonwebtoken');
const { userServices } = require('../../services');
const { environmentVariables } = require('../../config');
const asyncHandler = require('../../utils/asyncHandler');
const { ErrorHandler } = require('../../utils/errorHandlers');

const addUserController = asyncHandler(async (req, res, next) => {
  const { email, password, role } = req.body;

  if (email && password && role === '') {
    next(new ErrorHandler('Please fill all required fields'), 400);
  }
  const userExist = await userServices.getUserEmail({ email });
  if (userExist) {
    next(new ErrorHandler('User already exists'), 409);
  }

  const addUserDB = await userServices.addUser({ email, password, role });
  if (!addUserDB) {
    next(new ErrorHandler('Unable to add user'), 500);
  }
  return res.send({ message: 'user added successfully', data: addUserDB });
});

const loginUserController = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const userExist = await userServices.getUserEmail({ email });
  if (!userExist) {
    next(new ErrorHandler('User dosent exist'), 404);
  }
  const loginUser = await userServices.loginUser({ email, password });

  if (!loginUser) {
    next(new ErrorHandler('Email or password is incorrect '), 401);
  }
  const userDetails = {
    email, password,
  };
  const token = JWT.sign(userDetails, environmentVariables.SECRET_KEY);
  res.cookie('authToken', token, {
    httpOnly: true,
  });
  return res.status(200).json({ message: 'Login Success' });
});

const getUsers = asyncHandler(async (req, res, next) => {
  const users = await userServices.getUsers();
  if (!users) {
    next(new ErrorHandler('No users found '), 400);
  }
  return res.status(200).json({ data: users });
});

module.exports = {
  getUsers,
  addUserController,
  loginUserController,
};
