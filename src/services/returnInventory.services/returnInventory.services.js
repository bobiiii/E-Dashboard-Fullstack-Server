const { ReturnInventoryModel } = require('../../models');

const getReturnInventories = async () => ReturnInventoryModel.find({});

const addReturnInventory = async ({
  invoice, dispatch_date, product, comment,
}) => {
  const response = await ReturnInventoryModel.create({
    invoice, dispatch_date, product, comment,
  });
  return response;
};

const getReturnInventoryDetails = async ({
  returnInventoryId,
}) => {
  const response = await ReturnInventoryModel.findById(returnInventoryId);
  return response;
};

const updateReturnInventory = async ({
  returnInventoryId, invoice, dispatch_date, product, comment,
}) => {
  const data = {
    invoice, dispatch_date, product, comment,
  };
  const response = await ReturnInventoryModel.findByIdAndUpdate(returnInventoryId, data, { new: true });
  return response;
};

const deleteReturnInventory = async ({ returnInventoryId }) => {
  const response = await ReturnInventoryModel.findByIdAndDelete(returnInventoryId);
  return response;
};

module.exports = {
  getReturnInventories,
  addReturnInventory,
  getReturnInventoryDetails,
  updateReturnInventory,
  deleteReturnInventory,
};
