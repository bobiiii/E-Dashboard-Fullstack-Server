const { RemainingOrdersModel } = require('../../models');

const getRemainingOrders = async () => RemainingOrdersModel.find({});

const addRemainingOrder = async ({
  order_number,
  product_id,
  quantity,
  total_amount,
  location,
  address,
}) => {
  const response = await RemainingOrdersModel.create({
    order_number,
    product_id,
    quantity,
    total_amount,
    location,
    address,
  });
  return response;
};

const getRemainingOrderDetails = async ({
  remainingOrderId,
}) => {
  const response = await RemainingOrdersModel.findById(remainingOrderId);
  return response;
};

const updateRemainingOrder = async ({
  remainingOrderId, order_number,
  product_id,
  quantity,
  total_amount,
  location,
  address,
}) => {
  const data = {
    order_number,
    product_id,
    quantity,
    total_amount,
    location,
    address,
  };
  const response = await RemainingOrdersModel.findByIdAndUpdate(remainingOrderId, data, { new: true });
  return response;
};

const deleteRemainingOrder = async ({ remainingOrderId }) => {
  const response = await RemainingOrdersModel.findByIdAndDelete(remainingOrderId);
  return response;
};

module.exports = {
  getRemainingOrders,
  getRemainingOrderDetails,
  addRemainingOrder,
  updateRemainingOrder,
  deleteRemainingOrder,
};
