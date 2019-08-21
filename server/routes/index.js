const Router = require('express').Router();
const authRouter = require('./v1/authRoutes');
const bucketListRouter = require('./v1/bucketRoutes');

Router.use('/v1', authRouter, bucketListRouter);

//on path '/' default to latest version(v1)
Router.use('/', authRouter, bucketListRouter);

module.exports = Router;