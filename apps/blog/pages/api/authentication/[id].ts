import { sendResponse } from '@k-workspace/utils';
import apiHandler from '../../../middleware/apiHandler';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getCurrentUser } from './controllers';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, query } = req;

  switch (method) {
    case 'GET': {
      const data = await getCurrentUser(query);
      return sendResponse(res, data);
    }
    default:
      res.status(405).json(`Method ${method} Not Allowed`);
  }
}
export default apiHandler(handler);
