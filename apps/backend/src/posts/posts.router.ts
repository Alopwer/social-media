import { RouteAuthType, RouteBaseType } from "../common/routes.types";
import { PostsDal } from "./posts.dal";

export class PostsRouter {
  static getAllPostsByUser: RouteAuthType = async (req, res, next) => {
    try {
      const { userId } = req.authUser
      const allPostsByUser = await PostsDal.getAllPostsByUser({ userId })
      console.log(allPostsByUser)
      res.json(allPostsByUser)
    } catch (err) {
      next(err)
    }
  }
}