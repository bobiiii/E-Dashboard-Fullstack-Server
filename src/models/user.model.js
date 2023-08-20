const mongooose = require('mongoose');

const userSchema = mongooose.Schema({

});

const UserModel = mongooose.Model('users', userSchema);

module.exports = UserModel;
