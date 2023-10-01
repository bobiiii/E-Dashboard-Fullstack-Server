const {
  inventoryServices, productServices, faultyInventoryServices, returnInventoryServices,
} = require('../../services');
const asyncHandler = require('../../utils/asyncHandler');
const { ErrorHandler } = require('../../utils/errorHandlers');

const getInventories = asyncHandler(async (req, res, next) => {
  const inventories = await inventoryServices.getInventories();
  if (!inventories || inventories.length === 0) {
    return next(new ErrorHandler('No products available', 404));
  }
  return res.status(200).json({ data: inventories });
});

const getInventoryProducts = asyncHandler(async (req, res, next) => {
  const { inventoryId } = req.params;
  const inventories = await inventoryServices.getInventoryProducts({ _id: inventoryId });
  if (!inventories || inventories.length === 0) {
    return next(new ErrorHandler('No products available with this ID', 404));
  }
  return res.status(200).json({ data: inventories });
});

const addInventory = asyncHandler(async (req, res, next) => {
  const {
    products, invoice, date, supplier, warehouse, stock, total_price,
  } = req.body;
  const addedProductsIds = await productServices.addMultipleProducts(products);
  if (!addedProductsIds) {
    return next(new ErrorHandler('Unable to add inventory', 500));
  }
  const addedinventory = await inventoryServices.addInventory({
    addedProductsIds, invoice, date, supplier, warehouse, stock, total_price,
  });

  return res.status(200).json({ data: addedinventory });
});

const updateInventory = asyncHandler(async (req, res, next) => {
  const {
    invoice, date, supplier, warehouse, stock, total_price,
  } = req.body;
  const { inventoryId } = req.params;
  const updatedinventory = await inventoryServices.updateInventory({
    inventoryId, invoice, date, supplier, warehouse, stock, total_price,
  });
  if (!updatedinventory) {
    return next(new ErrorHandler('Unable to update inventory', 500));
  }
  return res.status(200).json({ data: updatedinventory });
});

const deleteInventory = asyncHandler(async (req, res, next) => {
  const { inventoryId } = req.params;
  const deletedinventory = await inventoryServices.deleteInventory({ inventoryId });
  if (!deletedinventory) {
    return next(new ErrorHandler('Unable to delete inventory', 500));
  }
  return res.status(200).send('inventory deleted successfully');
});

// Faulty Inventory Controllers

const getFaultyInventories = asyncHandler(async (req, res, next) => {
  const data = await faultyInventoryServices.getfaultyInventories();
  if (!data || data.length === 0) {
    return next(new ErrorHandler('No faulty inventory found', 404));
  }
  return res.status(200).json({ message: data });
});

const addFaultyInventory = asyncHandler(async (req, res, next) => {
  const {
    invoice, dispatch_date, product, comment,
  } = req.body;
  const data = await faultyInventoryServices.addfaultyInventory({
    invoice, dispatch_date, product, comment,
  });
  if (!data) {
    return next(new ErrorHandler('Unable to add faulty inventory ', 505));
  }
  return res.status(200).json({ message: data });
});
const getFaultyInventoryDetails = asyncHandler(async (req, res, next) => {
  const { faultyInventoryId } = req.params;
  const data = await faultyInventoryServices.getFaultyInventoryDetails({
    faultyInventoryId,
  });
  if (!data) {
    return next(new ErrorHandler('No faulty inventory found', 404));
  }
  return res.status(200).json({ message: data });
});

const updateFaultyInventory = asyncHandler(async (req, res, next) => {
  const { faultyInventoryId } = req.params;
  const {
    invoice, dispatch_date, product, comment,
  } = req.body;
  const data = await faultyInventoryServices.updateFaultyInventory({
    faultyInventoryId, invoice, dispatch_date, product, comment,
  });
  if (!data) {
    return next(new ErrorHandler('Unable to update  faulty inventory', 500));
  }
  return res.status(200).json({ message: data });
});

const deletefaultyInventory = asyncHandler(async (req, res, next) => {
  const { faultyInventoryId } = req.params;
  const deletedinventory = await faultyInventoryServices.deletefaultyInventory({ faultyInventoryId });
  if (!deletedinventory) {
    return next(new ErrorHandler('Unable to delete faulty inventory', 500));
  }
  return res.status(200).send('deleted successfully');
});

// Return Inventory Controllers
const getReturnInventories = asyncHandler(async (req, res, next) => {
  const data = await returnInventoryServices.getReturnInventories();
  if (!data || data.length === 0) {
    return next(new ErrorHandler('No return inventories found', 404));
  }
  return res.status(200).json({ message: data });
});

const addReturnInventory = asyncHandler(async (req, res, next) => {
  const {
    invoice, dispatch_date, product, comment,
  } = req.body;
  const data = await returnInventoryServices.addReturnInventory({
    invoice, dispatch_date, product, comment,
  });
  if (!data) {
    return next(new ErrorHandler('Unable to add return inventory', 404));
  }
  return res.status(200).json({ message: data });
});

const getReturnInventoryDetails = asyncHandler(async (req, res, next) => {
  const { returnInventoryId } = req.params;
  const data = await returnInventoryServices.getReturnInventoryDetails({
    returnInventoryId,
  });
  if (!data) {
    return next(new ErrorHandler('No Return inventory found', 404));
  }
  return res.status(200).json({ message: data });
});

const updateReturnInventory = asyncHandler(async (req, res, next) => {
  const { returnInventoryId } = req.params;
  const {
    invoice, dispatch_date, product, comment,
  } = req.body;
  const data = await returnInventoryServices.updateReturnInventory({
    returnInventoryId, invoice, dispatch_date, product, comment,
  });
  if (!data) {
    return next(new ErrorHandler('Unable to add Return inventory', 500));
  }
  return res.status(200).json({ message: data });
});

const deleteReturnInventory = asyncHandler(async (req, res, next) => {
  const { returnInventoryId } = req.params;
  const deletedinventory = await returnInventoryServices.deleteReturnInventory({ returnInventoryId });
  if (!deletedinventory) {
    return next(new ErrorHandler(' Unable to delete Return inventory found', 500));
  }
  return res.status(200).send('deleted successfully');
});

module.exports = {
  getInventories,
  addInventory,
  getInventoryProducts,
  updateInventory,
  deleteInventory,
  getFaultyInventories,
  addFaultyInventory,
  getFaultyInventoryDetails,
  updateFaultyInventory,
  deletefaultyInventory,
  getReturnInventories,
  addReturnInventory,
  getReturnInventoryDetails,
  updateReturnInventory,
  deleteReturnInventory,
};
