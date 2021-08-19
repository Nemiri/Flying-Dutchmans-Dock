import { Router } from "express";
import AnnouncementController from "../controllers/Announcement";

const announcementController = new AnnouncementController();
const announcementRouter = Router();

announcementRouter.post("/", announcementController.create);
announcementRouter.delete("/:id", announcementController.delete);
announcementRouter.get("/", announcementController.index);
announcementRouter.put("/:ship_id", announcementController.update)

export default announcementRouter;
