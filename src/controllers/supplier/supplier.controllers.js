const { supplierServices } = require('../../services');
const asyncHandler = require('../../utils/asyncHandler');
const { ErrorHandler } = require('../../utils/errorHandlers');

const getSuppliers = asyncHandler(async (req, res, next) => {
  const suppliers = await supplierServices.getSuppliers();
  if (!suppliers || suppliers.length === 0) {
    next(new ErrorHandler('No suppliers found', 404));
  }

  return res.status(200).json({ data: suppliers });
});

const addSupplier = asyncHandler(async (req, res, next) => {
  const { supplier_name, location, date } = req.body;
  const addedSupplier = await supplierServices.addSupplier({ supplier_name, location, date });
  if (!addedSupplier) {
    next(new ErrorHandler('Unable to add supplier', 500));
  }

  return res.status(200).json({ data: addedSupplier });
});

const deleteSupplier = asyncHandler(async (req, res, next) => {
  const { supplierId } = req.params;
  const deletedSupplier = await supplierServices.deleteSupplier({ supplierId });
  if (!deletedSupplier || deletedSupplier.length === 0) {
    next(new ErrorHandler('Unable to delete supplier', 500));
  }

  return res.status(200).send('deleted successfylly');
});

const updateSupplier = asyncHandler(async (req, res, next) => {
  const { supplierId } = req.params;
  const { supplier_name, location, date } = req.body;
  const updatedSupplier = await supplierServices.updateSupplier({
    supplierId, supplier_name, location, date,
  });
  if (!updatedSupplier) {
    next(new ErrorHandler('Unable to update supplier', 500));
  }

  return res.status(200).json({ data: updatedSupplier });
});

module.exports = {
  getSuppliers,
  addSupplier,
  deleteSupplier,
  updateSupplier,
};
