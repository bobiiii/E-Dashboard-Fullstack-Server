const dataController = require('./data');
const userControllers = require('./user');
const productControllers = require('./product');
const inventoryControllers = require('./inventory');
const supplierController = require('./supplier');
const storesController = require('./stores');
const remainingOrdersControllers = require('./remainingOrders');
const dispatchedOrdersControllers = require('./dispatchedOrders');
const dispatchedCentersControllers = require('./dispatchedCenters');
const authControllers = require('./authControllers');

module.exports = {
  dataController,
  userControllers,
  productControllers,
  inventoryControllers,
  supplierController,
  storesController,
  remainingOrdersControllers,
  dispatchedOrdersControllers,
  dispatchedCentersControllers,
  authControllers,

};
