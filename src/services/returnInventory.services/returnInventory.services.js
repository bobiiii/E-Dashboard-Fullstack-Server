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

module.exports = {
  getReturnInventories,
  addReturnInventory,
};
