const { storesServices } = require('../../services');

const getStores = async (req, res) => {
  try {
    const stores = await storesServices.getStores();
    if (!stores || stores.length === 0) {
      return res.send({ message: 'No Stores Found' });
    }

    return res.send({ data: stores });
  } catch (error) {
    return res.send({ message: 'An error occured' });
  }
};

const addStore = async (req, res) => {
  try {
    const { store_name, status } = req.body;
    const addedStore = await storesServices.addStore({ store_name, status });
    if (!addedStore) {
      return res.send({ message: 'Unable to Add Store' });
    }

    return res.send({ data: addedStore });
  } catch (error) {
    return res.send({ message: 'An error occured' });
  }
};

const deleteStore = async (req, res) => {
  try {
    const { storeId } = req.params;
    const deletedStore = await storesServices.deleteStore({ storeId });
    if (!deletedStore || deletedStore.length === 0) {
      return res.send({ message: 'Unable to delete store' });
    }

    return res.send({ data: deletedStore });
  } catch (error) {
    return res.send({ message: 'An error occured' });
  }
};

const updateStore = async (req, res) => {
  try {
    const { storeId } = req.params;
    const { store_name, status } = req.body;
    const updatedStore = await storesServices.updateStore({
      storeId, store_name, status,
    });
    if (!updatedStore) {
      return res.send({ message: 'Unable to update store' });
    }

    return res.send({ data: updatedStore });
  } catch (error) {
    return res.send({ message: 'An error occured' });
  }
};

module.exports = {
  getStores,
  addStore,
  deleteStore,
  updateStore,
};
