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
      res.send('Failed to add user');
    }
    return res.send({ message: 'user added successfully', data: addUserDB });
  } catch (error) {
    console.log(error);
    return res.send(' Error Occured');
  }
};

const loginUserController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await userServices.getUserEmail({ email });
    if (!userExist) {
      return res.send('User Not Found');
    }
    const loginUser = await userServices.loginUser({ email, password });

    if (!loginUser) {
      return res.send({ message: 'Email or Password is incorrect', data: loginUser });
    }
    const userDetails = {
      email, password,
    };
    const token = JWT.sign(userDetails, environmentVariables.SECRET_KEY);
    res.cookie('authToken', token, {
      httpOnly: true,
    });
    return res.status(200).json({ data: 'Login Success' });
  } catch (error) {
    console.log(error);
    return res.status(403).send('some error occured');
  }
};

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
