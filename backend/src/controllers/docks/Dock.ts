import pool from "../../pool";
import { Request, Response } from "express";

export default class DockController {
  public async create(request: Request, response: Response) {
    pool.query(
      `
      INSERT INTO dock (name, max_ships, max_ship_size) 
      VALUES ("${request.body.name}", ${request.body.max_ships}, ${request.body.max_ship_size});`,
      async (e, result) => {
        if (e) return response.status(400).json({
          message: "Something got wrong :("
        });

        return response.json(result);
      }
    );

    return response.status(200);
  }

  public async index(request: Request, response: Response) {
    pool.query(
      `SELECT * FROM dock;`,
      async (e, result) => {
        if(e) return response.status(400).json({
          message: "Something got wrong :("
        });

        return response.json(result);
      }
    );

    return response.status(200);
  }

  public async findOne(request: Request, response: Response) {
    const id = request.params.id;
    
    pool.query(
      `SELECT * FROM dock WHERE id = ${id};`,
      async (e, result) => {
        if(e) return response.status(400).json({
          message: "Something got wrong :("
        });

        return response.json(result);
      }
    )
  }
}
