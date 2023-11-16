const asyncHandler = require('../../utils/asyncHandler');
const { dataServices } = require('../../services');
const { ErrorHandler } = require('../../utils/errorHandlers');

const getChartData = asyncHandler(async (req, res, next) => {
  const chartData = await dataServices.getChartData();

  if (!chartData) {
    return next(new ErrorHandler('No chart data found', 404));
  }
  return res.status(200).json(chartData);
});

module.exports = { getChartData };
