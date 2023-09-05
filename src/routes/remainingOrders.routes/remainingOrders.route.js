const express = require('express');
const { remainingOrdersControllers } = require('../../controllers');

const remainingOrdersRoute = express.Router();

remainingOrdersRoute.get(
  '/remaining-orders',
  remainingOrdersControllers.getRemainingOrders
);
remainingOrdersRoute.get(
  '/:remainingOrderId',
  remainingOrdersControllers.getRemainingOrderDetails
);
remainingOrdersRoute.post(
  '/remaining-order',
  remainingOrdersControllers.addRemainingOrder
);
remainingOrdersRoute.put(
  '/:remainingOrderId',
  remainingOrdersControllers.updateRemainingOrder
);
remainingOrdersRoute.delete(
  '/:remainingOrderId',
  remainingOrdersControllers.deleteRemainingOrder
);

module.exports = remainingOrdersRoute;
