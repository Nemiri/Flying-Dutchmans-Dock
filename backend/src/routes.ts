import { Router } from "express";
import dockRouter from "./routes/dock.routes";
import shipRouter from "./routes/ships.routes";

const routes = Router();

routes.use("/ship", shipRouter);
routes.use("/dock", dockRouter);

export default routes;