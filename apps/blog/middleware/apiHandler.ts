import { bodyParser } from '@k-workspace/utils';
import mongoose from 'mongoose';
import jwtMiddleware from './jwtMiddleware';

function apiHandler(handler) {
  return async (req, res) => {
    if (!mongoose.connections[0].readyState) {
      mongoose.connect(process.env.mongodburl);
    }
    jwtMiddleware(req, res);
    return handler(req, res);
  };
}

export default apiHandler;
