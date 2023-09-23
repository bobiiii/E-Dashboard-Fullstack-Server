const { ProductModel } = require('../../models');

const addProduct = async ({
  title, desc, quantity, price, selling_price, imgURL,
}) => {
  const data = {
    title, desc, quantity, price, selling_price, imgURL,
  };
  console.log(data);
  const response = await ProductModel.create(data);
  return response;
};

const addMultipleProducts = async (products) => {
  const addedProductId = await Promise.all(products.map(async (product) => {
    const newProduct = new ProductModel(product);
    await newProduct.save();
    return newProduct._id;
  }));
  return addedProductId;
};

const getProducts = async () => {
  const response = await ProductModel.find({});
  return response;
};
const getProductDetails = async ({ productId }) => {
  const response = await ProductModel.findById(productId);
  return response;
};
const updateProduct = async ({
  productId, title, desc, quantity, price, selling_price, imgURL,
}) => {
  const data = {
    title, desc, quantity, price, selling_price, imgURL,
  };
  const response = await ProductModel.findByIdAndUpdate(productId, data, { new: true });
  return response;
};

const deleteProduct = async ({ productId }) => ProductModel.findByIdAndDelete({ _id: productId });

module.exports = {
  addProduct,
  getProducts,
  getProductDetails,
  addMultipleProducts,
  updateProduct,
  deleteProduct,
};
