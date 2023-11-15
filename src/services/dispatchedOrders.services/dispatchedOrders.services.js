const { DispatchedOrdersModel, RemainingOrdersModel, ProductModel } = require('../../models');

const getDispatchedOrders = async () => DispatchedOrdersModel.find();

const addDispatchedOrder = async ({
  product_id,
  order_number,
  dispatch_center,
  dispatch_date,
  total_amount,
  quantity,
}) => {
  const response = await DispatchedOrdersModel.create({
    product_id,
    order_number,
    dispatch_center,
    dispatch_date,
    total_amount,
    quantity,
  });

  if (response) {
    await RemainingOrdersModel.findByIdAndDelete(response.order_number);

    try {
      await ProductModel.findByIdAndUpdate({ _id: response.product_id }, { $inc: { quantity: -response.quantity } }, { new: true });
    } catch (error) {
      console.log(error);
    }
  }

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
  quantity,
}) => {
  const data = {
    order_number,
    dispatch_center,
    dispatch_date,
    total_amount,
    quantity,
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
