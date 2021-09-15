import express from "express";
import { JwtRoutePayloadI } from "../auth/auth.types";
import { AppError } from "../utils/appError";

export type RequestWithJwtPayload = express.Request & JwtRoutePayloadI
export type RouteBaseType = (req: express.Request, res: express.Response, next: express.NextFunction) => void;
export type RouteAuthType = (req: express.Request, res: express.Response, next: express.NextFunction) => void;
export type RouteErrorType = (err: AppError, req: express.Request, res: express.Response, next: express.NextFunction) => void;