const UserModel = require('./user.model');
const InventoryModel = require('./inventoryIn.model');
const ProductModel = require('./product.model');
const SupplierModel = require('./supplier.model');
const ReturnInventoryModel = require('./returnInventory.model');
const FaultyInventoryModel = require('./faultyInventory.model');
const StoresModel = require('./store.model');

const DispatchedOrdersModel = require('./dispatchedOrders.model');
const DispatchedCentersModel = require('./dispatchedCenters.model');

module.exports = {
  UserModel,
  InventoryModel,
  ProductModel,
  SupplierModel,
  ReturnInventoryModel,
  FaultyInventoryModel,
  StoresModel,

  DispatchedOrdersModel,
  DispatchedCentersModel,

};
