const express = require('express');
const { dispatchedOrdersControllers } = require('../../controllers');

const dispatchedOrdersRoute = express.Router();

dispatchedOrdersRoute.get('/dispatched-orders', dispatchedOrdersControllers.getDispatchedOrders);
dispatchedOrdersRoute.get('/:dispatchedOrderId', dispatchedOrdersControllers.getDispatchedOrderDetails);
dispatchedOrdersRoute.post('/dispatched-order', dispatchedOrdersControllers.addDispatchedOrder);
dispatchedOrdersRoute.put('/:dispatchedOrderId', dispatchedOrdersControllers.updateDispatchedOrder);
dispatchedOrdersRoute.delete('/:dispatchedOrderId', dispatchedOrdersControllers.deleteDispatchedOrder);

module.exports = dispatchedOrdersRoute;
