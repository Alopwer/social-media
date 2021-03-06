import { CommonHttpError, HttpCode } from "../common/error.types";

// centralized error object that derives from Node’s Error
export class AppError extends Error {
  public readonly name: string | CommonHttpError;
  public readonly httpCode: HttpCode;
  public readonly isOperational: boolean = true;

  constructor(name: string | CommonHttpError, httpCode: HttpCode, description: string, isOperational: boolean) {
    super(description);
    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain

    this.name = name;
    this.httpCode = httpCode;
    this.isOperational = isOperational;

    Error.captureStackTrace(this);
  }
}
