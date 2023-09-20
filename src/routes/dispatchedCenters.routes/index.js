const express = require('express');
const dispatchedCentersRoute = require('./dispatchedCenters.route');

const dispatchedCentersRoutes = express.Router();

dispatchedCentersRoutes.use(dispatchedCentersRoute);
dispatchedCentersRoutes.use('*', (req, res) => { res.send('Route not found'); });

module.exports = dispatchedCentersRoutes;
