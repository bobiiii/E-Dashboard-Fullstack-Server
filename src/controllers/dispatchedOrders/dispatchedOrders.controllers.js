const {
  DispatchedOrdersServices,
} = require('../../services');
const asyncHandler = require('../../utils/asyncHandler');
const { ErrorHandler } = require('../../utils/errorHandlers');

const getDispatchedOrders = asyncHandler(async (req, res, next) => {
  const dispatchedOrders = await DispatchedOrdersServices.getDispatchedOrders();

  if (!dispatchedOrders || !dispatchedOrders.length) {
    return next(new ErrorHandler('No dispatched order found', 404));
  }
  return res.status(200).json({ data: dispatchedOrders });
});

const getDispatchedOrderDetails = asyncHandler(async (req, res, next) => {
  const { dispatchedOrderId } = req.params;
  const dispatchedOrder = await DispatchedOrdersServices.getDispatchedOrderDetails({ dispatchedOrderId });
  if (!dispatchedOrder || dispatchedOrder.length === 0) {
    next(new ErrorHandler('No dispatched order found', 404));
  }

  return res.status(200).json({ data: dispatchedOrder });
});

const addDispatchedOrder = asyncHandler(async (req, res, next) => {
  const {
    product_id,
    order_number,
    dispatch_center,
    dispatch_date,
    total_amount,
    quantity,
  } = req.body;

  const addeDispatchedOrder = await DispatchedOrdersServices.addDispatchedOrder({
    product_id,
    order_number,
    dispatch_center,
    dispatch_date,
    total_amount,
    quantity,
  });
  if (!addeDispatchedOrder) {
    next(new ErrorHandler('Unable to add dispatched order', 500));
  }

  return res.status(200).json({ data: addeDispatchedOrder });
});

const updateDispatchedOrder = asyncHandler(async (req, res, next) => {
  const {
    order_number,
    dispatch_center,
    dispatch_date,
    total_amount,
    quantity,
  } = req.body;
  const { dispatchedOrderId } = req.params;
  const updatedRemainingOrder = await DispatchedOrdersServices.updateDispatchedOrder({
    dispatchedOrderId,
    order_number,
    dispatch_center,
    dispatch_date,
    total_amount,
    quantity,
  });
  if (!updatedRemainingOrder) {
    next(new ErrorHandler('Unable to update dispatched order', 500));
  }
  return res.status(200).json({ data: updatedRemainingOrder });
});

const deleteDispatchedOrder = asyncHandler(async (req, res, next) => {
  const { dispatchedOrderId } = req.params;
  const deletedRemainingOrder = await DispatchedOrdersServices.deleteDispatchedOrder({ dispatchedOrderId });
  if (!deletedRemainingOrder) {
    next(new ErrorHandler('Unable to delete dispatched order', 500));
  }
  return res.status(200).send('deleted successfully');
});

module.exports = {
  getDispatchedOrders,
  getDispatchedOrderDetails,
  addDispatchedOrder,
  updateDispatchedOrder,
  deleteDispatchedOrder,
};
