import { RouteType } from '../common/routes.types'
import { AuthService } from './auth.service'

// parse http request data and send it to service
export class AuthRouter {
  static createUser: RouteType = async (req, res, next) => {
    try {
      const createdUser = await AuthService.createUser(req.body)
      res.json(createdUser)
    } catch (err) {
      next(err)
    }
  }
  static loginUser: RouteType = async (req, res, next) => {
    try {
      const loginResponseData = await AuthService.loginUser(req.body)
      res.json(loginResponseData)
    } catch (err) {
      next(err)
    }
  }
}

