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

module.exports = {
  getfaultyInventories,
  addfaultyInventory,
};
