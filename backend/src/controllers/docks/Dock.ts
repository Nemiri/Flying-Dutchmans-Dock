import pool from "../../pool";
import { Request, Response } from "express";
import { OkPacket } from "mysql2";

export default class DockController {
  public async create(request: Request, response: Response) {
    pool.query(
      `
      INSERT INTO dock (name, max_ships, max_ship_size) 
      VALUES ("${request.body.name}", ${request.body.max_ships}, ${request.body.max_ship_size});
      `,
      (e, result: OkPacket) => {
        if(e) {
          throw e;
        }
      }
    );

    return response.status(400);
  }
}
