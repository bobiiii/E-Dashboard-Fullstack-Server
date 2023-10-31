const mongooose = require('mongoose');

const bcrypt = require('bcrypt');

const userSchema = mongooose.Schema({
  first_name: {
    type: String,
    required: true,
    maxlength: 15,
    trim: true,

  },
  last_name: {
    type: String,
    required: true,
    maxlength: 15,
    trim: true,
  },
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
  dispatch_center: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    required: true,
    enum: ['Admin', 'Editor', 'Developer'],
  },

  status: {
    type: String,
    required: true,
    enum: ['Active', 'Inactive'],
  },

});

userSchema.methods.comparePassword = async (currPassword, userPassword) => {
  const pass = bcrypt.compare(currPassword, userPassword);
  return pass;
};

// eslint-disable-next-line func-names, consistent-return
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const UserModel = mongooose.model('users', userSchema);

module.exports = UserModel;
