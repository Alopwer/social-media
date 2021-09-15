import { ObjectId } from "bson";

export interface JwtRoutePayloadI {
  authUser: JwtPayloadI;
}

export interface JwtPayloadI {
  userId: ObjectId;
}