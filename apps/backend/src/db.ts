import { AnyError, Db, MongoClient } from 'mongodb'

class Database {
  public url: string = process.env.DB_URL!;
  public mongoOptions = {}

  private state: {
    db: Db | null
  } = {
    db: null
  }

  getDb() {
    return this.state.db
  }

  connectToDatabase(cb: (err?: AnyError) => void) {
    if (this.state.db) {
      cb()
    } else {
      MongoClient.connect(this.url, this.mongoOptions, (err, client) => {
        if (err) {
          cb(err)
        } else {
          this.state.db = client!.db('social-media')
          cb()
        }
      })
    }
  }
}

export const db = new Database()