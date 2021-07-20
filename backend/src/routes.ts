import { Router } from "express";
import cargoRouter from "./routes/cargo.routes";
import dockRouter from "./routes/dock.routes";
import shipRouter from "./routes/ships.routes";

const routes = Router();

routes.use("/ship", shipRouter);
routes.use("/dock", dockRouter);
routes.use("/cargo", cargoRouter);

export default routes;