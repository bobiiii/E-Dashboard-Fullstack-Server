const { userServices } = require('../../services/index');

const addUserController = async (req, res) => {
  const { email, password, role } = req.body;
  try {
    if (email && password && role === '') {
      return res.send('Please send valid data ');
    }
    const userExist = await userServices.getUserEmail({ email });
    if (userExist) {
      return res.send('User Already Exist');
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
    return res.send('Login Success');
  } catch (error) {
    console.log(error);
    return res.status(403).send('some error occured');
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await userServices.getUsers();
    if (!users) {
      return res.send('users not returning data');
    }
    return res.send({ data: users });
  } catch (error) {
    console.log(error);
    return res.send('error occured');
  }
};

module.exports = {
  getUsers,
  addUserController,
  loginUserController,
};
