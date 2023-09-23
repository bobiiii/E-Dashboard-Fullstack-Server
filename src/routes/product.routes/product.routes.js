const express = require('express');
const { productControllers } = require('../../controllers');

const productsRoute = express.Router();

productsRoute.get('/product', productControllers.getProducts);
productsRoute.get('/:productId', productControllers.getProductDetails);
productsRoute.post('/product', productControllers.addProduct);
productsRoute.put('/:productId', productControllers.updateProduct);
productsRoute.delete('/:productId', productControllers.deleteProduct);

module.exports = productsRoute;
