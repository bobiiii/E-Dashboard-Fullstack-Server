const mongoose = require('mongoose');

const remainingOrdersSchema = new mongoose.Schema(
  {

    product_id: {
      type: String,
      required: true,
      default: '',
    },
    product_title: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    total_amount: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const RemainingOrdersModel = mongoose.model('remaining-orders', remainingOrdersSchema);

module.exports = RemainingOrdersModel;
