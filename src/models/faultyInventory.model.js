const mongoose = require('mongoose');

const faultyInventorySchema = new mongoose.Schema({
  invoice: {
    type: String,
    required: true,
  },
  dispatch_date: {
    type: String,
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

const FaultyInventoryModel = mongoose.model('Faulty_Inventory', faultyInventorySchema);

module.exports = FaultyInventoryModel;
