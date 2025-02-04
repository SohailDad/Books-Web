import express from 'express';
import dotenv from 'dotenv';
import { mongoose } from 'mongoose';
import bookRoutes from './routes/bookRoutes.js';
import cors from 'cors'

const app = express()
app.use(cors());
dotenv.config()

const port = process.env.PORT || 3000
const DB_URL = process.env.DB_URL

try {
    
    mongoose.connect(DB_URL)
    console.log("Mongoose connection is successfull !!!")
} catch (error) {
    console.log("Error: ",error)
}


app.use('/book',bookRoutes);


// 3:03:39

app.listen(port, () => console.log(`Example app listening on port ${port}!`))