import { UserModel } from "@alopwer/shared";
import { db } from "../db";

// access db here
export class UserDal {
  private static collectionName = 'users'

  static createUser = async (userData: UserModel) => {
    const dbResult = 
      await db.getDb()!.collection(this.collectionName).insertOne(userData);
  
    return dbResult;
  }
}
