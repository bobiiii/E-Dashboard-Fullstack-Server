const mongoose = require('mongoose');

const DispatchedOrdersSchema = new mongoose.Schema(
  {

    order_number: {
      type: String,
      required: true,
    },
    dispatch_center: {
      type: String,
      required: true,
    },
    dispatch_date: {
      type: String,
      required: true,
    },
    total_amount: {
      type: Number,
      required: true,
    },
    quantity: {
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
