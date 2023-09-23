const { productServices } = require('../../services');
const { ErrorHandler } = require('../../utils/errorHandlers');
const asyncHandler = require('../../utils/asyncHandler');

const getProducts = asyncHandler(async (req, res, next) => {
  const products = await productServices.getProducts();
  if (!products) {
    return next(new ErrorHandler('No products found', 404));
  }
  return res.send({ data: products });
});

const addProduct = asyncHandler(async (req, res, next) => {
  const {
    title, desc, quantity, price, selling_price, imgURL,
  } = req.body;
  if ((!title && !quantity && !price && !selling_price)) {
    return next(new ErrorHandler('Please fill All Fields', 400));
  }
  const products = await productServices.addProduct({
    title, desc, quantity, price, selling_price, imgURL,
  });
  if (!products) {
    return next(new ErrorHandler('Unable to add Product', 500));
  }
  return res.status(200).json({ data: products });
});

const getProductDetails = asyncHandler(async (req, res, next) => {
  const { productId } = req.params;
  const productDetails = await productServices.getProductDetails({ productId });
  if (!productDetails.length && !productDetails) {
    return next(new ErrorHandler('Unable to add Product', 404));
  }
  return res.status(200).json({ data: productDetails });
});

const updateProduct = asyncHandler(async (req, res, next) => {
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
    return next(new ErrorHandler('Unable to update Product', 500));
  }
  return res.staus(200).json({ data: updatedProduct });
});

const deleteProduct = asyncHandler(async (req, res, next) => {
  const { productId } = req.params;
  const deletedProduct = await productServices.deleteProduct({ productId });
  if (!deletedProduct.length && !deletedProduct) {
    return next(new ErrorHandler('Unable to delete Product', 500));
  }
  return res.status(204).send('Product deleted successfully');
});

module.exports = {
  getProducts,
  addProduct,
  getProductDetails,
  updateProduct,
  deleteProduct,
};
