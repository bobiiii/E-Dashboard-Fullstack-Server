const express = require('express');
const remainingOrdersRoute = require('./remainingOrders.route');

const remainingOrdersRoutes = express.Router();

remainingOrdersRoutes.use(remainingOrdersRoute);
remainingOrdersRoutes.use('*', (req, res) => { res.send('Route not found'); });

module.exports = remainingOrdersRoutes;
