import pool from "../pool";
import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { RowDataPacket } from "mysql2";

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
        "${request.body.dock_id}");`,
      (e, result) => {
        if (e)
          return response.status(400).json({
            message: e.message,
          });

        return response.status(200).json(result);
      }
    );
  }

  public async findInDock(request: Request, response: Response) {
    const { ship_id } = request.params;

    pool.query(
      `SELECT * FROM ship WHERE dock_id = "${ship_id}";`,
      (e, result) => {
        if (e)
          return response.status(400).json({
            message: e.message,
          });

        return response.status(200).json(result);
      }
    );
  }

  public async findOne(request: Request, response: Response) {
    const { id } = request.params;

    pool.query(`
          SELECT S.*, D.name as 'dock_name', MAX(C.risk_class) as 'highest_risk_class'
          FROM ship S, dock D, cargo C
          WHERE S.id = "${id}" AND S.dock_id = D.id AND C.ship_id = S.id;`,
      (e, result: RowDataPacket) => {
        if (e)
          return response.status(400).json({
            message: e.message,
          });

        const ship = Object.assign({}, result[0]);

        return response.status(200).json(ship);
      }
    );
  }

  public async index(request: Request, response: Response) {
    pool.query(
      `
                SELECT S.*, D.name as 'dock_name', A.arrival_time as 'arrival_time'
                FROM ship S, dock D, announcement A
                WHERE S.dock_id = D.id
                GROUP BY S.name;`,
      (e, result) => {
        if (e) return response.status(400).json({ message: e.message });

        return response.status(200).json(result);
      }
    );
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params;

    pool.query(`DELETE FROM ship WHERE id = "${id}";`, (e) => {
      if (e)
        return response.status(400).json({
          message: e.message,
        });

      return response.status(200).json({
        message: "Embarcação deletada.",
      });
    });
  }

  public async update(request: Request, response: Response) {
    const { id } = request.params;

    pool.query(
      `
                UPDATE ship 
                SET name = "${request.body.name}", 
                max_speed = ${request.body.max_speed}, 
                ship_captain = "${request.body.ship_captain}", 
                size = ${request.body.size}, 
                type = "${request.body.type}", 
                max_tripulation = ${request.body.max_tripulation}, 
                max_cargo = ${request.body.max_cargo}
                WHERE id = "${id}";
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
