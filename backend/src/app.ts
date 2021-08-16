import express from "express";
import { createConnection } from "mysql2";
import config from "./config/config";
import routes from "./routes";
import cors from "cors";

createConnection(config);
export const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
