import express from 'express';
import dotenv from 'dotenv';
import { mongoose } from 'mongoose';
import bookRoutes from './routes/bookRoutes.js';
import cors from 'cors'
import userRoutes from './routes/userRoutes.js'

const app = express()
app.use(express.json())
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
app.use('/user',userRoutes)

// 3:18:28

app.listen(port, () => console.log(`Example app listening on port ${port}!`))