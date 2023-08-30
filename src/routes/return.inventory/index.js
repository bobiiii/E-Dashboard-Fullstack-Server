const express = require('express');
const returnInventoryRoute = require('./returnInventory.route');

const returnInventoryRoutes = express.Router();

returnInventoryRoutes.use(returnInventoryRoute);
returnInventoryRoutes.use('*', (req, res) => { res.send('Route not found'); });

module.exports = returnInventoryRoutes;
