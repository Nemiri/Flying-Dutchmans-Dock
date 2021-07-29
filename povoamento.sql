INSERT INTO dock (
  id, 
  name, 
  max_ships, 
  max_ship_size
) VALUES (
  "${id}", 
  "${request.body.name}",
  ${request.body.max_ships},
  ${request.body.max_ship_size}
);

INSERT INTO ship (
  id,
  name,
  max_speed, 
  ship_captain, 
  size, 
  type, 
  max_tripulation, 
  max_cargo, 
  dock_id
) VALUES (
  "${id}", 
  "${request.body.name}", 
  ${request.body.max_speed}, 
  "${request.body.ship_captain}", 
  ${request.body.size}, 
  "${request.body.type}", 
  ${request.body.max_tripulation}, 
  ${request.body.max_cargo}, 
  "${request.body.dock_id}"
);

INSERT INTO cargo (
  type, 
  weight, 
  risk_class
) VALUES (
  "${id}", 
  ${request.body.type}, 
  ${request.body.weight}, 
  ${request.body.risk_class}
);

INSERT INTO routes (
  id, 
  ship_id, 
  distance, 
  source, 
  destination, 
  duration
) VALUES (
  "${id}", 
  "${request.body.ship_id}", 
  ${request.body.distance},
  "${request.body.source}",
  "${request.body.destination}",
  "${request.body.duration}"
);

INSERT INTO announcement (
  id, 
  dock_id, 
  ship_id, 
  arrival_time, 
  departure_time
) VALUES (
  "${id}", 
  "${request.body.dock_id}", 
  "${request.body.ship_id}", 
  "${request.body.arrival_time}", 
  "${request.body.departure_time}"
);

INSERT INTO allowed_ships (
  id, 
  dock_id, 
  ship_id, 
  certification
) VALUES (
  "${id}", 
  "${request.body.dock_id}", 
  "${request.body.ship_id}", 
  ${request.body.certification}
);
