const mongoose = require('mongoose');

const DispatchedOrdersSchema = new mongoose.Schema(
  {
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'products', // This should match the name you use for the ProductModel collection
      required: true,
    },
    order_number: {
      type: String,
      required: true,
    },
    dispatch_center: {
      type: String,
      required: true,
    },
    dispatch_date: {
      type: Date,
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
