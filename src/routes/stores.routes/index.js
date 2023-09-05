const express = require('express');
const storesRoute = require('./stores.routes');

const storesRoutes = express.Router();

storesRoutes.use(storesRoute);
storesRoutes.use('*', (req, res) => { res.send('Route not found'); });

module.exports = storesRoutes;
