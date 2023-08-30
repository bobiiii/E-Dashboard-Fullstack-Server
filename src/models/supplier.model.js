const mongoose = require('mongoose');

const suppliersSchema = mongoose.Schema({
  supplier_name: {
    type: String,
  },
  location: {
    type: String,
  },
  date: {
    type: Date,
  },

});

const SuppliersModel = mongoose.model('suppliers', suppliersSchema);

module.exports = SuppliersModel;
