import {Router} from "express";
import Seeder from "../seeder/seeder";

const seeder = new Seeder()
const seederRouter = Router();

seederRouter.post('/', seeder.execute);

export default seederRouter;