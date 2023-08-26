const express = require('express');
const userRoutes = require('./user.routes');
const productsRoutes = require('./product.routes');
const invoiceRoutes = require('./invoice.routes');

const apiRoutes = express.Router();

apiRoutes.use('/user', userRoutes);
apiRoutes.use('/products', productsRoutes);
apiRoutes.use('/invoices', invoiceRoutes);
apiRoutes.use('*', (req, res) => { res.send('Route Not Found'); });

module.exports = apiRoutes;
