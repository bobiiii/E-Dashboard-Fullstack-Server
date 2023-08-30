const express = require('express');
const { inventoryControllers } = require('../../controllers');

const inventoryRoute = express.Router();

inventoryRoute.get('/inventory', inventoryControllers.getInventories);
inventoryRoute.get('/:inventoryId', inventoryControllers.getInventoryProducts);
inventoryRoute.post('/inventory', inventoryControllers.addInventory);
inventoryRoute.put('/:inventoryId', inventoryControllers.updateInventory);
inventoryRoute.delete('/:inventoryId', inventoryControllers.deleteInventory);

module.exports = inventoryRoute;
