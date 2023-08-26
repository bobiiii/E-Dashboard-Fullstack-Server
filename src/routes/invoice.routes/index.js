const express = require('express');
const invoiceRoute = require('./invoice.routes');

const invoiceRoutes = express.Router();

invoiceRoutes.use(invoiceRoute);
invoiceRoutes.use('*', (req, res) => { res.send('Route not found'); });

module.exports = invoiceRoutes;
