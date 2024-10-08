import http from "http";
import express from "express";
import dotenv from 'dotenv';
dotenv.config({
    path:".env"
});
import cors from 'cors';

const app = express();

const whitelist = ['http://localhost:5173', 'https://telugubojanam.vercel.app'];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions));
app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

/**
 * Import all the application Routes Here...
 */

import healthCheckRouter from "./routes/healthcheck.routes.js"
app.use("/api/v1/healthcheck", healthCheckRouter);


app.get("/", (req, res)=>{
    res.status(200).json({
        message: "Welcome to drugboard.ai API..."
    });
});

const drugboardServer = http.createServer(app);

export default drugboardServer;