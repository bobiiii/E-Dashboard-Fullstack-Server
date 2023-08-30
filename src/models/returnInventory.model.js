const mongoose = require('mongoose');

const returnInventorySchema = new mongoose.Schema({
  invoice: {
    type: String,
    required: true,
  },
  dispatch_date: {
    type: Date,
    required: true,
  },
  product: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },

});

const ReturnInventoryModel = mongoose.model('Return_Inventory', returnInventorySchema);

module.exports = ReturnInventoryModel;
