import { bodyParser, sendResponse } from '@k-workspace/utils';
import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../../middleware/mongodb';
import { loginUser } from './controllers';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const body = bodyParser(req.body);
  switch (method) {
    case 'POST': {
      const data = await loginUser(body);
      return sendResponse(res, data);
    }
    default:
      res.status(405).json(`Method ${method} Not Allowed`);
  }
}
export default connectDB(handler);
