import { Router } from "express";
import ShipController from "../controllers/Ship";

const shipController = new ShipController();
const shipRouter = Router();

shipRouter.post("/", shipController.create);
shipRouter.get("/dock/:ship_id", shipController.findInDock);
shipRouter.get("/:id", shipController.findOne);
shipRouter.delete('/:id', shipController.delete);
shipRouter.put('/:id', shipController.update);

export default shipRouter;
