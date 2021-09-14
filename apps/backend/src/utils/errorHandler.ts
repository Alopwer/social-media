import { RouteErrorType } from "../common/routes.types";
import { AppError } from "./appError";

class ErrorHandler {
  public handleError = async (err: Error) => {
    console.error(err)
  }

  public responseError: RouteErrorType = async (err, req, res, next) => {
    res.status(err.httpCode || 500).send({ message: err.message })
  }
  
  public isTrustedError(error: Error) {
    if (error instanceof AppError) {
      return error.isOperational;
    }
    return false;
  }
 }
 export const errorHandler = new ErrorHandler();