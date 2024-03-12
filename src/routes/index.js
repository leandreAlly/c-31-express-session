const express = require('express');
const movieRoutes = require('./movie.routes');

const apiRouter = express.Router();

apiRouter.use('/movie', movieRoutes);

module.exports = apiRouter;
