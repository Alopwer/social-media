export enum AuthRoute {
  CREATE = '/'
}

export interface UserAuthModel {
  userName: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
}