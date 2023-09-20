const mongooose = require('mongoose');
const {environmentVariables} = require('./index')
const env = require('./env');

const connectMongoDB = async () => {
  try {
    mongooose.set('strictQuery', true);
    if (environmentVariables.NODE_ENV === "development") {
      await mongooose.connect(environmentVariables.MONGO_URI_TEST
      , { useNewurlParser: true, useUnifiedTopology: true });
    } else {
      await mongooose.connect(environmentVariables.MONGO_URI_TEST, { useNewurlParser: true, useUnifiedTopology: true });
    }
  } catch (error) {
    console.error('Error Connecting to MongoDB ATlas', error);
    throw new Error(error);
  }
};

module.exports = {
  connectMongoDB,
};
