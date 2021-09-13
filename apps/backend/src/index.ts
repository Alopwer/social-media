import dotenv from 'dotenv';
dotenv.config();

import { App } from './app';
import AuthController from './auth/auth.controller';
import { db } from './db';
import { errorHandler } from './middlewares/errorHandler';
import UsersController from './users/users.controller';

const PORT = process.env.SERVER_PORT!;

const app = new App(
  [
    new UsersController(),
    new AuthController()
  ],
  PORT,
);

db.connectToDatabase((err) => {
  if (err) {
    console.log('Unable to connnect to database')
    process.exit(1)
  } else {
    app.listen()
  }
})

process.on('uncaughtException', (error: Error) => {
  errorHandler.handleError(error);
  if (!errorHandler.isTrustedError(error)) {
    process.exit(1);
  }
 });

 process.on('unhandledRejection', (reason: Error, promise: Promise<any>) => {
  throw reason;
 });