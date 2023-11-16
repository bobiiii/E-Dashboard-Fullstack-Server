const express = require('express');
const { dataController } = require('../../controllers');

const dataRoute = express.Router();
dataRoute.get('/chart-data', dataController.getChartData);

module.exports = dataRoute;
