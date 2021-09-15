import { GetPostsByUserDalRequestData } from "@alopwer/shared";
import { db } from "../db";

export class PostsDal {
  private static collectionName = 'posts'

  private static getCollection() {
    return db.getDb()!.collection(this.collectionName)
  }

  static async getAllPostsByUser({ userId }: GetPostsByUserDalRequestData) {
    const allPostsByUser = 
      await this.getCollection().find({ createdBy: userId }).toArray()
    return allPostsByUser
  }
}