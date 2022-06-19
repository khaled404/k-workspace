type TBody = { [key: string]: unknown };

const bodyParser = (body: string | TBody): TBody | undefined => {
  if (!body) return undefined;
  if (typeof body === 'string') return JSON.parse(body);
  return body;
};

export { bodyParser, TBody };
