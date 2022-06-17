import { sendResponse } from '@k-workspace/utils';
import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../../middleware/mongodb';
import { addNewWord, deleteWords, getWords } from './controllers';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;
  switch (method) {
    case 'POST': {
      const data = await addNewWord(body);
      return sendResponse(res, data);
    }
    case 'GET': {
      const data = await getWords();
      return sendResponse(res, data);
    }
    case 'DELETE': {
      const data = await deleteWords(body);
      return sendResponse(res, data);
    }
    default:
      res.status(405).json('Method not allowed');
  }
}
export default connectDB(handler);
