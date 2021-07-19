import pool from "../../pool";
import ICreateShipDTO from "./ICreateShipDTO";

export default function CreateShip(data: ICreateShipDTO) {
  pool.query(`INSERT INTO ship (name, max_speed, ship_captain, size, type, max_tripulation, max_cargo, dock_id, allowed_ships_id)
    VALUES ("${data.name}", ${data.max_speed}, "${data.ship_captain}", ${data.size}, "${data.type}", ${data.max_tripulation}, ${data.max_cargo}, ${data.dock_id}, ${data.allowed_ships_id});`);
}
