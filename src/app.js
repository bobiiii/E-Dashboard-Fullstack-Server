const express = require('express');
const cors = require('cors');
const { environmentVariables } = require('./config');
const { globalErrorHandler, ErrorHandler } = require('./utils/errorHandlers');

const apiRoutes = require('./routes');
const { connectMongoDB } = require('./config/mongo.connect');
// const authenticator = require('./middleware/authMiddleware');

const app = express();

app.use(cors());
app.use(express.json());
// app.use(authenticator);

app.get('/', () => {
  console.log('working fine');
});

app.use(apiRoutes);
app.all('*', (req, res, next) => {
  next(new ErrorHandler(`URL ${req.originalUrl} not found on the server`, 404));
});

app.use(globalErrorHandler);

app.listen(8080 || 8080, (err) => {
  if (err) {
    console.log(err);
  }
  connectMongoDB().then(() => {
    console.info('Connected to MongoDB Atlas Dashboard Cluster');
    console.info(`server running on ${'http://localhost'}:${8080}`);
  }).catch((_error) => {
    console.log(_error);
  });
});
