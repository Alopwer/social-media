import { RouteAuthType } from "../common/routes.types";
import jwt from 'jsonwebtoken';
import { AppError } from "../utils/appError";
import { CommonHttpError, HttpCode } from "../common/error.types";
import { JwtPayloadI } from "../auth/auth.types";

const verifyToken: RouteAuthType = (req, res, next) => {
  const authHeader = req.headers["Authorization"] as string;

  if (!authHeader) {
    throw new AppError(CommonHttpError.FORBIDDEN, HttpCode.FORBIDDEN, 'Token is required', false)
  }
  try {
    const [, token] = authHeader.split(' ');
    const decoded = jwt.verify(token, process.env.TOKEN_KEY!) as JwtPayloadI;
    req.authUser = decoded;
  } catch (err) {
    throw new AppError(CommonHttpError.UNAUTHORIZED, HttpCode.UNAUTHORIZED, 'Full authentication is requ', false)
  }
  return next();
}