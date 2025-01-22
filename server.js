import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routers/index.js';
import 'express-async-errors';
import errorHandler from './middlewares/errorHandler.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorHandler);

app.listen(5000)