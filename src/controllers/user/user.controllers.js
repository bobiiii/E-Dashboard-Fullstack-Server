// eslint-disable-next-line import/no-extraneous-dependencies
// const JWT = require('jsonwebtoken');
const { userServices } = require('../../services');
// const { environmentVariables } = require('../../config');
const asyncHandler = require('../../utils/asyncHandler');
// const { UserModel } = require('../../models');
const { ErrorHandler } = require('../../utils/errorHandlers');
const { sendCookieToken } = require('../authControllers');

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
  return res.status(200).send({ message: 'User added successfully', data: addUserDB });
});

// eslint-disable-next-line consistent-return
const loginUserController = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await userServices.getUserEmail({ email });
  if (!user) {
    next(new ErrorHandler('User dosent exist'), 404);
  }

  const userExist = await user.comparePassword(password, user.password);

  if (!userExist) {
    return next(new ErrorHandler('Email or password is incorrect '), 401);
  }
  console.log('send cokie bf4');
  sendCookieToken(user, 200, req, res);
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