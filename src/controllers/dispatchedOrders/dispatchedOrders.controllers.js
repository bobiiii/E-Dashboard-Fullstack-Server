const {
  RemainingOrdersServices,
} = require('../../services');

const getDispatchedOrders = async (req, res) => {
  try {
    const dispatchedOrders = await DispatchedOrdersServices.getDispatchedOrders();
    if (!dispatchedOrders || dispatchedOrders.length === 0) {
      return res.status(404).send('No Remaining Order found.');
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
      product_id,
      quantity,
      total_amount,
    } = req.body;

    const addeDispatchedOrder = await RemainingOrdersServices.addDispatchedOrder({
      order_number,
      product_id,
      quantity,
      total_amount,
    });
    if (!addeDispatchedOrder) {
      return res.send({ message: 'Adding Remaining Order failed' });
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
      product_id,
      quantity,
      total_amount,
    } = req.body;
    const { remainingOrderId } = req.params;
    const updatedRemainingOrder = await RemainingOrdersServices.updateDispatchedOrder({
      remainingOrderId,
      order_number,
      product_id,
      quantity,
      total_amount,
    });
    if (!updatedRemainingOrder) {
      return res.send({ message: 'Unable to update Remaining Order' });
    }
    return res.send({ data: updatedRemainingOrder });
  } catch (error) {
    console.log(error);
    return res.send({ message: 'An error Occured' });
  }
};

const deleteDispatchedOrder = async (req, res) => {
  try {
    const { remainingOrderId } = req.params;
    const deletedRemainingOrder = await RemainingOrdersServices.deleteDispatchedOrder({ remainingOrderId });
    if (!deletedRemainingOrder) {
      return res.send({ message: 'Unable to delete Remaining Order' });
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
