/* eslint-disable @typescript-eslint/no-explicit-any */
// import { addNewWord, getAllWords } from '@k-workspace/json-data-provider';
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import { join } from 'path';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // const { method, body } = req;
  try {
    // if (method === 'POST') {
    //   const newWord = JSON.parse(body);
    //   addNewWord(newWord);
    //   return res.status(200).json({ massage: 'added successfully' });
    // }

    const file: any = fs.readFileSync('/data/words/words.json');
    const data = JSON.parse(file);

    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error });
  }
}
