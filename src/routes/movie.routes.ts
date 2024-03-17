import express from 'express';
import {
  httpCreateMovie,
  httpGetMovies,
} from '../controllers/movie.controllers';
import isValid from '../middlewares/movieMiddleware';

const movieRoutes = express.Router();

movieRoutes.post('/', isValid, httpCreateMovie);
movieRoutes.get('/', httpGetMovies);

export { movieRoutes };
