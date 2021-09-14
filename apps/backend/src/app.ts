import cors from "cors";
import express from "express";
import { ControllerType } from "./common/controller.types";
import { errorHandler } from "./utils/errorHandler";
export class App {
  public app: express.Application;
  public port: number | string;
 
  constructor(controllers: Array<ControllerType>, port: number | string) {
    this.app = express();
    this.port = port;
 
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
    this.initializePostMiddlewares();
  }
 
  private initializeMiddlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  private initializePostMiddlewares() {
    this.app.use(errorHandler.responseError)
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