import { Router } from "express";

import allowedShipsRouter from "./routes/allowedShips.routes";
import cargoRouter from "./routes/cargo.routes";
import dockRouter from "./routes/dock.routes";
import shipRouter from "./routes/ships.routes";
import announcementRouter from "./routes/announcement.routes";
import seederRouter from "./routes/seeder.routes";

const routes = Router();

routes.use("/ship", shipRouter);
routes.use("/dock", dockRouter);
routes.use("/cargo", cargoRouter);
routes.use("/allowed_ships", allowedShipsRouter);
routes.use("/announcement", announcementRouter);
routes.use("/seeder", seederRouter);

export default routes;
