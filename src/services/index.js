const dataServices = require('./data.services');
const userServices = require('./user.services');
const inventoryServices = require('./inventory.services');
const productServices = require('./product.services');
const supplierServices = require('./supplier.services');
const returnInventoryServices = require('./returnInventory.services');
const faultyInventoryServices = require('./faultyInventory.services');
const storesServices = require('./stores.services');
const RemainingOrdersServices = require('./remainingOrders.services');
const DispatchedOrdersServices = require('./dispatchedOrders.services');
const DispatchedCentersServices = require('./dispatchedCenters.services');

module.exports = {
  dataServices,
  userServices,
  inventoryServices,
  productServices,
  supplierServices,
  returnInventoryServices,
  faultyInventoryServices,
  storesServices,
  RemainingOrdersServices,
  DispatchedOrdersServices,
  DispatchedCentersServices,
};
