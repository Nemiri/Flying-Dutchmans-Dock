import pool from "../pool";
import { Request, Response } from "express";

export default class ShipController {
  public async create(request: Request, response: Response) {
    pool.query(
      `INSERT INTO ship (name, max_speed, ship_captain, size, type, max_tripulation, max_cargo, dock_id) 
      VALUES ("${request.body.name}", 
      ${request.body.max_speed}, 
      "${request.body.ship_captain}", 
      ${request.body.size}, 
      "${request.body.type}", 
      ${request.body.max_tripulation}, 
      ${request.body.max_cargo}, 
      ${request.body.dock_id});`,
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
