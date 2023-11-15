const express = require('express');
const cors = require('cors');
const { environmentVariables } = require('./config');
const { globalErrorHandler, ErrorHandler } = require('./utils/errorHandlers');
const { DispatchedOrdersModel } = require('./models');

const apiRoutes = require('./routes');
const { connectMongoDB } = require('./config/mongo.connect');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  console.log('working fine');
  res.send('working fine');
});

//

app.get('/api/salesdata', async (req, res) => {
  try {
    // Aggregate sales data from MongoDB
    // const salesData = await DispatchedOrdersModel.aggregate([
    //   {
    //     $group: {
    //       _id: '$dispatch_date',
    //       totalSales: { $sum: '$total_amount' },
    //     },
    //   },
    //   {
    //     $sort: { _id: 1 },
    //   },
    // ]);

    // const salesData = await DispatchedOrdersModel.aggregate([
    //   {
    //     $group: {
    //       _id: { $dateToString: { format: '%Y-%m', date: '$dispatch_date' } },
    //       totalSales: { $sum: '$total_amount' },
    //     },
    //   },
    //   {
    //     $sort: { _id: 1 },
    //   },
    // ]);

    // const salesData = await DispatchedOrdersModel.aggregate([
    //   {
    //     $lookup: {
    //       from: 'products',
    //       localField: 'product_id',
    //       foreignField: '_id',
    //       as: 'productInfo',
    //     },
    //   },
    //   {
    //     $unwind: '$productInfo',
    //   },
    //   {
    //     $group: {
    //       _id: { $dateToString: { format: '%Y-%m', date: '$dispatch_date' } },
    //       totalSales: { $sum: '$total_amount' },
    //       totalCost: { $sum: '$productInfo.price' },
    //       totalProfit: { $sum: { $subtract: ['$total_amount', '$productInfo.price'] } },
    //     },
    //   },
    //   {
    //     $sort: { _id: 1 },
    //   },
    // ]);

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
          _id: { $dateToString: { format: '%Y-%m', date: '$dispatch_date' } },
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

    // Format the data as needed by your chart
    const chartData = salesData.map((item) => ({
      month: item._id,
      sale: item.totalSales,
      profit: item.totalProfit,
    }));

    // Send the formatted data as JSON
    res.json(chartData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

//
app.use(apiRoutes);
app.all('*', (req, res, next) => {
  next(new ErrorHandler(`URL ${req.originalUrl} not found on the server`, 404));
});

app.use(globalErrorHandler);

connectMongoDB().then(() => {
  app.listen(environmentVariables.APP_PORT || 8080, (err) => {
    if (err) {
      console.log(err);
    }
  });

  console.info('Connected to MongoDB Atlas Dashboard Cluster');
  console.info(`server running on ${environmentVariables.APP_HOST}:${environmentVariables.APP_PORT}`);
}).catch((_error) => {
  console.log(_error);
});
