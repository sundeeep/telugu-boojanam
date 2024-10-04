import http from 'http';
import cors from 'cors';
import express from "express";
import dotenv from 'dotenv';
import { connectMongoDB } from './db/index.js';
dotenv.config({path: ".env"});

const app = express();

app.use(express.json());

app.get("/", (req, res)=>{
    const message = "Welcome to Andhra Bojanam, a Food Ordering Application."
    res.status(200).json({
        message
    })
});

const httpServer = http.createServer(app);

const PORT = process.env.PORT || 8001;

httpServer.listen(PORT, async()=>{
    console.log(`🚀 HTTP Server is running on PORT: ${PORT}`);
    try{
        await connectMongoDB();
    }catch(error){
        console.log("Error in ./src/index.js: ", error);
    }
})