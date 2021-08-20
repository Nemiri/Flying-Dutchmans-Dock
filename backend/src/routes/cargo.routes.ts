import CargoController from "../controllers/Cargo";
import { Router } from "express";

const cargoController = new CargoController();
const cargoRouter = Router();

cargoRouter.post("/", cargoController.create);
cargoRouter.get("/:ship_id", cargoController.index);
cargoRouter.get("/get/incoming", cargoController.getIncoming);
cargoRouter.get("/get/outcoming", cargoController.getOutcoming);
cargoRouter.delete("/:id", cargoController.delete);
cargoRouter.put("/:id", cargoController.update);

export default cargoRouter;
