const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
  },
  quantity: {
    type: Number,
  },
  price: {
    type: Number,
  },

});

const ProductModel = mongoose.model('products', productSchema);

module.exports = ProductModel;
