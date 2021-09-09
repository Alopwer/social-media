import { app } from "../app";
import { UsersController } from "../users/users.controller";

export const initializeControllers = () => {
  app.use('/users', UsersController)
}