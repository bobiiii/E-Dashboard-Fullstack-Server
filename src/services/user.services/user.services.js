const { UserModel } = require('../../models');

const addUser = async ({
  first_name, last_name, email, password, dispatch_center, role, status,
}) => {
  const user = new UserModel({
    first_name, last_name, email, password, dispatch_center, role, status,
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
const deleteUser = async ({ userId }) => {
  const response = await UserModel.findByIdAndDelete(userId);
  return response;
};

module.exports = {
  addUser,
  deleteUser,
  loginUser,
  getUserEmail,
  getUserId,
  getUsers,
};
