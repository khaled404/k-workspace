import type { NextApiRequest, NextApiResponse } from 'next';
import { verify } from 'jsonwebtoken';

async function jwtMiddleware(req: NextApiRequest, res: NextApiResponse) {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).send({ message: 'No token provided.' });

  verify(token, process.env.secretToken, function (err, decoded) {
    if (err)
      return res.status(500).send({ message: 'Failed to authenticate token.' });

    res.status(200).send(decoded);
  });
}

export default jwtMiddleware;
