import pool from '../pool';
import {v4 as uuidv4} from 'uuid';

import { Request, Response } from "express";

export default class Seeder {
    public async execute(request: Request, response: Response) {
        const isSeeded = await pool.query(`SELECT id FROM dock WHERE name = 'Alfa'`)

        if (isSeeded.rows.length > 0) return response.status(400).json({message: 'banco já semeado'})

        //DOCKS
        const dockalfa = {
            id: uuidv4(),
            name: 'Alfa',
            max_ships: 50,
            max_ship_size: 155
        }

        const dockbeta = {
            id: uuidv4(),
            name: 'Beta',
            max_ships: 35,
            max_ship_size: 350
        }

        const docksigma = {
            id: uuidv4(),
            name: 'Sigma',
            max_ships: 20,
            max_ship_size: 755
        }

        //SHIPS ON DOCK ALPHA
        const shipMalcolm = {
            id: uuidv4(),
            name: 'Malcolm',
            max_speed: 200,
            ship_captain: 'Walter White',
            size: 445,
            type: 'Cargueiro',
            max_tripulation: 20,
            max_cargo: 260000,
            dock_id: dockalfa.id
        }

        const shipBismark = {
            id: uuidv4(),
            name: 'Bismark',
            max_speed: 135,
            ship_captain: 'Davi Banfi Nogueira',
            size: 335,
            type: 'Militar',
            max_tripulation: 50,
            max_cargo: 15000,
            dock_id: dockalfa.id
        }

        //SHIPS ON DOCK BETA
        const shipSalazar = {
            id: uuidv4(),
            name: 'Salazar',
            max_speed: 200,
            ship_captain: 'Leon S. Kennedy',
            size: 375,
            type: 'Cargueiro',
            max_tripulation: 20,
            max_cargo: 260000,
            dock_id: dockbeta.id
        }

        const shipTchaikovsky = {
            id: uuidv4(),
            name: 'Tchaikovsky',
            max_speed: 225,
            ship_captain: 'Gustavo Fring',
            size: 75,
            type: 'Explorador',
            max_tripulation: 10,
            max_cargo: 500,
            dock_id: dockbeta.id
        }

        //SHIPS ON DOCK SIGMA
        const shipSantaMaria = {
            id: uuidv4(),
            name: 'Santa Maria',
            max_speed: 255,
            ship_captain: 'Rodrigo Faro',
            size: 85,
            type: 'Comerciante',
            max_tripulation: 10,
            max_cargo: 1100,
            dock_id: docksigma.id
        }

        const shipADP = {
            id: uuidv4(),
            name: 'Analysts Pulli',
            max_speed: 110,
            ship_captain: 'Pedro Bonfim Oliveira',
            size: 440,
            type: 'Militar',
            max_tripulation: 40,
            max_cargo: 25000,
            dock_id: docksigma.id
        }

        //CARGOS ON DOCK ALPHA
        const cargoMalcolm = {
            id: uuidv4(),
            ship_id: shipMalcolm.id,
            type: 'Eletrônicos',
            weight: 155000,
            risk_class: 3
        }

        const cargoBismark = {
            id: uuidv4(),
            ship_id: shipBismark.id,
            type: 'Armamento',
            weight: 5000,
            risk_class: 5
        }

        //CARGOS ON DOCK BETA
        const cargoSalazar = {
            id: uuidv4(),
            ship_id: shipSalazar.id,
            type: 'Plantas Exóticas',
            weight: 35500,
            risk_class: 5
        }

        const cargoTchaikovsky = {
            id: uuidv4(),
            ship_id: shipTchaikovsky.id,
            type: 'Carga Humana',
            weight: 335,
            risk_class: 1
        }

        //CARGOS ON DOCK SIGMA
        const cargoSantaMaria = {
            id: uuidv4(),
            ship_id: shipSantaMaria.id,
            type: 'Iguarias',
            weight: 880,
            risk_class: 2
        }

        const cargoADP = {
            id: uuidv4(),
            ship_id: shipADP.id,
            type: 'Urânio-235',
            weight: 15500,
            risk_class: 6
        }

        //ANNOUNCEMENTS ON DOCK ALPHA
        const announcementMalcolm = {
            id: uuidv4(),
            dock_id: shipMalcolm.dock_id,
            ship_id: shipMalcolm.id,
            arrival_time: '2021-06-18 11:35:48'
        }

        const announcementBismark = {
            id: uuidv4(),
            dock_id: shipBismark.dock_id,
            ship_id: shipBismark.id,
            arrival_time: '2021-03-15 22:50:11'
        }

        //ANNOUNCEMENTS ON DOCK BETA
        const announcementSalazar = {
            id: uuidv4(),
            dock_id: shipSalazar.dock_id,
            ship_id: shipSalazar.id,
            arrival_time: '2020-12-23 18:27:36'
        }

        const announcementTchaikovsky = {
            id: uuidv4(),
            dock_id: shipTchaikovsky.dock_id,
            ship_id: shipTchaikovsky.id,
            arrival_time: '2021-09-12 14:00:48'
        }

        //ANNOUNCEMENTS ON DOCK SIGMA
        const announcementSantaMaria = {
            id: uuidv4(),
            dock_id: shipSantaMaria.dock_id,
            ship_id: shipSantaMaria.id,
            arrival_time: '2022-01-01 09:11:35'
        }

        const announcementADP = {
            id: uuidv4(),
            dock_id: shipADP.dock_id,
            ship_id: shipADP.id,
            arrival_time: '2021-07-17 15:06:23'
        }

        //ALLOWED SHIPS
        const allowedShipMalcolm = {
            id: uuidv4(),
            ship_id: shipMalcolm.id,
            dock_id: shipMalcolm.dock_id,
            certification: '2021-06-19 02:04:19'
        }

        const allowedShipSalazar = {
            id: uuidv4(),
            ship_id: shipSalazar.id,
            dock_id: shipSalazar.dock_id,
            certification: '2021-01-13 11:33:10'
        }

        await pool.query(`
        INSERT INTO dock
        (id, name, max_ships, max_ship_size)
        VALUES
        ('${dockalfa.id}', '${dockalfa.name}', ${dockalfa.max_ships}, ${dockalfa.max_ship_size}),
        ('${dockbeta.id}', '${dockbeta.name}', ${dockbeta.max_ships}, ${dockbeta.max_ship_size}),
        ('${docksigma.id}', '${docksigma.name}', ${docksigma.max_ships}, ${docksigma.max_ship_size});
        `);

        await pool.query(`
        INSERT INTO ship
        (id, name, max_speed, ship_captain, size, type, max_tripulation, max_cargo, dock_id)
        VALUES
         ('${shipMalcolm.id}', '${shipMalcolm.name}', ${shipMalcolm.max_speed},
         '${shipMalcolm.ship_captain}', ${shipMalcolm.size}, 
         '${shipMalcolm.type}', ${shipMalcolm.max_tripulation}, ${shipMalcolm.max_cargo}, '${dockalfa.id}'),
         ('${shipBismark.id}', '${shipBismark.name}', ${shipBismark.max_speed},
         '${shipBismark.ship_captain}', ${shipBismark.size}, 
         '${shipBismark.type}', ${shipBismark.max_tripulation}, ${shipBismark.max_cargo}, '${dockalfa.id}'),
         ('${shipSalazar.id}', '${shipSalazar.name}', ${shipSalazar.max_speed},
         '${shipSalazar.ship_captain}', ${shipSalazar.size}, 
         '${shipSalazar.type}', ${shipSalazar.max_tripulation}, ${shipSalazar.max_cargo}, '${dockbeta.id}'), 
         ('${shipTchaikovsky.id}', '${shipTchaikovsky.name}', ${shipTchaikovsky.max_speed},
         '${shipTchaikovsky.ship_captain}', ${shipTchaikovsky.size}, 
         '${shipTchaikovsky.type}', ${shipTchaikovsky.max_tripulation}, ${shipTchaikovsky.max_cargo}, '${dockbeta.id}'),   
         ('${shipSantaMaria.id}', '${shipSantaMaria.name}', ${shipSantaMaria.max_speed},
         '${shipSantaMaria.ship_captain}', ${shipSantaMaria.size}, 
         '${shipSantaMaria.type}', ${shipSantaMaria.max_tripulation}, ${shipSantaMaria.max_cargo}, '${docksigma.id}'),
         ('${shipADP.id}', '${shipADP.name}', ${shipADP.max_speed},
         '${shipADP.ship_captain}', ${shipADP.size}, 
         '${shipADP.type}', ${shipADP.max_tripulation}, ${shipADP.max_cargo}, '${docksigma.id}'); 
        `);

        await pool.query(`
        INSERT INTO cargo
        (id, ship_id, type, weight, risk_class)
        VALUES
        ('${cargoMalcolm.id}', '${shipMalcolm.id}', '${cargoMalcolm.type}', ${cargoMalcolm.weight}, ${cargoMalcolm.risk_class}),
        ('${cargoBismark.id}', '${shipBismark.id}', '${cargoBismark.type}', ${cargoBismark.weight}, ${cargoBismark.risk_class}),
        ('${cargoSalazar.id}', '${shipSalazar.id}', '${cargoSalazar.type}', ${cargoSalazar.weight}, ${cargoSalazar.risk_class}),
        ('${cargoTchaikovsky.id}', '${shipTchaikovsky.id}', '${cargoTchaikovsky.type}', ${cargoTchaikovsky.weight}, ${cargoTchaikovsky.risk_class}),
        ('${cargoSantaMaria.id}', '${shipSantaMaria.id}', '${cargoSantaMaria.type}', ${cargoSantaMaria.weight}, ${cargoSantaMaria.risk_class}),
        ('${cargoADP.id}', '${shipADP.id}', '${cargoADP.type}', ${cargoADP.weight}, ${cargoADP.risk_class});
        `);

        await pool.query(`
        INSERT INTO allowed_ships
        (id, ship_id, certification)
        VALUES
        ('${allowedShipMalcolm.id}', '${shipMalcolm.id}', NOW()),
        ('${allowedShipSalazar.id}', '${shipSalazar.id}', NOW());
        `);

        await pool.query(`
        INSERT INTO announcement
        (id, ship_id, arrival_time, departure_time)
        VALUES
        ('${announcementMalcolm.id}', '${shipMalcolm.id}', '${announcementMalcolm.arrival_time}', NOW() + (random() * (NOW() + '3 days' - NOW())) + '21 days'),
        ('${announcementBismark.id}', '${shipBismark.id}', '${announcementBismark.arrival_time}', null),
        ('${announcementSalazar.id}', '${shipSalazar.id}', '${announcementSalazar.arrival_time}', NOW() + (random() * (NOW() + '3 days' - NOW())) + '21 days'),
        ('${announcementTchaikovsky.id}', '${shipTchaikovsky.id}', '${announcementTchaikovsky.arrival_time}', null),
        ('${announcementSantaMaria.id}', '${shipSantaMaria.id}', '${announcementSantaMaria.arrival_time}', null),
        ('${announcementADP.id}', '${shipADP.id}', '${announcementADP.arrival_time}', null);
        `);

        return response.status(200).json({message: 'Banco semeado com sucesso'})
    }
}