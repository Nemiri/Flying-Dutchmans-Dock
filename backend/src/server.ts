import { app } from "./app";
import CreateDock from "./queries/docks/Dock";
import runMigrations from './queries/migrations';
import ICreateDockDTO from "./queries/docks/ICreateDockDTO"

app.listen(3333, () => {
    console.log("Server is running on port 3333.");
});

const data: ICreateDockDTO = {
    name: 'test',
    max_ships: 20,
    max_ship_size: 200
}

CreateDock(data);

runMigrations();