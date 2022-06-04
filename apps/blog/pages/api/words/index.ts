/* eslint-disable @typescript-eslint/no-explicit-any */
import { addNewWord, getAllWords } from '@k-workspace/json-data-provider';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function getWords(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;

  if (method === 'PUT') {
    const newWord = JSON.parse(body);
    addNewWord(newWord);
    return res.status(200).json({ massage: 'added successfully' });
  }
  const data = getAllWords();

  res.status(200).json({ data });
}
