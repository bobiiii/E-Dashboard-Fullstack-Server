const {
  RemainingOrdersServices,
} = require('../../services');
const asyncHandler = require('../../utils/asyncHandler');
const { ErrorHandler } = require('../../utils/errorHandlers');

const getRemainingOrders = asyncHandler(async (req, res, next) => {
  const remainingOrders = await RemainingOrdersServices.getRemainingOrders();
  if (!remainingOrders || remainingOrders.length === 0) {
    next(new ErrorHandler('No remaining orders found', 404));
  }
  return res.status(200).json({ data: remainingOrders });
});

const getRemainingOrderDetails = asyncHandler(async (req, res, next) => {
  const { remainingOrderId } = req.params;
  const remainingOrders = await RemainingOrdersServices.getRemainingOrderDetails({ remainingOrderId });
  if (!remainingOrders || remainingOrders.length === 0) {
    next(new ErrorHandler('No remaining order found', 404));
  }
  return res.status(200).json({ data: remainingOrders });
});

const addRemainingOrder = asyncHandler(async (req, res, next) => {
  const {
    order_number,
    product_id,
    quantity,
    total_amount,
  } = req.body;

  const addedRemainingOrders = await RemainingOrdersServices.addRemainingOrder({
    order_number,
    product_id,
    quantity,
    total_amount,
  });
  if (!addedRemainingOrders) {
    next(new ErrorHandler('Unable to add remaining order', 500));
  }

  return res.status(200).json({ data: addedRemainingOrders });
});

const updateRemainingOrder = asyncHandler(async (req, res, next) => {
  const {
    order_number,
    product_id,
    quantity,
    total_amount,
  } = req.body;
  const { remainingOrderId } = req.params;
  const updatedRemainingOrder = await RemainingOrdersServices.updateRemainingOrder({
    remainingOrderId,
    order_number,
    product_id,
    quantity,
    total_amount,
  });
  if (!updatedRemainingOrder) {
    next(new ErrorHandler('Unable to update remaining order', 500));
  }
  return res.status(200).json({ data: updatedRemainingOrder });
});

const deleteRemainingOrder = asyncHandler(async (req, res, next) => {
  const { remainingOrderId } = req.params;
  const deletedRemainingOrder = await RemainingOrdersServices.deleteRemainingOrder({ remainingOrderId });
  if (!deletedRemainingOrder) {
    next(new ErrorHandler('Unable to update remaining order', 500));
  }
  return res.status(200).send('deleted successfully');
});

//

module.exports = {
  getRemainingOrders,
  getRemainingOrderDetails,
  addRemainingOrder,
  updateRemainingOrder,
  deleteRemainingOrder,
};
