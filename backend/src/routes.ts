import { Router } from "express";

import allowedShipsRouter from "./routes/allowedShips.routes";
import cargoRouter from "./routes/cargo.routes";
import dockRouter from "./routes/dock.routes";
import shipRouter from "./routes/ships.routes";
import announcementRouter from "./routes/announcement.routes";
import routeRouter from "./routes/route.routes";

const routes = Router();

routes.use("/ship", shipRouter);
routes.use("/dock", dockRouter);
routes.use("/cargo", cargoRouter);
routes.use("/allowed_ships", allowedShipsRouter);
routes.use("/announcement", announcementRouter);
routes.use("/routes", routeRouter);

export default routes;
