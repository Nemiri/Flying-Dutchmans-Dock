import pool from "../pool";
import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

export default class CargoController {
  public async create(request: Request, response: Response) {
    const id = uuidv4();

    pool.query(
      `
      INSERT INTO cargo (id, ship_id, type, weight, risk_class)
       VALUES ("${id}", 
       "${request.body.ship_id}",
       "${request.body.type}", 
       "${request.body.weight}", 
       ${request.body.risk_class});
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

  public async index(request: Request, response: Response) {
    const { ship_id } = request.params;

    pool.query(
      `SELECT type, weight, risk_class FROM cargo WHERE ship_id = "${ship_id}"`,
      (e, result) => {
        if (e) return response.status(400).json({ message: e.message });

        return response.status(200).json(result);
      }
    );
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params;

    pool.query(`DELETE FROM cargo WHERE id = "${id}";`, (e) => {
      if (e)
        return response.status(400).json({
          message: e.message,
        });

      return response.status(200).json({
        message: "Carga deletada.",
      });
    });
  }

  public async update(request: Request, response: Response) {
    const { id } = request.params;

    pool.query(
      `
    UPDATE cargo 
    SET type = "${request.body.type}",
    SET weight = ${request.body.weight},
    SET risk_class = ${request.body.risk_class},
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
