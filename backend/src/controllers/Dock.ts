import pool from "../pool";
import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

export default class DockController {
  public async create(request: Request, response: Response) {
    const id = uuidv4();

    pool.query(
      `
        INSERT INTO dock (id, name, max_ships, max_ship_size) 
        VALUES ("${id}", "${request.body.name}", ${request.body.max_ships}, ${request.body.max_ship_size});`,
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

  public async index(request: Request, response: Response) {
    pool.query(`SELECT * FROM dock;`, async (e, result) => {
      if (e)
        return response.status(400).json({
          message: e.message,
        });

      return response.json(result);
    });

    return response.status(200);
  }

  public async findOne(request: Request, response: Response) {
    const { id } = request.params;

    pool.query(`SELECT * FROM dock WHERE id = ${id};`, async (e, result) => {
      if (e)
        return response.status(400).json({
          message: e.message,
        });

      return response.json(result);
    });
  }
}
