import CargoController from "../controllers/Cargo";
import { Router } from "express";

const cargoController = new CargoController();
const cargoRouter = Router();

cargoRouter.post("/", cargoController.create);
cargoRouter.get("/:ship_id", cargoController.index);

export default cargoRouter;
