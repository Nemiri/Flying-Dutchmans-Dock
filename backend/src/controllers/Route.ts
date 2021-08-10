import pool from "../pool";
import { query, Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

export default class RouteController {
    public async create(request: Request, response: Response) {
        const id = uuidv4();

        pool.query(
        `
            INSERT INTO routes (id, ship_id, distance, source, destination, duration)
            VALUES("${id}", 
            "${request.body.ship_id}", 
            ${request.body.distance},
            "${request.body.source}",
            "${request.body.destination}",
            "${request.body.duration}");
        `,
        async (e, result) => {
            if (e)
              return response.status(400).json({
                message: e.message,
              });
    
            return response.json(result);
          }
        );
    
        return response.status(200);
    }
    
}