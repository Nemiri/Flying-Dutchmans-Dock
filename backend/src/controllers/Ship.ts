import pool from "../pool";
import { Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid';

export default class ShipController {
  public async create(request: Request, response: Response) {
    const id = uuidv4();

    pool.query(
      `
        INSERT INTO ship (id, name, max_speed, ship_captain, size, type, max_tripulation, max_cargo, dock_id) 
        VALUES ("${id}", 
        "${request.body.name}", 
        ${request.body.max_speed}, 
        "${request.body.ship_captain}", 
        ${request.body.size}, 
        "${request.body.type}", 
        ${request.body.max_tripulation}, 
        ${request.body.max_cargo}, 
        "${request.body.dock_id}");
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