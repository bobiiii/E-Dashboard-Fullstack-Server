const { ProductModel } = require('../../models');

const addProducts = async ({ title, quantity, price }) => {
  const data = { title, quantity, price };
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

module.exports = {
  addProducts,
  getProducts,
  addMultipleProducts,
};
