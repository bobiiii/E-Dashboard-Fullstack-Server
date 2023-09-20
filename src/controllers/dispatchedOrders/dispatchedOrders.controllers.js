const {
  DispatchedOrdersServices,
} = require('../../services');

const getDispatchedOrders = async (req, res) => {
  try {
    const dispatchedOrders = await DispatchedOrdersServices.getDispatchedOrders();
    if (!dispatchedOrders || dispatchedOrders.length === 0) {
      return res.status(404).send('No dispatched Order found.');
    }
    return res.send({ data: dispatchedOrders });
  } catch (error) {
    return ({ message: 'An error occured' });
  }
};

const getDispatchedOrderDetails = async (req, res) => {
  try {
    const { dispatchedOrderId } = req.params;
    const dispatchedOrder = await DispatchedOrdersServices.getDispatchedOrderDetails({ dispatchedOrderId });
    if (!dispatchedOrder || dispatchedOrder.length === 0) {
      return res.status(404).send('No dispatched Order found for the provided ID.');
    }
    return res.send({ data: dispatchedOrder });
  } catch (error) {
    return ({ message: 'An error occured' });
  }
};

const addDispatchedOrder = async (req, res) => {
  try {
    const {
      order_number,
      dispatch_center,
      dispatch_date,
      total_amount,
    } = req.body;

    const addeDispatchedOrder = await DispatchedOrdersServices.addDispatchedOrder({
      order_number,
      dispatch_center,
      dispatch_date,
      total_amount,
    });
    if (!addeDispatchedOrder) {
      return res.send({ message: 'Adding dispatched Order failed' });
    }

    return res.send({ data: addeDispatchedOrder });
  } catch (error) {
    console.log(error);
    return res.send({ message: 'An error occured' });
  }
};

const updateDispatchedOrder = async (req, res) => {
  try {
    const {
      order_number,
      dispatch_center,
      dispatch_date,
      total_amount,
    } = req.body;
    const { dispatchedOrderId } = req.params;
    const updatedRemainingOrder = await DispatchedOrdersServices.updateDispatchedOrder({
      dispatchedOrderId,
      order_number,
      dispatch_center,
      dispatch_date,
      total_amount,
    });
    if (!updatedRemainingOrder) {
      return res.send({ message: 'Unable to update dispatched Order' });
    }
    return res.send({ data: updatedRemainingOrder });
  } catch (error) {
    console.log(error);
    return res.send({ message: 'An error Occured' });
  }
};

const deleteDispatchedOrder = async (req, res) => {
  try {
    const { dispatchedOrderId } = req.params;
    const deletedRemainingOrder = await DispatchedOrdersServices.deleteDispatchedOrder({ dispatchedOrderId });
    if (!deletedRemainingOrder) {
      return res.send({ message: 'Unable to delete dispatched Order' });
    }
    return res.send({ data: deletedRemainingOrder });
  } catch (error) {
    return res.send({ message: 'An error Occured' });
  }
};

//

module.exports = {
  getDispatchedOrders,
  getDispatchedOrderDetails,
  addDispatchedOrder,
  updateDispatchedOrder,
  deleteDispatchedOrder,
};
