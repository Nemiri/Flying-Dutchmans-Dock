import { Router } from "express";
import DockController from "../controllers/Dock";

const dockController = new DockController();
const dockRouter = Router();

dockRouter.post("/", dockController.create);
dockRouter.get("/", dockController.index);
dockRouter.delete("/:id", dockController.delete);
dockRouter.put("/:id", dockController.update);

export default dockRouter;
