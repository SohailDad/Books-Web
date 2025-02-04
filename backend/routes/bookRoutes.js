import express from "express";
import { getBook } from "./controller/bookController";


const router = express.Router();

router.get('/',getBook);



export default router;