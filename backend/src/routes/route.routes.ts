import RouteController from "../controllers/Route";
import { Router } from "express";

const routeController = new RouteController();
const routeRouter = Router();

routeRouter.post("/", routeController.create);
routeRouter.delete("/:id", routeController.delete);
routeRouter.put("/:id", routeController.update);

export default routeRouter;
