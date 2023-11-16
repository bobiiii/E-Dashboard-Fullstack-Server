const express = require('express');
const dataRoutes = require('./data.routes');
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
const { protectedRoute } = require('../middlewares/protectedRoute');

const apiRoutes = express.Router();

apiRoutes.use('/data', dataRoutes);
apiRoutes.use('/user', userRoutes);
apiRoutes.use('/products', protectedRoute, productsRoutes);
apiRoutes.use('/inventory', protectedRoute, inventoryRoutes);
apiRoutes.use('/faulty-inventory', protectedRoute, faultyInventoryRoutes);
apiRoutes.use('/return-inventory', protectedRoute, returnInventoryRoutes);
apiRoutes.use('/supplier', protectedRoute, supplierRoutes);
apiRoutes.use('/stores', protectedRoute, storesRoutes);
apiRoutes.use('/remaining-orders', protectedRoute, remainingOrdersRoutes);
apiRoutes.use('/dispatched-orders', protectedRoute, dispatchedOrdersRoutes);
apiRoutes.use('/dispatched-centers', protectedRoute, dispatchedCentersRoutes);
apiRoutes.use('*', (req, res) => {
  res.send('Route Not Found');
});

module.exports = apiRoutes;
