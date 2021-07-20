import pool from "../../pool";
import ICreateCargoDTO from "../DTOs/ICreateCargoDTO";

export default class CargoController {
  public CreateCargo(data: ICreateCargoDTO) {
    pool.query(
      `INSERT INTO cargo (type, weight, risk_class) VALUES ("${data.type}", ${data.weight}, ${data.risk_class});`
    );
  }
}
