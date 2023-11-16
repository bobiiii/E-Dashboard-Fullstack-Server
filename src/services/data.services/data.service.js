const { DispatchedOrdersModel } = require('../../models');

const getChartData = async () => {
  const salesData = await DispatchedOrdersModel.aggregate([
    {
      $lookup: {
        from: 'products',
        localField: 'product_id',
        foreignField: '_id',
        as: 'productInfo',
      },
    },
    {
      $unwind: '$productInfo',
    },
    {
      $group: {
        _id: { $dateToString: { format: '%m-%Y', date: '$dispatch_date' } },
        totalSales: { $sum: '$total_amount' },
        totalCost: { $sum: { $multiply: ['$productInfo.price', '$quantity'] } },
        totalProfit: {
          $sum: { $subtract: ['$total_amount', { $multiply: ['$productInfo.price', '$quantity'] }] },
        },
      },
    },
    {
      $sort: { _id: 1 },
    },
  ]);

  const chartData = salesData.map((item) => ({
    month: item._id,
    sale: item.totalSales,
    profit: item.totalProfit,
  }));

  return chartData;
};
module.exports = {
  getChartData,
};
