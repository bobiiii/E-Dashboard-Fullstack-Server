const mongoose = require('mongoose');

const DispatchedOrdersSchema = new mongoose.Schema(
  {

    order_number: {
      type: String,
      required: true,
    },
    product_id: {
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
  },
  {
    timestamps: true,
  },
);

const DispatchedOrdersModel = mongoose.model('dispatched-orders', DispatchedOrdersSchema);

module.exports = DispatchedOrdersModel;
