import { ObjectId } from 'bson';

export enum PostsRoute {
  GET_ALL = '/'
}

export interface GetPostsByUserDalRequestData {
  userId: ObjectId
}