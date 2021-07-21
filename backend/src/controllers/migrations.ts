import pool from "../pool";

export default function runMigrations() {
    pool.query(
        "CREATE TABLE IF NOT EXISTS dock (id INTEGER UNSIGNED AUTO_INCREMENT NOT NULL, name VARCHAR(100) NOT NULL UNIQUE, max_ships INTEGER UNSIGNED NOT NULL, max_ship_size FLOAT NOT NULL, PRIMARY KEY (id));"  
    );
    
    pool.query(
        "CREATE TABLE IF NOT EXISTS ship (id INTEGER UNSIGNED AUTO_INCREMENT NOT NULL, name VARCHAR(100) NOT NULL UNIQUE, max_speed FLOAT NOT NULL, ship_captain VARCHAR(100) NOT NULL, size FLOAT NOT NULL, type VARCHAR(100) NOT NULL, max_tripulation INTEGER NOT NULL, max_cargo FLOAT NOT NULL, dock_id INTEGER UNSIGNED, allowed_ships_id INTEGER UNSIGNED, FOREIGN KEY (dock_id) REFERENCES dock(id), FOREIGN KEY (allowed_ships_id) REFERENCES allowed_ships(id), PRIMARY KEY (id));"
    );

    pool.query(
        "CREATE TABLE IF NOT EXISTS cargo (id INTEGER UNSIGNED AUTO_INCREMENT NOT NULL, ship_id INTEGER UNSIGNED NOT NULL, type VARCHAR(100) NOT NULL, weight FLOAT NOT NULL, risk_class INTEGER UNSIGNED NOT NULL, PRIMARY KEY (id), FOREIGN KEY (ship_id) REFERENCES ship(id));"
    );
    
    pool.query(
        "CREATE TABLE IF NOT EXISTS announcements (id INTEGER UNSIGNED AUTO_INCREMENT NOT NULL, dock_id INTEGER UNSIGNED NOT NULL, ship_id INTEGER UNSIGNED NOT NULL, arrival_time DATETIME NOT NULL, departure_time DATETIME NOT NULL, FOREIGN KEY (dock_id) REFERENCES dock(id), FOREIGN KEY (ship_id) REFERENCES ship(id), PRIMARY KEY (id));"  
    );

    pool.query(
        "CREATE TABLE IF NOT EXISTS routes (id INTEGER UNSIGNED AUTO_INCREMENT NOT NULL, ship_id INTEGER UNSIGNED NOT NULL, distance FLOAT NOT NULL, source VARCHAR(100) NOT NULL, destination VARCHAR(100) NOT NULL, duration TIME NOT NULL, FOREIGN KEY (ship_id) REFERENCES ship(id), PRIMARY KEY (id));"
    );

    pool.query(
        "CREATE TABLE IF NOT EXISTS allowed_ships (id INTEGER UNSIGNED AUTO_INCREMENT NOT NULL, dock_id INTEGER UNSIGNED NOT NULL, certification DATETIME NOT NULL, FOREIGN KEY (dock_id) REFERENCES dock(id), PRIMARY KEY (id));"
    );

    console.log("Migrations completed!");
}