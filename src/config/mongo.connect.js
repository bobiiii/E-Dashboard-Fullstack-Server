const mongooose = require('mongoose');

const env = require('./env');

const connectMongoDB = async () => {
  try {
    mongooose.set('strictQuery', true);
    if (env.NODE_ENV === 'development') {
      await mongooose.connect(env.MONGO_URI_TEST, { useNewUrlParser: true, useUnifiedTopology: true });
    } else {
      await mongooose.connect(env.MONGO_URI, { useNewurlParser: true, useUnifiedTopology: true });
    }
  } catch (error) {
    console.error('Error Connecting to MongoDB ATlas', error);
    throw new Error(error);
  }
};

module.exports = {
  connectMongoDB,
};
