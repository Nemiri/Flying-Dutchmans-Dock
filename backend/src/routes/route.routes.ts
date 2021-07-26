import RouteController from "../controllers/Route";
import { Router } from "express";

const routeController = new RouteController();
const routeRouter = Router();
//Esse router tem de longe o pior nome que eu já vi na minha vida, obrigado língua Inglesa

routeRouter.post("/", routeController.create);

export default routeRouter;