import { LoginAuthRequestModel, UserAuthModel, UserAuthModelResponse, UserAuthRequestModel } from "@alopwer/shared";
import jwt from 'jsonwebtoken'
import { CommonHttpError, HttpCode } from "../common/error.types";
import { AppError } from "../utils/appError";
import { decrypt, encrypt } from "../utils/crypto";
import { AuthDal } from "./auth.dal";

// pass project rules here, additional fields, etc.
export class AuthService {
  private static createToken(userData: UserAuthModelResponse) {
    return jwt.sign(
      { userId: userData._id },
      process.env.TOKEN_KEY!,
      {
        expiresIn: "2h",
      }
    );
  }
  private static async isNewUserValid(userData: UserAuthRequestModel) {
    try {
      const { passwordConfirm, email, password, userName } = userData
      const userDao = await AuthDal.getUser({ email })
      if (!(email && passwordConfirm && password && userName)) {
        throw new AppError(CommonHttpError.BAD_REQUEST, HttpCode.BAD_REQUEST, 'All input is required', false)
      }
      if (passwordConfirm !== userData.password) {
        throw new AppError(CommonHttpError.BAD_REQUEST, HttpCode.BAD_REQUEST, 'Passwords are not equal', false)
      }
      if (userDao) {
        throw new AppError(CommonHttpError.BAD_REQUEST, HttpCode.BAD_REQUEST, 'User with this email already exists', false)
      }
      return true
    } catch (err: any) {
      throw new AppError(CommonHttpError.BAD_REQUEST, HttpCode.BAD_REQUEST, err.message, false)
    }
  }
  static async createUser(userData: UserAuthRequestModel) {
    try {
      const { passwordConfirm, ...userDalData } = userData
      const userIsValid = await this.isNewUserValid(userData)
      if (userIsValid) {
        userData.password = encrypt(userData.password)
        await AuthDal.createUser(userDalData);
        return {}
      }
    } catch (err: any) {
      throw new AppError(CommonHttpError.BAD_REQUEST, HttpCode.BAD_REQUEST, err.message, false)
    }
  }
  static async loginUser(loginData: LoginAuthRequestModel) {
    try {
      const { email, password } = loginData
      const userData = await AuthDal.getUser({ email })
      if (userData) {
        const decryptedUserPassword = decrypt(userData.password)
        if (decryptedUserPassword === password) {
          const jwtToken = this.createToken(userData)
          return {
            jwtToken
          }
        }
      }
      throw new AppError(CommonHttpError.BAD_REQUEST, HttpCode.BAD_REQUEST, 'Invalid credentials', false)
    } catch (err: any) {
      throw new AppError(CommonHttpError.BAD_REQUEST, HttpCode.BAD_REQUEST, err.message, false)
    }
  }
}