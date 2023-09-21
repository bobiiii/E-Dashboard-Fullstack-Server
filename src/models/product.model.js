const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    maxLength: 60,
    minLength: 5,
  },
  desc: {
    type: String,
    maxLength: 255,
    minLength: 10,
  },

  quantity: {
    type: Number,
  },
  price: {
    type: Number,
  },
  selling_price: {
    type: Number,
  },
  imgURL: {
    type: String,
  },

});

const ProductModel = mongoose.model('products', productSchema);

module.exports = ProductModel;
