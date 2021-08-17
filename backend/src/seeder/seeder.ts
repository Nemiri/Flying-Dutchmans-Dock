import pool from "../pool";
import { v4 as uuidv4 } from "uuid";

export default function seeder(){
    //DOCKS
    const dockalfa = {
        id: uuidv4(),
        name: "Doca Alfa",
        max_ships: 50,
        max_ship_size: 155
    }
    const dockbeta = {
        id: uuidv4(),
        name: "Doca Beta",
        max_ships: 35,
        max_ship_size: 350
    }
    const docksigma = {
        id: uuidv4(),
        name: "Doca Sigma",
        max_ships: 20,
        max_ship_size: 755
    }

    //SHIPS ON DOCK ALPHA
    const shipMalcolm = {
        id: uuidv4(),
        name: "Malcolm",
        max_speed: 200,
        ship_captain: "Walter White",
        size: 445,
        type: "Cargueiro",
        max_tripulation: 20,
        max_cargo: 260000,
        dock_id: dockalfa.id
    }
    const shipBismark = {
        id: uuidv4(),
        name: "Bismark",
        max_speed: 135,
        ship_captain: "Davi Banfi Nogueira",
        size: 335,
        type: "Militar",
        max_tripulation: 50,
        max_cargo: 15000,
        dock_id: dockalfa.id
    }

    //SHIPS ON DOCK BETA
    const shipSalazar = {
        id: uuidv4(),
        name: "Salazar",
        max_speed: 200,
        ship_captain: "Leon S. Kennedy",
        size: 375,
        type: "Cargueiro",
        max_tripulation: 20,
        max_cargo: 260000,
        dock_id: dockbeta.id
    }
    const shipTchaikovsky = {
        id: uuidv4(),
        name: "Tchaikovsky",
        max_speed: 225,
        ship_captain: "Gustavo Fring",
        size: 75,
        type: "Explorador",
        max_tripulation: 10,
        max_cargo: 500,
        dock_id: dockbeta.id
    }

    //SHIPS ON DOCK SIGMA
    const shipSantaMaria = {
        id: uuidv4(),
        name: "Santa Maria",
        max_speed: 255,
        ship_captain: "Pedro Cabral Álvares",
        size: 85,
        type: "Comerciante",
        max_tripulation: 10,
        max_cargo: 1100,
        dock_id: docksigma.id
    }
    const shipADP = {
        id: uuidv4(),
        name: "Analysts Pulli",
        max_speed: 110,
        ship_captain: "Pedro Bonfim Oliveira",
        size: 440,
        type: "Militar",
        max_tripulation: 40,
        max_cargo: 25000,
        dock_id: docksigma.id
    }

    //CARGOS ON DOCK ALPHA
    const cargoMalcolm = {
        id: uuidv4(),
        ship_id: shipMalcolm.id,
        type: "Eletrônicos",
        weight: 155000,
        risk_class: 3
    }
    const cargoBismark = {
        id: uuidv4(),
        ship_id: shipBismark.id,
        type: "Armamento",
        weight: 5000,
        risk_class: 5
    }

    //CARGOS ON DOCK BETA   
    const cargoSalazar = {
        id: uuidv4(),
        ship_id: shipSalazar.id,
        type: "Plantas Exóticas",
        weight: 35500,
        risk_class: 5
    }
    const cargoTchaikovsky = {
        id: uuidv4(),
        ship_id: shipTchaikovsky.id,
        type: "Carga Humana",
        weight: 335,
        risk_class: 1
    }

    //CARGOS ON DOCK SIGMA 
    const cargoSantaMaria = {
        id: uuidv4(),
        ship_id: shipSantaMaria.id,
        type: "Iguarias",
        weight: 880,
        risk_class: 2
    }
    const cargoADP = {
        id: uuidv4(),
        ship_id: shipADP.id,
        type: "Urânio-235",
        weight: 15500,
        risk_class: 6
    }

    //ANNOUNCEMENTS ON DOCK ALPHA
    const announcementMalcolm = {
        id: uuidv4(),
        dock_id: shipMalcolm.dock_id,
        ship_id: shipMalcolm.id,
        arrival_time: "2021-06-18 11:35:48"
    }
    const announcementBismark = {
        id: uuidv4(),
        dock_id: shipBismark.dock_id,
        ship_id: shipBismark.id,
        arrival_time: "2021-03-15 22:50:11"
    }

    //ANNOUNCEMENTS ON DOCK BETA
    const announcementSalazar = {
        id: uuidv4(),
        dock_id: shipSalazar.dock_id,
        ship_id: shipSalazar.id,
        arrival_time: "2020-12-23 18:27:36"
    }
    const announcementTchaikovsky = {
        id: uuidv4(),
        dock_id: shipTchaikovsky.dock_id,
        ship_id: shipTchaikovsky.id,
        arrival_time: "2021-09-12 14:00:48"
    }

    //ANNOUNCEMENTS ON DOCK SIGMA
    const announcementSantaMaria = {
        id: uuidv4(),
        dock_id: shipSantaMaria.dock_id,
        ship_id: shipSantaMaria.id,
        arrival_time: "2022-01-01 09:11:35"
    }
    const announcementADP = {
        id: uuidv4(),
        dock_id: shipADP.dock_id,
        ship_id: shipADP.id,
        arrival_time: "2021-07-17 15:06:23"
    }

    //ALLOWED SHIPS
    const allowedShipMalcolm = {
        id: uuidv4(),
        ship_id: shipMalcolm.id,
        dock_id: shipMalcolm.dock_id,
        certification: "2021-06-19 02:04:19"
    }
    const allowedShipSalazar = {
        id: uuidv4(),
        ship_id: shipSalazar.id,
        dock_id: shipSalazar.dock_id,
        certification: "2021-01-13 11:33:10"
    }

    //ROUTES FOR SHIPS ON DOCK ALPHA
    const routeMalcolm = {
        id: uuidv4(),
        ship_id: shipMalcolm.id,
        distance: 4550,
        source: "Porto Velho, Brasil",
        destination: "Orlando, USA",
        duration: "35:05:00"
    }
    const routeBismark = {
        id: uuidv4(),
        ship_id: shipBismark.id,
        distance: 8908,
        source: "Hamburgo, Alemanha",
        destination: "Hong Kong, China",
        duration: "128:30:00"
    }

    //ROUTES FOR SHIPS ON DOCK BETA
    const routeSalazar = {
        id: uuidv4(),
        ship_id: shipSalazar.id,
        distance: 11805,
        source: "Lisboa, Portugal",
        destination: "San Antonio, Chile",
        duration: "128:05:00"
    }
    const routeTchaikovsky = {
        id: uuidv4(),
        ship_id: shipTchaikovsky.id,
        distance: 9450,
        source: "São Petersburgo, Rússia",
        destination: "Recife, Brasil",
        duration: "98:05:00"
    }

    //ROUTES FOR SHIPS ON DOCK SIGMA
    const routeSantaMaria = {
        id: uuidv4(),
        ship_id: shipSantaMaria.id,
        distance: 2922,
        source: "Porto Velho, Brasil",
        destination: "Altamira, Mexico",
        duration: "09:05:00"
    }
    const routeADP = {
        id: uuidv4(),
        ship_id: shipMalcolm.id,
        distance: 5364,
        source: "Recife, Brasil",
        destination: "Tríangulo das Bermudas, Porto Rico",
        duration: "15:05:00"
    }

    //davi eu te odeio
}