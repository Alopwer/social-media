import express from "express"
import { PostsRoute } from '@alopwer/shared'
import { PostsRouter } from "./posts.router";
import { auth } from "../middlewares/auth";

export class PostsController {
  public path = '/posts'
  public router = express.Router()

  constructor() {
    this.intializeRoutes();
  }
  
  public intializeRoutes() {
    this.router.get(PostsRoute.GET_ALL, PostsRouter.getAllPostsByUser);
  }
}