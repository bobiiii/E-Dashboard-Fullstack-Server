const { FaultyInventoryModel } = require('../../models');

const getfaultyInventories = async () => FaultyInventoryModel.find({});

const addfaultyInventory = async ({
  invoice, dispatch_date, product, comment,
}) => {
  const response = await FaultyInventoryModel.create({
    invoice, dispatch_date, product, comment,
  });
  return response;
};

const getFaultyInventoryDetails = async ({
  faultyInventoryId,
}) => {
  const response = await FaultyInventoryModel.findById(faultyInventoryId);
  return response;
};

const updateFaultyInventory = async ({
  faultyInventoryId, invoice, dispatch_date, product, comment,
}) => {
  const data = {
    invoice, dispatch_date, product, comment,
  };
  const response = await FaultyInventoryModel.findByIdAndUpdate(faultyInventoryId, data, { new: true });
  return response;
};

const deletefaultyInventory = async ({ faultyInventoryId }) => {
  const response = await FaultyInventoryModel.findByIdAndDelete(faultyInventoryId);
  return response;
};

module.exports = {
  getfaultyInventories,
  addfaultyInventory,
  getFaultyInventoryDetails,
  updateFaultyInventory,
  deletefaultyInventory,
};
