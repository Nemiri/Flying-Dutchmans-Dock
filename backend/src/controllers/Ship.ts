import pool from "../pool";
import {Request, Response} from "express";
import {v4 as uuidv4} from "uuid";
import {QueryResult} from "pg";

export default class ShipController {
    public async create(request: Request, response: Response) {
        const id = uuidv4();

        pool.query(
            `
        INSERT INTO ship (id, name, max_speed, ship_captain, size, type, max_tripulation, max_cargo, dock_id) 
        VALUES ('${id}', 
        '${request.body.name}', 
        ${request.body.max_speed}, 
        '${request.body.ship_captain}', 
        ${request.body.size}, 
        '${request.body.type}', 
        ${request.body.max_tripulation}, 
        ${request.body.max_cargo}, 
        '${request.body.dock_id}');`,
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
        const {ship_id} = request.params;

        pool.query(
            `SELECT * FROM ship WHERE dock_id = '${ship_id}';`,
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
        const {id} = request.params;

        pool.query(`
          SELECT S.*, D.name as "dock_name", MAX(C.risk_class) as "highest_risk_class", A.id as "isCertificated", A.certification as "certification_time"
            FROM dock D, ship S
            left join allowed_ships A
            on S.id = A.ship_id 
            left join cargo C
            on S.id = C.ship_id
            WHERE S.id = '${id}' AND S.dock_id = D.id
            group by s.id, d.name, a.id;`,
            (e, result) => {
                if (e)
                    return response.status(400).json({
                        message: e.message,
                    });

                const ship = Object.assign({}, result.rows[0]);

                return response.status(200).json(ship);
            }
        );
    }

    public async index(request: Request, response: Response) {
        pool.query(
            `
            select s.*, al.id as "isCertificated", al.certification as "certification_time", d.name as "dock_name", an.arrival_time as "arrival_time"
            from dock d, ship s
            left join allowed_ships al
            on s.id = al.ship_id
            left join announcement an
            on s.id = an.ship_id
            where d.id = s.dock_id;`,
            (e, result: QueryResult) => {
                if (e) return response.status(400).json({message: e.message});

                return response.status(200).json(result.rows);
            }
        );
    }

    public async delete(request: Request, response: Response) {
        const {id} = request.params;

        pool.query(`DELETE FROM ship WHERE id = '${id}';`, (e) => {
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
        const {id} = request.params;

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
