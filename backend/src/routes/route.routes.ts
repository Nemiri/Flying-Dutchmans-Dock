import RouteController from "../controllers/Route";
import { Router } from "express";

const routeController = new RouteController();
const routeRouter = Router();

routeRouter.post("/", routeController.create);

export default routeRouter;