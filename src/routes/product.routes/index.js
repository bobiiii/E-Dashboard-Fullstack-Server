const express = require('express');
const productsRoute = require('./product.routes');

const productsRoutes = express.Router();

productsRoutes.use(productsRoute);
productsRoutes.use('*', (req, res) => { res.send('Route Not Found'); });

module.exports = productsRoutes;
