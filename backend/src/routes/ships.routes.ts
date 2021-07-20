import { Router } from "express";
import ShipController from "../controllers/ships/Ship";

const shipController = new ShipController();
const shipRouter = Router();

shipRouter.post('/', shipController.CreateShip);

export default shipRouter;