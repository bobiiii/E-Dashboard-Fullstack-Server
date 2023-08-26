const InvoiceModel = require('../../models/invoice.model');

const addInvoice = async ({
  addedProductsIds, invoice, date, supplier, warehouse, stock, total_price,
}) => {
  const response = await InvoiceModel.create({
    products: addedProductsIds, invoice, date, supplier, warehouse, stock, total_price,
  });
  return response;
};

const getInvoices = async () => {
  const invoices = await InvoiceModel.find({});
  return invoices;
};

const getInvoiceProducts = async ({ _id }) => {
  console.log(_id, 'servc _id');
  const invoices = await InvoiceModel.findById({ _id }).populate('products');
  return invoices;
};

module.exports = {
  addInvoice,
  getInvoices,
  getInvoiceProducts,
};
