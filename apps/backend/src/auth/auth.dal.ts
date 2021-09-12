import { UserAuthModel } from "@alopwer/shared";
import { db } from "../db";

// access db here
export class AuthDal {
  private static collectionName = 'users'

  static createUser = async (userData: UserAuthModel) => {
    const dbResult = 
      await db.getDb()!.collection(this.collectionName).insertOne(userData);
  
    return dbResult;
  }
}
