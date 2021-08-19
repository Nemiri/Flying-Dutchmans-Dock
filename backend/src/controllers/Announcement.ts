import pool from "../pool";
import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

export default class AnnouncementController {
  public async create(request: Request, response: Response) {
    const id = uuidv4();

    pool.query(
      `
        INSERT INTO announcement (id, ship_id, arrival_time, departure_time)
        VALUES ('${id}', 
        '${request.body.ship_id}', 
        '${request.body.arrival_time}',
        null
      );`,
      (e, result) => {
        if (e)
          return response.status(400).json({
            message: e.message,
          });

        return response.status(200).json(result);
      }
    );
  }

  public async update(request: Request, response: Response) {
    const { ship_id } = request.params
    
    pool.query(
      `
        UPDATE announcement
        SET departure_time = NOW() + (random() * (NOW() + '3 days' - NOW())) + '21 days'
        WHERE ship_id = '${ship_id}'
      ;`,
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

    pool.query(`DELETE FROM announcement WHERE id = '${id}';`, (e) => {
      if (e)
        return response.status(400).json({
          message: e.message,
        });

      return response.status(200).json({
        message: "Anúncio deletado.",
      });
    });
  }

  public async index(request: Request, response: Response) {
    pool.query(`
        SELECT a.*, s.name as "ship_name", s.ship_captain as "ship_captain"
        FROM announcement a, ship s
        WHERE a.ship_id = s.id;
      `, (e, result) => {
      if (e)
        return response.status(400).json({
          message: e.message,
        });

      return response.status(200).json(result.rows)
    });
  }
}
