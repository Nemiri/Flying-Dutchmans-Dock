import { Router } from 'express';
import AllowedShipsController from '../controllers/AllowedShips';

const allowedShipsController = new AllowedShipsController();
const allowedShipsRouter = Router();

allowedShipsRouter.post('/', allowedShipsController.create);

export default allowedShipsRouter;