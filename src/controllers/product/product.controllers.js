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

const addProducts = async (req, res) => {
  try {
    const { title, quantity, price } = req.body;
    if ((!title && !quantity && !price)) {
      return res.send('Please fill valid data');
    }
    const products = await productServices.addProducts({ title, quantity, price });
    if (!products) {
      return res.send('Unable to add Product');
    }
    return res.send({ data: products });
  } catch (error) {
    console.log(error);
    return res.send('Error occured');
  }
};

module.exports = {
  getProducts,
  addProducts,
};
