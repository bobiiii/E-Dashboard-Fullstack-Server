const { UserModel } = require('../../models');

const addUser = async ({ email, password, role }) => {
  const user = new UserModel({
    email, password, role,
  });
  const saveUser = await user.save();
  return saveUser;
};

const loginUser = async ({ email, password }) => {
  const user = await UserModel.findOne({ email, password });
  return user;
};

const getUserEmail = async ({ email }) => {
  const checkEmail = await UserModel.findOne({ email });
  return checkEmail;
};
const getUserId = async ({ id }) => {
  const checkEmail = await UserModel.findOne({ id });
  return checkEmail;
};

const getUsers = async () => {
  const response = await UserModel.find({});
  return response;
};

module.exports = {
  addUser,
  loginUser,
  getUserEmail,
  getUserId,
  getUsers,
};
