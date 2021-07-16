import express from "express";
import { createConnection } from "mysql2";
import config from "./config/config"

createConnection(config);
export const app = express();

app.use(express.json());