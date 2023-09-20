const JWT = require('jsonwebtoken');
const asyncHandler = require('../utils/asyncHandler');
const { ErrorHandler } = require('../utils/errorHandlers');
const { environmentVariables } = require('../config');
// const { UserModel } = require('../models');
const { userServices } = require('../services');

// eslint-disable-next-line consistent-return
const protectedRoute = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization
    && req.headers.authorization.startsWith('Bearer')

  ) {
    [, token] = req.headers.authorization.split(' ');
  } else if (req.cookies) {
    if (
      req.cookies.jwt || req.cookies.token
    ) {
      token = req.cookies.jwt || req.cookies.token;
    }
  }

  if (!token) {
    return next(new ErrorHandler('Please Login To Access This Page', 401));
  }

  const decoded = JWT.verify(token, environmentVariables.SECRET_KEY);

  if (!decoded) {
    return next(new ErrorHandler('Please provide valid token', 401));
  }
  const { _id: id, email, role } = await userServices.getUserEmail({ email: decoded.email });
  const currentUser = { id, email, role };
  req.user = currentUser;
  next();
});

const adminOnlyRoute = asyncHandler(
  // eslint-disable-next-line consistent-return
  async (req, res, next) => {
    if (req.user.role !== 'Admin') {
      return next(new ErrorHandler('Your aren\'t authorized to access this route ', 401));
    }

    next();
  },

);

module.exports = {
  protectedRoute,
  adminOnlyRoute,
};
