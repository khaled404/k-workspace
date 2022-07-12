/* eslint-disable @typescript-eslint/no-unused-vars */
import * as bodyParser from 'body-parser';
// import express, { NextFunction, Response, Request } from 'express';
import * as express from 'express';
import mongoose from 'mongoose';
import AppRouter from './routes';
import { config } from 'dotenv';
import * as path from 'path';
import type { TError } from './types';
import environment from './environments/environment';

const app = express();

app.use(bodyParser.json());
app.use((_req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

AppRouter.map((item) => {
  app.use(item.routeName, item.routes);
});

app.use((error: TError, req, res, next) => {
  res.status(error.status).json(error);
});

mongoose
  .connect(environment.mongooseConnect)
  .then(() => {
    app.listen(environment.PORT);
  })
  .catch((err) => console.log(err));
