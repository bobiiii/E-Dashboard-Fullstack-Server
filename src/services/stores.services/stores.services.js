const { StoresModel } = require('../../models');

const getStores = async () => StoresModel.find({});

const addStore = async ({ store_name, status }) => {
  const addedStore = await StoresModel.create({ store_name, status });
  return addedStore;
};

const deleteStore = async ({ storeId }) => {
  const deletedStore = await StoresModel.findByIdAndDelete(storeId);
  return deletedStore;
};

const updateStore = async ({
  storeId, store_name, status,
}) => {
  const data = {
    store_name, status,
  };
  const updatedStore = await StoresModel.findByIdAndUpdate(storeId, data, { new: true });
  return updatedStore;
};

module.exports = {
  getStores,
  addStore,
  deleteStore,
  updateStore,
};
