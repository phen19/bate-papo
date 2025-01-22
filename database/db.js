import {MongoClient, ObjectId} from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();
const mongoClient = new MongoClient("mongodb+srv://phen:1510@bate-papo.pm6kj.mongodb.net/?retryWrites=true&w=majority&appName=bate-papo");
let db

await mongoClient.connect();
db = mongoClient.db('bate-papo');
export default db