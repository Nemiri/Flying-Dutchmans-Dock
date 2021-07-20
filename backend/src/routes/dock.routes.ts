import { Router } from "express";
import DockController from "../controllers/docks/Dock";

const dockController = new DockController();
const dockRouter = Router();

dockRouter.post('/', dockController.CreateDock);

export default dockRouter;