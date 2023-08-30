const express = require('express');
const { inventoryControllers } = require('../../controllers');

const returnInventoryRoute = express.Router();

returnInventoryRoute.get('/return-inventories', inventoryControllers.getReturnInventories);
returnInventoryRoute.get('/:returnInventoryId', inventoryControllers.getInventoryProducts);
returnInventoryRoute.post('/return-inventory', inventoryControllers.addReturnInventory);
returnInventoryRoute.put('/:returnInventoryId', inventoryControllers.updateInventory);
returnInventoryRoute.delete('/:returnInventoryId', inventoryControllers.deleteInventory);

module.exports = returnInventoryRoute;
