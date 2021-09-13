import { LoginAuthRequestModel, UserAuthModel, UserAuthRequestModel } from "@alopwer/shared";
import { CommonHttpError, HttpCode } from "../common/error.types";
import { AppError } from "../utils/appError";
import { decrypt, encrypt } from "../utils/crypto";
import { AuthDal } from "./auth.dal";

// pass project rules here, additional fields, etc.
export class AuthService {
  static async createUser(userData: UserAuthRequestModel) {
    try {
      const { passwordConfirm, ...userDalData } = userData
      if (passwordConfirm === userData.password) {
        userData.password = encrypt(userData.password).content
        const dbResult = await AuthDal.createUser(userDalData);
        return dbResult 
      }
      throw new AppError(CommonHttpError.BAD_REQUEST, HttpCode.BAD_REQUEST, 'Passwords are not equal', false)
    } catch (err: any) {
      throw new AppError(CommonHttpError.BAD_REQUEST, HttpCode.BAD_REQUEST, err.message, false)
    }
  }
  static async loginUser(loginData: LoginAuthRequestModel) {
    try {
      const { email, password } = loginData
      const userData = await AuthDal.getUser({ email })
      if (userData) {
        const decryptedUserPassword = decrypt({ initVector: '', content: userData.password })
        if (decryptedUserPassword === password) {
          return true
        }
      }
      throw new AppError(CommonHttpError.BAD_REQUEST, HttpCode.BAD_REQUEST, 'Something bad happened', false)
    } catch (err: any) {
      throw new AppError(CommonHttpError.BAD_REQUEST, HttpCode.BAD_REQUEST, err.message, false)
    }
  }
}