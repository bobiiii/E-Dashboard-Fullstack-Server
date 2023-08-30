const express = require('express');
const inventoryRoute = require('./inventory.routes');

const inventoryRoutes = express.Router();

inventoryRoutes.use(inventoryRoute);
inventoryRoutes.use('*', (req, res) => { res.send('Route not found'); });

module.exports = inventoryRoutes;
