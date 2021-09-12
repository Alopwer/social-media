import { UserModel } from "@alopwer/shared";
import { CommonHttpError, HttpCode } from "../common/error.types";
import { AppError } from "../utils/appError";
import { encrypt } from "../utils/crypto";
import { UserDal } from "./users.dal";

// pass project rules here, additional fields, etc.
export class UserService {
  static async createUser(userData: UserModel) {
    try {
      userData.password = encrypt(userData.password).content
      const dbResult = await UserDal.createUser(userData);
      return dbResult 
    } catch (err) {
      throw new AppError(CommonHttpError.BAD_REQUEST, HttpCode.BAD_REQUEST, 'Could not create user', false)
    }
  }
}