// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

module.exports = {
  APP_PORT: process.env.APP_PORT || '8080',
  APP_HOST: process.env.APP_HOST,
  NODE_ENV: process.env.NODE_ENV,
  MONGO_URI_TEST: process.env.MONGO_URI_TEST,
  MONGO_URI: process.env.MONGO_URI,
  SECRET_KEY: process.env.SECRET_KEY,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
  JWT_MAX_AGE: process.env.JWT_MAX_AGE,
};
