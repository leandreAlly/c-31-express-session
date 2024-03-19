import bcrypt from 'bcrypt';

export class PasswordUtil {
  static async toHash(password: string): Promise<string> {
    // const hashedPassword = bcrypt.hash(password, 10);
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(password, salt);
  }

  static async compareHash(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }
}
