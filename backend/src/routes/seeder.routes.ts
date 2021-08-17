import {Router} from "express";
import seeder from "../seeder/seeder";

const seederRouter = Router();

seederRouter.post('/', seeder);

export default seederRouter;