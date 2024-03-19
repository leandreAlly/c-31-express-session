import Jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

interface IUserData {
  _id: mongoose.Types.ObjectId;
  name: string;
}

interface IDecodedToken {
  _id: string;
  name: string;
  iat: number;
  exp: number;
}

export class JwtUtil {
  static async generateToken(userData: IUserData, exp = '1y'): Promise<string> {
    return Jwt.sign(userData, process.env.JWT_KEY!, { expiresIn: exp });
  }

  static async verifyToken(token: string): Promise<IDecodedToken> {
    return new Promise((resolve, reject) => {
      Jwt.verify(token, process.env.JWT_KEY!, (err, decoded) => {
        if (err) {
          reject(err);
        } else {
          resolve(decoded as IDecodedToken);
        }
        return decoded;
      });
    });
  }
}
