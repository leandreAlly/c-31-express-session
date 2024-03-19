import express from 'express';
import { signUp, signIn } from '../controllers/user.controllers';

const userRoutes = express.Router();

userRoutes.post('/register', signUp);
userRoutes.post('/login', signIn);

export { userRoutes };
