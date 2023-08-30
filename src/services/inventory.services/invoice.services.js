const { InventoryModel } = require('../../models');

const addInventory = async ({
  addedProductsIds, invoice, date, supplier, warehouse, stock, total_price,
}) => {
  const response = await InventoryModel.create({
    products: addedProductsIds, invoice, date, supplier, warehouse, stock, total_price,
  });
  return response;
};

const getInventories = async () => {
  const inventories = await InventoryModel.find({});
  return inventories;
};

const getInventoryProducts = async ({ _id }) => {
  const invoices = await InventoryModel.findById({ _id }).populate('products');
  return invoices;
};

const updateInventory = async ({
  inventoryId, invoice, date, supplier, warehouse, stock, total_price,
}) => {
  const updateData = {
    invoice, date, supplier, warehouse, stock, total_price,
  };
  const updatedData = await InventoryModel.findByIdAndUpdate(inventoryId, updateData, { new: true });
  return updatedData;
};

const deleteInventory = async ({ inventoryId }) => InventoryModel.findByIdAndDelete({ _id: inventoryId });

module.exports = {
  getInventories,
  addInventory,
  getInventoryProducts,
  updateInventory,
  deleteInventory,
};
