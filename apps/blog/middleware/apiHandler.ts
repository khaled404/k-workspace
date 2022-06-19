import { bodyParser } from '@k-workspace/utils';
import jwtMiddleware from './jwtMiddleware';
import connectDB from './mongodb';

function apiHandler(handler) {
  return async (req, res) => {
    connectDB(handler)(req, res);

    const request = { ...req, body: bodyParser(req.body) };

    try {
      await jwtMiddleware(req, res);
      await handler(request, res);
    } catch (err) {
      return res.status(500).end(err);
    }
  };
}

export default apiHandler;
