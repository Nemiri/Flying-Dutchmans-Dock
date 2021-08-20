import pool from "../pool";

export default async function runMigrations() {
  await pool.query(
    "CREATE TABLE IF NOT EXISTS dock (id VARCHAR(100) NOT NULL, name VARCHAR(100) NOT NULL UNIQUE, max_ships INTEGER NOT NULL, max_ship_size FLOAT NOT NULL, PRIMARY KEY (id));"
  );

  await pool.query(
    "CREATE TABLE IF NOT EXISTS ship (id VARCHAR(100) NOT NULL, name VARCHAR(100) NOT NULL UNIQUE, max_speed FLOAT NOT NULL, ship_captain VARCHAR(100) NOT NULL, size FLOAT NOT NULL, type VARCHAR(100) NOT NULL, max_tripulation INTEGER NOT NULL, max_cargo FLOAT NOT NULL, dock_id VARCHAR(100), FOREIGN KEY (dock_id) REFERENCES dock(id) ON DELETE CASCADE, PRIMARY KEY (id));"
  );

  await pool.query(
    "CREATE TABLE IF NOT EXISTS cargo (id VARCHAR(100) NOT NULL, ship_id VARCHAR(100) NOT NULL, type VARCHAR(100) NOT NULL, weight FLOAT NOT NULL, risk_class INTEGER NOT NULL, PRIMARY KEY (id), FOREIGN KEY (ship_id) REFERENCES ship(id) ON DELETE CASCADE);"
  );

  await pool.query(
    "CREATE TABLE IF NOT EXISTS announcement (id VARCHAR(100) NOT NULL, ship_id VARCHAR(100) NOT NULL, arrival_time TIMESTAMP NOT NULL DEFAULT NOW(), departure_time TIMESTAMP, FOREIGN KEY (ship_id) REFERENCES ship(id) ON DELETE CASCADE, PRIMARY KEY (id));"
  );

  await pool.query(
    "CREATE TABLE IF NOT EXISTS allowed_ships (id VARCHAR(100) NOT NULL, ship_id VARCHAR(100) NOT NULL, certification TIMESTAMP NOT NULL DEFAULT NOW(), FOREIGN KEY (ship_id) REFERENCES ship(id) ON DELETE CASCADE, PRIMARY KEY (id));"
  );

  console.log("Migrations completed!");
}
