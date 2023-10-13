const { storesServices } = require('../../services');
const asyncHandler = require('../../utils/asyncHandler');
const { ErrorHandler } = require('../../utils/errorHandlers');

const getStores = asyncHandler(async (req, res, next) => {
  const stores = await storesServices.getStores();
  if (!stores || stores.length === 0) {
    next(new ErrorHandler('No stores found', 404));
  }

  return res.status(200).json({ data: stores });
});

const addStore = asyncHandler(async (req, res, next) => {
  const { store_name, status } = req.body;
  const addedStore = await storesServices.addStore({ store_name, status });
  if (!addedStore) {
    next(new ErrorHandler('Unable to add store', 500));
  }

  return res.status(200).json({ data: addedStore });
});

const deleteStore = asyncHandler(async (req, res, next) => {
  const { storeId } = req.params;
  const deletedStore = await storesServices.deleteStore({ storeId });
  if (!deletedStore || deletedStore.length === 0) {
    next(new ErrorHandler('Unable to delete ', 500));
  }

  return res.status(200).send('deleted successfully');
});

const updateStore = asyncHandler(async (req, res, next) => {
  const { storeId } = req.params;
  const { store_name, status } = req.body;
  const updatedStore = await storesServices.updateStore({
    storeId, store_name, status,
  });
  if (!updatedStore) {
    next(new ErrorHandler('Unable to update store', 404));
  }

  return res.status(200).json({ data: updatedStore });
});

module.exports = {
  getStores,
  addStore,
  deleteStore,
  updateStore,
};
