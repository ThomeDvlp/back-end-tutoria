import 'reflect-metadata';
import  express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

import '@shared/container';
import createConnection from '@shared/infra/typeorm';
import { AppError } from '@shared/errors/AppError';
import { router } from './routes';

createConnection();

const app = express();

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction)=>{
  if(err instanceof  AppError){
    return res.status(err.statusCode).json({message: err.message});
  }
  return res.status(500).json({message: `Internal server error - ${err.message}`});
} )

export { app };