const { default: mongoose } = require('mongoose');
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

const getProducts = async () => {
  const response = await ProductModel.find({});
  return response;
};
const getProductDetails = async ({ productId }) => {
  const response = await ProductModel.findById(productId);
  return response;
};

// eslint-disable-next-line consistent-return
const addMultipleProducts = async (productsData) => {
  try {
    // eslint-disable-next-line consistent-return
    const addedProductId = await Promise.all(productsData.map(async (product) => {
      const { id } = product;
      if (!mongoose.Types.ObjectId.isValid(id)) {
        console.log(`Invalid ObjectId: ${id}`);
        return null; // Return null or another value to handle this case
      }

      const foundproduct = await ProductModel.findById(id);
      if (foundproduct) {
        foundproduct.quantity = parseInt(foundproduct.quantity, 10) + parseInt(product.quantity, 10); // Add product.quantity to foundproduct.quantity
        foundproduct.price = parseInt(product.price, 10);
        await foundproduct.save(); // Save the updated foundproduct

        // You can return the ID of the updated foundproduct if needed
        return foundproduct._id;
      }

      // return newProduct._id;
    }));
    return addedProductId;
  } catch (error) {
    console.log(error);
  }
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
