const express = require('express');
const { supplierController } = require('../../controllers');

const supplierRoute = express.Router();

supplierRoute.get('/supplier', supplierController.getSuppliers);
supplierRoute.post('/supplier', supplierController.addSupplier);
supplierRoute.put('/:supplierId', supplierController.updateSupplier);
supplierRoute.delete('/:supplierId', supplierController.deleteSupplier);

module.exports = supplierRoute;
