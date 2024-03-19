import { Request, Response } from 'express';
import User from '../models/User';
import { PasswordUtil } from '../utils/bcrypt.util';
import { JwtUtil } from '../utils/jwt.util';

type User = {
  name: string;
  email: string;
  password: string;
};

const signUp = async (req: Request<{}, {}, User>, res: Response) => {
  const { email } = req.body;

  const isUserExist = await User.findOne({ email });

  if (isUserExist)
    return res.status(409).json({ message: 'This user is already exist' });

  const hashedPassword = await PasswordUtil.toHash(req.body.password);

  const user = new User({
    ...req.body,
    password: hashedPassword,
  });

  user.save();

  const userData = {
    name: user.name,
    email: user.email,
  };

  return res
    .status(201)
    .json({ message: 'user saved sucessfully', data: userData });
};

const signIn = async (req: Request<{}, {}, User>, res: Response) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) return res.status(404).json({ message: 'wrong credential' });

  const isPasswordValid = await PasswordUtil.compareHash(
    req.body.password,
    user.password
  );

  if (!isPasswordValid)
    return res.status(404).json({ message: 'wrong credential' });

  const { _id, name } = user;

  const token = await JwtUtil.generateToken({ _id, name });

  return res.status(200).json({
    message: 'logged in successfully',
    data: { _id, name, email },
    token,
  });
};

export { signUp, signIn };
