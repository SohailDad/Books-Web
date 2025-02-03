import express from 'express';
import dotenv from 'dotenv';
import { mongoose } from 'mongoose';


const app = express()
dotenv.config()

const port = process.env.PORT || 3000
const DB_URL = process.env.DB_URL

try {
    
    mongoose.connect(DB_URL)
    console.log("Mongoose connection is successfull !!!")
} catch (error) {
    console.log("Error: ",error)
}




app.listen(port, () => console.log(`Example app listening on port ${port}!`))