import * as express from 'express';

class UsersController {
  public path = '/users';
  public router = express.Router();

  constructor() {
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    
  }
}
 
export default UsersController;