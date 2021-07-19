import { app } from "./app";
import runMigrations from './queries/migrations';

app.listen(3333, () => {
    console.log("Server is running on port 3333.");
});

runMigrations();