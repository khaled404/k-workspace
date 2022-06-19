import { TBody } from '@k-workspace/types';

const bodyParser = (body: string | TBody): TBody | undefined => {
  if (!body) return undefined;
  if (typeof body === 'string') return JSON.parse(body);
  return body;
};

export { bodyParser };
