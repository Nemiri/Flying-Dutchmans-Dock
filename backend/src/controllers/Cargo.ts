import pool from "../pool";
import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

export default class CargoController {
  public async create(request: Request, response: Response) {
    const id = uuidv4();

    pool.query(`
      INSERT INTO cargo (type, weight, risk_class)
       VALUES ("${id}", 
       ${request.body.type}, 
       ${request.body.weight}, 
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
}
