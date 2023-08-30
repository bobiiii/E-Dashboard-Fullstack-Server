const express = require('express');
const userRoutes = require('./user.routes');
const productsRoutes = require('./product.routes');
const inventoryRoutes = require('./inventory.routes');
const faultyInventoryRoutes = require('./faultyInventory.routes');
const returnInventoryRoutes = require('./return.inventory');
const supplierRoutes = require('./supplier.routes');

const apiRoutes = express.Router();

apiRoutes.use('/user', userRoutes);
apiRoutes.use('/products', productsRoutes);
apiRoutes.use('/inventory', inventoryRoutes);
apiRoutes.use('/faulty-inventory', faultyInventoryRoutes);
apiRoutes.use('/return-inventory', returnInventoryRoutes);
apiRoutes.use('/supplier', supplierRoutes);
apiRoutes.use('*', (req, res) => { res.send('Route Not Found'); });

module.exports = apiRoutes;
