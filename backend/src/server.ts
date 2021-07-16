import { app } from "./app";
import pool from "./CreatePool";

app.listen(3333, () => {
    console.log("Server is running on port 3333.");
});