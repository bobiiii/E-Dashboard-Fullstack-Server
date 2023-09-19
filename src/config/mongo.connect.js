const mongooose = require('mongoose');

const env = require('./env');

const connectMongoDB = async () => {
  try {
    mongooose.set('strictQuery', true);
    if ("development" === 'test') {
      await mongooose.connect("mongodb+srv://babarkhan:EDashboard@dashboarddb.cmk8ncf.mongodb.net/?retryWrites=true&w=majority"
      , { useNewurlParser: true, useUnifiedTopology: true });
    } else {
      await mongooose.connect("mongodb+srv://babarkhan:EDashboard@dashboarddb.cmk8ncf.mongodb.net/?retryWrites=true&w=majority", { useNewurlParser: true, useUnifiedTopology: true });
    }
  } catch (error) {
    console.error('Error Connecting to MongoDB ATlas', error);
    throw new Error(error);
  }
};

module.exports = {
  connectMongoDB,
};
