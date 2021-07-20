import express from "express";
import { createConnection } from "mysql2";
import config from "./config/config"
import routes from "./routes";

createConnection(config);
export const app = express();

app.use(express.json());
app.use(routes);