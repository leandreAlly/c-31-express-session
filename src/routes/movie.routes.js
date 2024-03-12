const express = require('express');
const Movie = require('../models/Movie.js');
const httpMovie = require('../controllers/movie.controllers.js');
const isValid = require('../middlewares/movieMiddleware.js');

const movieRoutes = express.Router();

movieRoutes.post('/', isValid, httpMovie.httpCreateMovie);
movieRoutes.get('/', httpMovie.httpGetMovies);

module.exports = movieRoutes;
