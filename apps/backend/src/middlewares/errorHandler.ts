import { RouteErrorType } from "../common/routes.types"

export function logError(err: Error) {
  console.error(err)
}

export function isOperationalError(error: Error) {
  // if (error instanceof BaseError) {
  //   return error.isOperational
  // }
  return false
}

export const logErrorMiddleware: RouteErrorType = (err, req, res, next) => {
  logError(err)
  next(err)
}

export const returnError: RouteErrorType = (err, req, res, next) => {
  // res.status(err.statusCode || 500).send(err.message)
  res.status(500).send(err.message)
}