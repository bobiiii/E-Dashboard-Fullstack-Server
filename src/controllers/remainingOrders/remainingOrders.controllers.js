const {
  RemainingOrdersServices,
} = require('../../services');

const getRemainingOrders = async (req, res) => {
  try {
    const remainingOrders = await RemainingOrdersServices.getRemainingOrders();
    if (!remainingOrders || remainingOrders.length === 0) {
      return res.status(404).send('No Remaining Order found.');
    }
    return res.send({ data: remainingOrders });
  } catch (error) {
    return ({ message: 'An error occured' });
  }
};

const getRemainingOrderDetails = async (req, res) => {
  try {
    const { remainingOrderId } = req.params;
    const remainingOrders = await RemainingOrdersServices.getRemainingOrderDetails({ remainingOrderId });
    if (!remainingOrders || remainingOrders.length === 0) {
      return res.status(404).send('No Remaining Order found for the provided ID.');
    }
    return res.send({ data: remainingOrders });
  } catch (error) {
    return ({ message: 'An error occured' });
  }
};

const addRemainingOrder = async (req, res) => {
  try {
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
      return res.send({ message: 'Adding Remaining Order failed' });
    }

    return res.send({ data: addedRemainingOrders });
  } catch (error) {
    console.log(error);
    return res.send({ message: 'An error occured' });
  }
};

const updateRemainingOrder = async (req, res) => {
  try {
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
      return res.send({ message: 'Unable to update Remaining Order' });
    }
    return res.send({ data: updatedRemainingOrder });
  } catch (error) {
    console.log(error);
    return res.send({ message: 'An error Occured' });
  }
};

const deleteRemainingOrder = async (req, res) => {
  try {
    const { remainingOrderId } = req.params;
    const deletedRemainingOrder = await RemainingOrdersServices.deleteRemainingOrder({ remainingOrderId });
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
  getRemainingOrders,
  getRemainingOrderDetails,
  addRemainingOrder,
  updateRemainingOrder,
  deleteRemainingOrder,
};
