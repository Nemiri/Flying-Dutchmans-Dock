import pool from "../pool";
import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

export default class AnnouncementController {
    public async create(request: Request, response: Response) {
        const id = uuidv4();

        pool.query(
        `
            INSERT INTO announcement (id, dock_id, ship_id, arrival_time, departure_time)
            VALUES ("${id}", 
            "${request.body.dock_id}", 
            "${request.body.ship_id}", 
            "${request.body.arrival_time}", 
            "${request.body.departure_time}");
        `,
        (e, result) => {
            if (e)
                return response.status(400).json({
                    message: e.message,
                });

            return response.status(200).json(result);
            }
        );
    }
}

