import { UserAuthModel } from "@alopwer/shared";
import { CommonHttpError, HttpCode } from "../common/error.types";
import { AppError } from "../utils/appError";
import { encrypt } from "../utils/crypto";
import { AuthDal } from "./auth.dal";

// pass project rules here, additional fields, etc.
export class AuthService {
  static async createUser(userData: UserAuthModel) {
    try {
      userData.password = encrypt(userData.password).content
      const dbResult = await AuthDal.createUser(userData);
      return dbResult 
    } catch (err) {
      throw new AppError(CommonHttpError.BAD_REQUEST, HttpCode.BAD_REQUEST, 'Could not create user', false)
    }
  }
}