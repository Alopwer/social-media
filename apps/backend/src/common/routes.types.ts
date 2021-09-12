import express from "express";

export type RouteType = (req: express.Request, res: express.Response, next: express.NextFunction) => void;
export type RouteErrorType = (err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => void;