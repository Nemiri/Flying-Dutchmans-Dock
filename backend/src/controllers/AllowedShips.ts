import { Request, Response } from "express";
import pool from "../pool";

export default class AllowedShipsController {
  public async create(request: Request, response: Response) {
    pool.query(
      `
        INSERT INTO allowed_ships (dock_id, certification) 
        VALUES (${request.body.dock_id}, ${request.body.certification});
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
