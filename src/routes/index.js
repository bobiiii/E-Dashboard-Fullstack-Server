const express = require('express');
const userRoutes = require('./user.routes');

const apiRoutes = express.Router();

apiRoutes.use('/user', userRoutes);
apiRoutes.use('*', () => { console.log('page'); });

module.exports = apiRoutes;
