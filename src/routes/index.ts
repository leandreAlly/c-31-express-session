import { Router } from 'express';
import { movieRoutes } from './movie.routes';
import { userRoutes } from './user.routes';

const apiRouter = Router();

apiRouter.use('/movie', movieRoutes);
apiRouter.use('/user', userRoutes);

export default apiRouter;
