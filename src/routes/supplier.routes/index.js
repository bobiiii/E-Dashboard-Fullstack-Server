const express = require('express');
const supplierRoute = require('./supplier.routes');

const supplierRoutes = express.Router();

supplierRoutes.use(supplierRoute);
supplierRoutes.use('*', (req, res) => { res.send('Route not found'); });

module.exports = supplierRoutes;
