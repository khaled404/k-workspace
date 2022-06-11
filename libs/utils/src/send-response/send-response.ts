/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextApiResponse } from 'next';

const sendResponse = (res: NextApiResponse, data: any) => {
  if (data?.error) return res.status(400).json(data);
  return res.status(200).json({ data });
};

const sendError = (errorMassage: string) => {
  return { error: errorMassage };
};

export { sendResponse, sendError };
