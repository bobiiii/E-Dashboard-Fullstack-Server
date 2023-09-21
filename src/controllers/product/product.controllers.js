const { productServices } = require('../../services');

const getProducts = async (req, res) => {
  try {
    const products = await productServices.getProducts();
    if (!products) {
      return res.send('No Products Found!');
    }
    return res.send({ data: products });
  } catch (error) {
    console.log(error);
    return res.send('Error occured');
  }
};

const addProduct = async (req, res) => {
  try {
    const {
      title, desc, quantity, price, selling_price, imgURL,
    } = req.body;
    if ((!title && !quantity && !price && !selling_price)) {
      return res.send('Please fill valid data');
    }
    const products = await productServices.addProduct({
      title, desc, quantity, price, selling_price, imgURL,
    });
    if (!products) {
      return res.send('Unable to add Product');
    }
    return res.send({ data: products });
  } catch (error) {
    console.log(error);
    return res.send('Error occured');
  }
};

const getProductDetails = async (req, res) => {
  try {
    const { productId } = req.params;
    const productDetails = await productServices.getProductDetails({ productId });
    if (!productDetails.length && !productDetails) {
      return res.send('Product details not found');
    }
    return res.send({ data: productDetails });
  } catch (error) {
    return res.send('An error occurde');
  }
};

const updateProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const {
      title, desc, quantity, price, selling_price, imgURL,
    } = req.body;
    const updatedProduct = await productServices.updateProduct({
      productId,
      title,
      desc,
      quantity,
      price,
      selling_price,
      imgURL,
    });
    if (!updatedProduct) {
      return res.send('Unable to update Product');
    }
    return res.send({ data: updatedProduct });
  } catch (error) {
    console.log(error);
    return res.send('Error occured');
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const deletedProduct = await productServices.deleteProduct({ productId });
    if (!deletedProduct.length && !deletedProduct) {
      return res.send('Product could not be deleted');
    }
    return res.send('Product deleted success');
  } catch (error) {
    return res.send('An error occurde');
  }
};

module.exports = {
  getProducts,
  addProduct,
  getProductDetails,
  updateProduct,
  deleteProduct,
};
