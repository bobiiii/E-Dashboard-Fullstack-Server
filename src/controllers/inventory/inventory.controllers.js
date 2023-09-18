const {
  inventoryServices, productServices, faultyInventoryServices, returnInventoryServices,
} = require('../../services');

const getInventories = async (req, res) => {
  try {
    const inventories = await inventoryServices.getInventories();
    if (!inventories || inventories.length === 0) {
      return res.status(404).send('No inventories found.');
    }
    return res.send({ data: inventories });
  } catch (error) {
    return ({ message: 'An error occured' });
  }
};

const getInventoryProducts = async (req, res) => {
  try {
    const { inventoryId } = req.params;
    const inventories = await inventoryServices.getInventoryProducts({ _id: inventoryId });
    if (!inventories || inventories.length === 0) {
      return res.status(404).send('No products found for the provided inventory ID.');
    }
    return res.send({ data: inventories });
  } catch (error) {
    return ({ message: 'An error occured' });
  }
};

const addInventory = async (req, res) => {
  try {
    const {
      products, invoice, date, supplier, warehouse, stock, total_price,
    } = req.body;
    const addedProductsIds = await productServices.addMultipleProducts(products);
    if (!addedProductsIds) {
      return res.send({ message: 'Adding products failed' });
    }
    const addedinventory = await inventoryServices.addInventory({
      addedProductsIds, invoice, date, supplier, warehouse, stock, total_price,
    });

    return res.send({ data: addedinventory });
  } catch (error) {
    console.log(error);
    return res.send({ message: 'An error occured' });
  }
};

const updateInventory = async (req, res) => {
  try {
    const {
      invoice, date, supplier, warehouse, stock, total_price,
    } = req.body;
    const { inventoryId } = req.params;
    console.log(inventoryId);
    const updatedinventory = await inventoryServices.updateInventory({
      inventoryId, invoice, date, supplier, warehouse, stock, total_price,
    });
    if (!updatedinventory) {
      return res.send({ message: 'Unable to update inventory' });
    }
    return res.send({ data: updatedinventory });
  } catch (error) {
    console.log(error);
    return res.send({ message: 'An error Occured' });
  }
};

const deleteInventory = async (req, res) => {
  try {
    const { inventoryId } = req.params;
    const deletedinventory = await inventoryServices.deleteInventory({ inventoryId });
    if (!deletedinventory) {
      return res.send({ message: 'Unable to delete inventory' });
    }
    return res.send({ data: deletedinventory });
  } catch (error) {
    return res.send({ message: 'An error Occured' });
  }
};

// Faulty Inventory Controllers

const getFaultyInventories = async (req, res) => {
  try {
    const data = await faultyInventoryServices.getfaultyInventories();
    if (!data || data.length === 0) {
      return res.send({ message: 'No Faulty Inventories Found' });
    }
    return res.send({ message: data });
  } catch (error) {
    return res.send({ message: 'An Error Occured' });
  }
};

const addFaultyInventory = async (req, res) => {
  try {
    const {
      invoice, dispatch_date, product, comment,
    } = req.body;
    const data = await faultyInventoryServices.addfaultyInventory({
      invoice, dispatch_date, product, comment,
    });
    if (!data) {
      return res.send({ message: 'No Faulty Inventories Found' });
    }
    return res.send({ message: data });
  } catch (error) {
    return res.send({ message: 'An Error Occured' });
  }
};
const getFaultyInventoryDetails = async (req, res) => {
  try {
    const { faultyInventoryId } = req.params;
    const data = await faultyInventoryServices.getFaultyInventoryDetails({
      faultyInventoryId,
    });
    if (!data) {
      return res.send({ message: 'No Faulty Inventory Found' });
    }
    return res.send({ message: data });
  } catch (error) {
    return res.send({ message: 'An Error Occured' });
  }
};

const updateFaultyInventory = async (req, res) => {
  try {
    const { faultyInventoryId } = req.params;
    const {
      invoice, dispatch_date, product, comment,
    } = req.body;
    const data = await faultyInventoryServices.updateFaultyInventory({
      faultyInventoryId, invoice, dispatch_date, product, comment,
    });
    if (!data) {
      return res.send({ message: 'Unable to update Faulty Inventory' });
    }
    return res.send({ message: data });
  } catch (error) {
    return res.send({ message: 'An Error Occured' });
  }
};

const deletefaultyInventory = async (req, res) => {
  try {
    const { faultyInventoryId } = req.params;
    const deletedinventory = await faultyInventoryServices.deletefaultyInventory({ faultyInventoryId });
    if (!deletedinventory) {
      return res.send({ message: 'Unable to delete faulty inventory' });
    }
    return res.send({ data: deletedinventory });
  } catch (error) {
    return res.send({ message: 'An error Occured' });
  }
};

// Return Inventory Controllers
const getReturnInventories = async (req, res) => {
  try {
    const data = await returnInventoryServices.getReturnInventories();
    if (!data || data.length === 0) {
      return res.send({ message: 'No Return Inventories Found' });
    }
    return res.send({ message: data });
  } catch (error) {
    return res.send({ message: 'An Error Occured' });
  }
};

const addReturnInventory = async (req, res) => {
  try {
    const {
      invoice, dispatch_date, product, comment,
    } = req.body;
    const data = await returnInventoryServices.addReturnInventory({
      invoice, dispatch_date, product, comment,
    });
    if (!data) {
      return res.send({ message: 'No Return Inventories Found' });
    }
    return res.send({ message: data });
  } catch (error) {
    return res.send({ message: 'An Error Occured' });
  }
};

const getReturnInventoryDetails = async (req, res) => {
  try {
    const { returnInventoryId } = req.params;
    const data = await returnInventoryServices.getReturnInventoryDetails({
      returnInventoryId,
    });
    if (!data) {
      return res.send({ message: 'No Faulty Inventory Found' });
    }
    return res.send({ message: data });
  } catch (error) {
    return res.send({ message: 'An Error Occured' });
  }
};

const updateReturnInventory = async (req, res) => {
  try {
    const { returnInventoryId } = req.params;
    const {
      invoice, dispatch_date, product, comment,
    } = req.body;
    const data = await returnInventoryServices.updateReturnInventory({
      returnInventoryId, invoice, dispatch_date, product, comment,
    });
    if (!data) {
      return res.send({ message: 'Unable to update return Inventory' });
    }
    return res.send({ message: data });
  } catch (error) {
    console.log(error);
    return res.send({ message: 'An Error Occured' });
  }
};

const deleteReturnInventory = async (req, res) => {
  try {
    const { returnInventoryId } = req.params;
    const deletedinventory = await returnInventoryServices.deleteReturnInventory({ returnInventoryId });
    if (!deletedinventory) {
      return res.send({ message: 'Unable to delete return inventory' });
    }
    return res.send({ data: deletedinventory });
  } catch (error) {
    return res.send({ message: 'An error Occured' });
  }
};

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
