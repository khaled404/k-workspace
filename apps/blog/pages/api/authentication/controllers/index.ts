/* eslint-disable @typescript-eslint/no-explicit-any */
import type { TBody } from '@k-workspace/types';
import { convertToSchema, sendError } from '@k-workspace/utils';
import { sign } from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models';

const extraKeys = ['password'];

export const addNewUser = async (body: TBody) => {
  const { email, name, password } = body;

  try {
    const user = await User.findOne({ email });
    if (user) return sendError('this email already exists.');
    const hashedPw = await bcrypt.hash(password, 12);
    if (hashedPw) {
      const user = new User({
        email,
        name,
        password: hashedPw,
      });
      await user.save();
      return 'User created!';
    }
  } catch (error) {
    return sendError(error);
  }
};

export const loginUser = async (body: TBody) => {
  const { email, password } = body;
  try {
    const user = await User.findOne({ email });
    if (!user) return sendError('A user could not be found.', 401);

    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) return sendError('Wrong password!', 401);

    const token = sign(
      { email: user.email, userId: user._id.toString() },
      process.env.secretToken,
      { expiresIn: '1h' }
    );
    const sendUser = convertToSchema({ ...user, extraKeys });

    return {
      token,
      ...sendUser,
    };
  } catch (error) {
    return sendError(error);
  }
};

export const getCurrentUser = async (body: TBody) => {
  const { id } = body;
  try {
    const user = await User.findById(id);
    if (!user) return sendError('Not authenticated', 401);
    return convertToSchema({ ...user, extraKeys });
  } catch (error) {
    return sendError(error);
  }
};
