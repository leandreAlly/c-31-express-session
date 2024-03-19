import mongoose from 'mongoose';

export interface IUserRequest {
  _id: mongoose.Types.ObjectId;
  email: string;
}
