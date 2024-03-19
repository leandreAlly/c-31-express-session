import express from 'express';
import {
  httpCreateMovie,
  httpGetMovies,
} from '../controllers/movie.controllers';
import isValid from '../middlewares/movieMiddleware';
import { protectedRoute } from '../middlewares/userMiddleware';

const movieRoutes = express.Router();

movieRoutes.post('/', protectedRoute, isValid, httpCreateMovie);
movieRoutes.get('/', httpGetMovies);

export { movieRoutes };
