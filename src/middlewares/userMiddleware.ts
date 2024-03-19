import { Request, Response, NextFunction } from 'express';
import { JwtUtil } from '../utils/jwt.util';
import User from '../models/User';
import mongoose from 'mongoose';
import { IUserRequest } from '../interfaces';

const protectedRoute = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.header('Authorization'))
      return res.status(401).json({ message: 'Please sign in' });

    interface CustomRequest extends Request {
      user: IUserRequest;
    }

    const token = req.header('Authorization')?.split(' ')[1] as string;

    const userDetail = await JwtUtil.verifyToken(token);

    const userExist = await User.findOne({ _id: userDetail._id });

    if (!userExist) {
      return res.status(401).json({ message: 'user not found' });
    }
    const { _id, email } = userExist;

    (req as CustomRequest).user = { _id, email };

    next();
  } catch (error) {
    return res.status(401).json({ message: 'No valid credential' });
  }
};

export { protectedRoute };
