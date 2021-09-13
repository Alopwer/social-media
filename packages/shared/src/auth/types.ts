export enum AuthRoute {
  CREATE = '/sign-up',
  LOGIN = '/login'
}

export interface UserAuthModel {
  userName: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
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