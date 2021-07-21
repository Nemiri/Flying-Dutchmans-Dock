import { Router } from "express";
import DockController from "../controllers/docks/Dock";

const dockController = new DockController();
const dockRouter = Router();

dockRouter.post('/', dockController.create);
dockRouter.get('/', dockController.index);
dockRouter.get('/:id', dockController.findOne);

export default dockRouter;