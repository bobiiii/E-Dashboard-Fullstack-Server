const express = require('express');
const { dispatchedCentersControllers } = require('../../controllers');

const dispatchedCentersRoute = express.Router();

dispatchedCentersRoute.get('/dispatched-centers', dispatchedCentersControllers.getDispatchedCenters);
dispatchedCentersRoute.get('/:dispatchedCenterId', dispatchedCentersControllers.getDispatchedCenterDetails);
dispatchedCentersRoute.post('/dispatched-center', dispatchedCentersControllers.addDispatchedCenter);
dispatchedCentersRoute.put('/:dispatchedCenterId', dispatchedCentersControllers.updateDispatchedCenter);
dispatchedCentersRoute.delete('/:dispatchedCenterId', dispatchedCentersControllers.deleteDispatchedCenter);

module.exports = dispatchedCentersRoute;
