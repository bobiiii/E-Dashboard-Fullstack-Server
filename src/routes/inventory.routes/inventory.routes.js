const express = require('express');
const { inventoryControllers } = require('../../controllers');
// const middleware = require('../../middlewares');
// const { adminOnlyRoute } = require('../../middlewares/protectedRoute');

const inventoryRoute = express.Router();

// middleware.protectedRoute, adminOnlyRoute,

inventoryRoute.get('/inventories', inventoryControllers.getInventories);
inventoryRoute.get('/:inventoryId', inventoryControllers.getInventoryProducts);
inventoryRoute.post('/inventory', inventoryControllers.addInventory);
inventoryRoute.put('/:inventoryId', inventoryControllers.updateInventory);
inventoryRoute.delete('/:inventoryId', inventoryControllers.deleteInventory);

module.exports = inventoryRoute;
