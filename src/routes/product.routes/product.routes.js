const express = require('express');
const { productControllers } = require('../../controllers');

const productsRoute = express.Router();

productsRoute.get('/product', productControllers.getProducts);
productsRoute.post('/product', productControllers.addProducts);

module.exports = productsRoute;
