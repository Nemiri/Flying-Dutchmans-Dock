import { Router } from "express";
import DockController from "../controllers/docks/Dock";

const dockController = new DockController();
const dockRouter = Router();

export default dockRouter;