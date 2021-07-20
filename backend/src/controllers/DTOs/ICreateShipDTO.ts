export default interface ICreateShipDTO {
  name: string;
  max_speed: number;
  ship_captain: string;
  size: number;
  type: string;
  tripulation: number;
  max_tripulation: number;
  max_cargo: number;
  allowed_ships_id: number;
  dock_id: number;
}
