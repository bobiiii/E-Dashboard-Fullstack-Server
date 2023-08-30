const express = require('express');
const { inventoryControllers } = require('../../controllers');

const faultyInventoryRoute = express.Router();

faultyInventoryRoute.get('/faulty-inventories', inventoryControllers.getFaultyInventories);
faultyInventoryRoute.get('/:faultyInventoryId', inventoryControllers.getInventoryProducts);
faultyInventoryRoute.post('/faulty-inventory', inventoryControllers.addFaultyInventory);
faultyInventoryRoute.put('/:faultyInventoryId', inventoryControllers.updateInventory);
faultyInventoryRoute.delete('/:faultyInventoryId', inventoryControllers.deleteInventory);

module.exports = faultyInventoryRoute;
