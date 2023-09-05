const mongoose = require('mongoose');

const storesSchema = new mongoose.Schema({
  store_name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['Active', 'Inactive'],
    default: 'Active',
  },
});

const StoresModel = mongoose.model('stores', storesSchema);

module.exports = StoresModel;
