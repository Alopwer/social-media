import { LoginAuthModel, UserAuthModel } from "@alopwer/shared";
import { db } from "../db";

// access db here
export class AuthDal {
  private static collectionName = 'users'

  private static getCollection() {
    return db.getDb()!.collection(this.collectionName)
  }

  static createUser = async (userData: UserAuthModel) => {
    const dbResult = 
      await this.getCollection().insertOne(userData);
  
    return dbResult;
  }

  static getUser = async (loginData: LoginAuthModel) => {
    const { email } = loginData
    const dbResult = 
      await this.getCollection().findOne<Pick<UserAuthModel, 'password'>>({ email }, { projection: { password: 1 } });
  
    return dbResult;
  }
}
