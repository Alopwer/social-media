import dotenv from 'dotenv';
dotenv.config();

import { App } from './app';
import { db } from './db';
import { isOperationalError, logError } from './middlewares/errorHandler';
import UsersController from './users/users.controller';

const PORT = process.env.SERVER_PORT!;

const app = new App(
  [
    new UsersController()
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

process.on('uncaughtException', error => {
  logError(error)

  if (!isOperationalError(error)) {
    process.exit(1)
  }
})

process.on('unhandledRejection', error => {
  throw error
})