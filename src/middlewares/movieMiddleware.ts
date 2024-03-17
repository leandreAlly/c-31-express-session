import { Request, Response, NextFunction } from 'express';
import validateMovie from '../validations/movie';

const isValid = (req: Request, res: Response, next: NextFunction) => {
  const { error } = validateMovie(req.body);

  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    next();
  } catch (error) {
    console.log('error', error);
  }
};

export default isValid;
