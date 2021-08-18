import express from "express";
import { Client } from "pg";
import routes from "./routes";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const client = new Client ({
    host: process.env.DB_HOST,
    port: 5432,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})
client.connect();
export const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
