const { supplierServices } = require('../../services');

const getSuppliers = async (req, res) => {
  try {
    const suppliers = await supplierServices.getSuppliers();
    if (!suppliers || suppliers.length === 0) {
      return res.send({ message: 'No suppliers Found' });
    }

    return res.send({ data: suppliers });
  } catch (error) {
    return res.send({ message: 'An error occured' });
  }
};

const addSupplier = async (req, res) => {
  try {
    const { supplier_name, location, date } = req.body;
    const addedSupplier = await supplierServices.addSupplier({ supplier_name, location, date });
    if (!addedSupplier) {
      return res.send({ message: 'Unable to Add supplier' });
    }

    return res.send({ data: addedSupplier });
  } catch (error) {
    return res.send({ message: 'An error occured' });
  }
};

const deleteSupplier = async (req, res) => {
  try {
    const { supplierId } = req.params;
    const deletedSupplier = await supplierServices.deleteSupplier({ supplierId });
    if (!deletedSupplier || deletedSupplier.length === 0) {
      return res.send({ message: 'Unable to delete supplier' });
    }

    return res.send({ data: deletedSupplier });
  } catch (error) {
    return res.send({ message: 'An error occured' });
  }
};

const updateSupplier = async (req, res) => {
  try {
    const { supplierId } = req.params;
    const { supplier_name, location, date } = req.body;
    const updatedSupplier = await supplierServices.updateSupplier({
      supplierId, supplier_name, location, date,
    });
    if (!updatedSupplier) {
      return res.send({ message: 'Unable to update supplier' });
    }

    return res.send({ data: updatedSupplier });
  } catch (error) {
    return res.send({ message: 'An error occured' });
  }
};

module.exports = {
  getSuppliers,
  addSupplier,
  deleteSupplier,
  updateSupplier,
};
