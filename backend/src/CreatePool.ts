import mysql from "mysql2";
import config from "./config/config";

export default mysql.createPool(config);