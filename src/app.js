const express = require('express');
const cors = require('cors');
const { environmentVariables } = require('./config');
const { globalErrorHandler, ErrorHandler } = require('./utils/errorHandlers');

const apiRoutes = require('./routes');
const { connectMongoDB } = require('./config/mongo.connect');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  console.log('working fine');
  res.send('working fine');
});

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
