import connectDB from '../../../middleware/mongodb';
import Words from '../../../models/words';
import type { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;
  try {
    if (method === 'POST') {
      const newWord = JSON.parse(body);
      const words = new Words(newWord);
      const wordCreated = await words.save();
      return res
        .status(200)
        .json({ massage: 'added successfully', wordCreated });
    }
    const data = await Words.find();

    return res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error });
  }
}
export default connectDB(handler);
