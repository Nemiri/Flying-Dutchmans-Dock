import { Router } from "express";
import ShipController from "../controllers/Ship";

const shipController = new ShipController();
const shipRouter = Router();

shipRouter.post("/", shipController.create);
shipRouter.get("/dock/:ship_id", shipController.findInDock);
shipRouter.get("/:id", shipController.findOne);

export default shipRouter;
