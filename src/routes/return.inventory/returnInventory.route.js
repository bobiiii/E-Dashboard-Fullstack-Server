const express = require('express');
const { inventoryControllers } = require('../../controllers');

const returnInventoryRoute = express.Router();

returnInventoryRoute.get('/return-inventories', inventoryControllers.getReturnInventories);
returnInventoryRoute.get('/:returnInventoryId', inventoryControllers.getReturnInventoryDetails);
returnInventoryRoute.post('/return-inventory', inventoryControllers.addReturnInventory);
returnInventoryRoute.put('/:returnInventoryId', inventoryControllers.updateReturnInventory);
returnInventoryRoute.delete('/:returnInventoryId', inventoryControllers.deleteReturnInventory);

module.exports = returnInventoryRoute;
