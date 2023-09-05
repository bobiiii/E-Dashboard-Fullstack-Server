const express = require('express');
const dispatchedOrdersRoute = require('./dispatchedOrders.route');

const dispatchedOrdersRoutes = express.Router();

dispatchedOrdersRoutes.use(dispatchedOrdersRoute);
dispatchedOrdersRoutes.use('*', (req, res) => { res.send('Route not found'); });

module.exports = dispatchedOrdersRoutes;
