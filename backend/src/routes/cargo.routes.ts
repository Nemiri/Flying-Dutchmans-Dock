import CargoController from "../controllers/Cargo";
import { Router } from "express";

const cargoController = new CargoController();
const cargoRouter = Router();

cargoRouter.post("/", cargoController.CreateCargo);

export default cargoRouter;
