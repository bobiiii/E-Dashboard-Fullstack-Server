const express = require('express');
const cors = require('cors');
const { environmentVariables } = require('./config');
const apiRoutes = require('./routes');
const { connectMongoDB } = require('./config/mongo.connect');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', () => {
  console.log('working fine');
});

app.use(apiRoutes);

app.listen(environmentVariables.APP_PORT || 8080, (err) => {
  if (err) {
    console.log(err);
  }
  connectMongoDB().then(() => {
    console.info('Connected to MongoDB Atlas Dashboard Cluster');
    console.info(`server running on ${environmentVariables.APP_HOST}:${environmentVariables.APP_PORT}`);
  }).catch((_error) => {
    console.log(_error);
  });
});
