import { Router } from 'express';
import { movieRoutes } from './movie.routes';

const apiRouter = Router();

apiRouter.use('/movie', movieRoutes);

export default apiRouter;
