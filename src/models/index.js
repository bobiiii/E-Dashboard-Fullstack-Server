const UserModel = require('./user.model');
const InventoryModel = require('./inventoryIn.model');
const ProductModel = require('./product.model');
const SupplierModel = require('./supplier.model');
const ReturnInventoryModel = require('./returnInventory.model');
const FaultyInventoryModel = require('./faultyInventory.model');
const StoresModel = require('./store.model');
const RemainingOrdersModel = require('./RemainingOrders.model');
const DispatchedOrdersModel = require('./dispatchedOrders.model');

module.exports = {
  UserModel,
  InventoryModel,
  ProductModel,
  SupplierModel,
  ReturnInventoryModel,
  FaultyInventoryModel,
  StoresModel,
  RemainingOrdersModel,
  DispatchedOrdersModel,

};
