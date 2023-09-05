const express = require('express');
const { inventoryControllers } = require('../../controllers');

const faultyInventoryRoute = express.Router();

faultyInventoryRoute.get('/faulty-inventories', inventoryControllers.getFaultyInventories);
faultyInventoryRoute.get('/:faultyInventoryId', inventoryControllers.getFaultyInventoryDetails);
faultyInventoryRoute.post('/faulty-inventory', inventoryControllers.addFaultyInventory);
faultyInventoryRoute.put('/:faultyInventoryId', inventoryControllers.updateFaultyInventory);
faultyInventoryRoute.delete('/:faultyInventoryId', inventoryControllers.deletefaultyInventory);

module.exports = faultyInventoryRoute;
