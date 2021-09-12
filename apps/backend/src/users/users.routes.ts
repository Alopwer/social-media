import { RouteType } from '../common/routes.types'
import { UserService } from './users.service'

// parse http request data and send it to service
export const UsersRoutes: {
  createUser: RouteType
} = {
  createUser: async (req, res, next) => {
    try {
      const createdUser = await UserService.createUser(req.body)
      res.json(createdUser)
    } catch (err) {
      next(err)
    }
  }
}
