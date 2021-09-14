import { ObjectId } from 'bson';

export enum AuthRoute {
  CREATE = '/sign-up',
  LOGIN = '/login'
}

export interface UserAuthModel {
  userName: string;
  password: string;
  email: string;
}

export interface UserAuthModelResponse extends UserAuthModel {
  _id: ObjectId;
}

export interface UserAuthRequestModel extends UserAuthModel {
  passwordConfirm: string;
}

export interface LoginAuthModel {
  email: string;
}

export interface LoginAuthRequestModel extends LoginAuthModel {
  password: string;
}