import pool from "../../pool";
import ICreateDocksDTO from "../DTOs/ICreateDockDTO";

export default class DockController {
  public CreateDock(data: ICreateDocksDTO) {
    pool.query(
      `INSERT INTO dock (name, max_ships, max_ship_size) VALUES ("${data.name}", ${data.max_ships}, ${data.max_ship_size});`
    );
  }
}
