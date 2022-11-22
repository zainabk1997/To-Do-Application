// Importing requirements
import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import models from './models/index.js';
import mongoose from 'mongoose';

// Calling express and saving it in a const
const app = express();

// Connecting app with required express modules cors-middleware for cross origin security and urlencoded-parsing urlencoded paylods
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
routes(app);

// Connecting with mongodb with the url provided in mongodb compass
mongoose.connect('mongodb://localhost:27017/todolistdb');

// Exporting the app using the default operator
export default app;

