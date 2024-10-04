import dotenv from 'dotenv';
dotenv.config({
    path: ".env"
});

export const MONGO_DB_URL = process.env.MONGO_DB_URL;
export const DB_NAME = process.env.DB_NAME;