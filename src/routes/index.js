const express = require('express');
const userRoutes = require('./user.routes');
const productsRoutes = require('./product.routes');
const inventoryRoutes = require('./inventory.routes');
const faultyInventoryRoutes = require('./faultyInventory.routes');
const returnInventoryRoutes = require('./return.inventory');
const supplierRoutes = require('./supplier.routes');
const storesRoutes = require('./stores.routes');
const remainingOrdersRoutes = require('./remainingOrders.routes');
const dispatchedOrdersRoutes = require('./dispatchedOrders.routes');
const dispatchedCentersRoutes = require('./dispatchedCenters.routes');

const apiRoutes = express.Router();

apiRoutes.use('/user', userRoutes);
apiRoutes.use('/products', productsRoutes);
apiRoutes.use('/inventory', inventoryRoutes);
apiRoutes.use('/faulty-inventory', faultyInventoryRoutes);
apiRoutes.use('/return-inventory', returnInventoryRoutes);
apiRoutes.use('/supplier', supplierRoutes);
apiRoutes.use('/stores', storesRoutes);
apiRoutes.use('/remaining-orders', remainingOrdersRoutes);
apiRoutes.use('/dispatched-orders', dispatchedOrdersRoutes);
apiRoutes.use('/dispatched-centers', dispatchedCentersRoutes);
apiRoutes.use('*', (req, res) => {
  res.send('Route Not Found');
});

module.exports = apiRoutes;
