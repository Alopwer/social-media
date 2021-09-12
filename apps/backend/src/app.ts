import cors from "cors";
import express from "express";
import { ControllerType } from "./common/controller.types";
import { logErrorMiddleware } from "./middlewares/errorHandler";
export class App {
  public app: express.Application;
  public port: number | string;
 
  constructor(controllers: Array<ControllerType>, port: number | string) {
    this.app = express();
    this.port = port;
 
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }
 
  private initializeMiddlewares() {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(logErrorMiddleware)
  }
 
  private initializeControllers(controllers: Array<ControllerType>) {
    controllers.forEach((controller) => {
      this.app.use(controller.path, controller.router);
    });
  }
 
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}