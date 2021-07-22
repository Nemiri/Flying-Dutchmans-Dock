import { Router } from "express";
import ShipController from "../controllers/Ship";

const shipController = new ShipController();
const shipRouter = Router();

shipRouter.post('/', shipController.create);

export default shipRouter;