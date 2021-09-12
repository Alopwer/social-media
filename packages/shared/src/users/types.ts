export enum UsersRoute {
  CREATE = '/'
}

export interface UserModel {
  userName: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
}