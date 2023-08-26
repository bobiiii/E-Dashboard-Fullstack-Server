const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'products' }],

  invoice: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  supplier: {
    type: String,
    required: true,
  },
  warehouse: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  total_price: {
    type: Number,
    required: true,
  },

});

const InvoiceModel = mongoose.model('invoice', invoiceSchema);

module.exports = InvoiceModel;
