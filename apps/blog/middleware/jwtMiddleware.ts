import type { NextApiRequest, NextApiResponse } from 'next';
import { verify } from 'jsonwebtoken';

async function jwtMiddleware(req: NextApiRequest, res: NextApiResponse) {
  const token = req.headers['authorization'];
  if (!token) return 'No token provided.';

  await verify(token, process.env.secretToken, function (err, decoded) {
    if (err) return 'Failed to authenticate token.';
  });
}

export default jwtMiddleware;
