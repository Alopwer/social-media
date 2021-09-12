import { RouteType } from '../common/routes.types'
import { AuthService } from './auth.service'
function staticImplements<T>() {
  return <U extends T>(constructor: U) => {constructor};
}
interface AuthRouterI {
  createUser: RouteType
}

// parse http request data and send it to service
@staticImplements<AuthRouterI>()
export class AuthRouter {
  static async createUser(req, res, next) {
    try {
      const createdUser = await AuthService.createUser(req.body)
      res.json(createdUser)
    } catch (err) {
      next(err)
    }
  }
}

