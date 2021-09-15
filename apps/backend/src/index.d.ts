import { JwtPayloadI } from './auth/auth.types'

declare global {
  namespace Express {
    interface Request {
      authUser: JwtPayloadI
    }
  }
}