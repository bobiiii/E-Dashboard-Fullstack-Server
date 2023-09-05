const express = require('express');
const { storesController } = require('../../controllers');

const storesRoute = express.Router();

storesRoute.get('/stores', storesController.getStores);
storesRoute.post('/store', storesController.addStore);
storesRoute.put('/:storeId', storesController.updateStore);
storesRoute.delete('/:storeId', storesController.deleteStore);

module.exports = storesRoute;
