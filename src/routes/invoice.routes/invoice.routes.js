const express = require('express');
const { invoiceControllers } = require('../../controllers');

const invoiceRoute = express.Router();

invoiceRoute.get('/invoice', invoiceControllers.getInvoices);
invoiceRoute.get('/:invoiceId', invoiceControllers.getInvoiceProducts);
invoiceRoute.post('/invoice', invoiceControllers.addInvoice);

module.exports = invoiceRoute;
