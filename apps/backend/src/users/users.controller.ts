import { UsersRoute } from '@alopwer/shared';
import * as express from 'express';
import { UsersRoutes } from './users.routes';

class UsersController {
  public path = '/users';
  public router = express.Router();

  constructor() {
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.post(UsersRoute.CREATE, UsersRoutes.createUser);
  }
}
 
export default UsersController;