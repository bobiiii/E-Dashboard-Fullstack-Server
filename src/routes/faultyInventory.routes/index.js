const express = require('express');
const faultyInventoryRoute = require('./faultyInventory.route');

const faultyInventoryRoutes = express.Router();

faultyInventoryRoutes.use(faultyInventoryRoute);
faultyInventoryRoutes.use('*', (req, res) => { res.send('Route not found'); });

module.exports = faultyInventoryRoutes;
