const mongooose = require('mongoose');

const userSchema = mongooose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    index: true,
    maxlength: 50,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 20,
  },
  role: {
    type: String,
    required: true,
    enum: ['Admin', 'Editor', 'Tester'],
  },

});

const UserModel = mongooose.model('users', userSchema);

module.exports = UserModel;
