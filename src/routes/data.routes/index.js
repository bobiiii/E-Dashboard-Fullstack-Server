const express = require('express');
const dataRoute = require('./dataRoutes');

const dataRoutes = express.Router();

// dataRoutes.use(dat);
dataRoutes.use(dataRoute);
dataRoutes.use('*', (req, res) => { res.send('Route not found'); });

module.exports = dataRoutes;
