const { SupplierModel } = require('../../models');

const getSuppliers = async () => SupplierModel.find({});

const addSupplier = async ({ supplier_name, location, date }) => {
  const addedSupplier = await SupplierModel.create({ supplier_name, location, date });
  return addedSupplier;
};

const deleteSupplier = async ({ supplierId }) => {
  const deletedSupplier = await SupplierModel.findByIdAndDelete(supplierId);
  return deletedSupplier;
};

const updateSupplier = async ({
  supplierId, supplier_name, location, date,
}) => {
  const data = {
    supplier_name, location, date,
  };
  const updatedSupplier = await SupplierModel.findByIdAndUpdate(supplierId, data, { new: true });
  return updatedSupplier;
};

module.exports = {
  getSuppliers,
  addSupplier,
  deleteSupplier,
  updateSupplier,
};
