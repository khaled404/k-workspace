/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextApiResponse } from 'next';

const sendResponse = (res: NextApiResponse, data: any, status = 200) => {
  if (data?.error) return res.status(data.status).json({ error: data.error });
  if (typeof data === 'string') res.status(status).json({ message: data });
  return res.status(status).json(data);
};

const sendError = (errorMassage: string, status = 400) => {
  return { error: errorMassage, status };
};

export { sendResponse, sendError };
