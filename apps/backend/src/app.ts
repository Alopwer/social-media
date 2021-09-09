import cors from 'cors';
import express from 'express';
import { MongoClient } from 'mongodb';

const uri =
  "mongodb+srv://admin:admin@cluster0.mhjrn.mongodb.net/social-media?retryWrites=true&w=majority";
const client = new MongoClient(uri);

export const app = express();

app.use(express.json());
app.use(cors());

export async function connectToDatabase() {
  try {
    await client.connect();
    await client.db("social-media");
    console.log("Connected successfully to mongodb server");
  } finally {
    await client.close();
  }
}