import express from "express";
import { AppError } from "../utils/appError";

export type RouteType = (req: express.Request, res: express.Response, next: express.NextFunction) => void;
export type RouteErrorType = (err: AppError, req: express.Request, res: express.Response, next: express.NextFunction) => void;