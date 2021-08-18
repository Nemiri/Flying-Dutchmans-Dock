import { Request, Response } from "express";
import pool from "../pool";
import { v4 as uuidv4 } from "uuid";

export default class AllowedShipsController {
  public async create(request: Request, response: Response) {
    const id = uuidv4();

    pool.query(
      `
        INSERT INTO allowed_ships (id, ship_id, certification) 
        VALUES ("${id}", "${request.body.ship_id}", NOW());`,
      (e, result) => {
        if (e)
          return response.status(400).json({
            message: e.message,
          });

        return response.status(200).json(result);
      }
    );
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params;

    pool.query(`DELETE FROM allowed_ships WHERE id = "${id}";`, (e) => {
      if (e)
        return response.status(400).json({
          message: e.message,
        });

      return response.status(200).json({
        message: "Certificado deletado.",
      });
    });
  }
}
