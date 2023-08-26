const { invoiceServices, productServices } = require('../../services');

const getInvoices = async (req, res) => {
  try {
    const invoices = await invoiceServices.getInvoices();
    if (!invoices || invoices.length === 0) {
      return res.status(404).send('No invoices found.');
    }
    return res.send({ data: invoices });
  } catch (error) {
    return ('An error occured');
  }
};

const getInvoiceProducts = async (req, res) => {
  try {
    const { invoiceId } = req.params;
    const invoices = await invoiceServices.getInvoiceProducts({ _id: invoiceId });
    if (!invoices || invoices.length === 0) {
      return res.status(404).send('No products found for the provided invoice ID.');
    }
    return res.send({ data: invoices });
  } catch (error) {
    return ('An error occured');
  }
};

const addInvoice = async (req, res) => {
  try {
    const {
      products, invoice, date, supplier, warehouse, stock, total_price,
    } = req.body;

    const addedProductsIds = await productServices.addMultipleProducts(products);
    if (!addedProductsIds) {
      return res.send('products adding failed');
    }
    const addedInvoice = await invoiceServices.addInvoice({
      addedProductsIds, invoice, date, supplier, warehouse, stock, total_price,
    });

    return res.send({ message: addedInvoice });
  } catch (error) {
    console.log(error);
    return res.send('An error occured');
  }
};

module.exports = {
  getInvoices,
  addInvoice,
  getInvoiceProducts,
};
