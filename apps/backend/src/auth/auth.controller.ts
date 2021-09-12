import { AuthRoute } from "@alopwer/shared";
import express from "express"
import { AuthRouter } from "./auth.router";

class AuthController {
  public path = '/auth'
  public router = express.Router()

  constructor() {
    this.intializeRoutes();
  }
  
  public intializeRoutes() {
    this.router.post(AuthRoute.CREATE, AuthRouter.createUser);
  }
}
export default AuthController;