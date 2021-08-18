import pool from "../pool";
import {Request, Response} from "express";
import {v4 as uuidv4} from "uuid";

export default class DockController {
    public async create(request: Request, response: Response) {
        const id = uuidv4();

        pool.query(
            `
        INSERT INTO dock (id, name, max_ships, max_ship_size) 
        VALUES ('${id}', '${request.body.name}', ${request.body.max_ships}, ${request.body.max_ship_size});`,
            async (e, result) => {
                if (e) {
                    console.log(e.message);
                    return response.status(400).json({message: e.message});
                } 

                return response.json(result);
            }
        );

        return response.status(200);
    }

    public async index(request: Request, response: Response) {
        pool.query(`select d.*, count(s.id) as "ships"
                    from dock d
                    left join ship s
                    on d.id = s.dock_id
                    group by d.id;`, async (e, result) => {
            if (e) return response.status(400).json({message: e.message});

            return response.json(result.rows);
        });

        return response.status(200);
    }

    public async findOne(request: Request, response: Response) {
        const {id} = request.params;

        pool.query(`SELECT * FROM dock WHERE id = ${id};`, async (e, result) => {
            if (e) return response.status(400).json({message: e.message});

            return response.json(result);
        });
    }

    public async delete(request: Request, response: Response) {
        const {id} = request.params;

        pool.query(`DELETE FROM dock WHERE id = '${id}';`, (e) => {
            if (e) return response.status(400).json({message: e.message});
        });
    }

    public async update(request: Request, response: Response) {
        const {id} = request.params;

        pool.query(
            `
            UPDATE dock
            SET name = '${request.body.name}',
            max_ships = ${request.body.max_ships},
            max_ship_size = ${request.body.max_ship_size}
            WHERE id = '${id}';
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
