const { DispatchedOrdersModel } = require('../../models');

const getDispatchedOrders = async () => DispatchedOrdersModel.find({});

const addDispatchedOrder = async ({
  order_number,
  dispatch_center,
  dispatch_date,
  total_amount,
}) => {
  const response = await DispatchedOrdersModel.create({
    order_number,
    dispatch_center,
    dispatch_date,
    total_amount,
  });
  return response;
};

const getDispatchedOrderDetails = async ({
  dispatchedOrderId,
}) => {
  const response = await DispatchedOrdersModel.findById(dispatchedOrderId);
  return response;
};

const updateDispatchedOrder = async ({
  dispatchedOrderId, order_number,
  dispatch_center,
  dispatch_date,
  total_amount,
}) => {
  const data = {
    order_number,
    dispatch_center,
    dispatch_date,
    total_amount,
  };
  const response = await DispatchedOrdersModel.findByIdAndUpdate(dispatchedOrderId, data, { new: true });
  return response;
};

const deleteDispatchedOrder = async ({ dispatchedOrderId }) => {
  const response = await DispatchedOrdersModel.findByIdAndDelete(dispatchedOrderId);
  return response;
};

module.exports = {
  getDispatchedOrders,
  getDispatchedOrderDetails,
  addDispatchedOrder,
  updateDispatchedOrder,
  deleteDispatchedOrder,
};
