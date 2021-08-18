import React, { useCallback, useEffect, useState } from "react";
import { Container, Table } from "./styles";
import { parseISO, format } from "date-fns";

import api from "../../api/api";
import { useHistory } from "react-router-dom";

interface Ship {
  id: string;
  name: string;
  type: string;
  ship_captain: string;
  dock_name: string;
  arrival_time: string;
  isCertificated?: string;
  certification_time?: string;
}

const Docks: React.FC = () => {
  const history = useHistory();

  const [ships, setShips] = useState<Ship[]>([]);

  useEffect(() => {
    api.get<Ship[]>("ship").then((response) => {
      console.dir(response.data);

      setShips(
        response.data.map((ship) => {
          if (!ship.arrival_time) return ship;
          if (!ship.certification_time) return ship;

          return {
            ...ship,
            arrival_time: format(parseISO(ship.arrival_time), "dd/MM/yyyy"),
            certification_time: format(
              parseISO(ship.certification_time),
              "dd/MM/yyyy"
            ),
          };
        })
      );
    });
  }, []);

  const createShip = useCallback(() => {
    history.push("/create_ship");
  }, [history]);

  const seeShip = useCallback(
    (id) => {
      history.push(`ship/${id}`);
    },
    [history]
  );

  return (
    <Container>
      <h1>Embarcações</h1>
      <div id="header">
        <h2>Todos os Navios Ancorados</h2>
        <button onClick={createShip}>Registrar Embarcação</button>
      </div>
      <div id="scroller">
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Detalhes do Navio</th>
              <th>Tipo</th>
              <th>Nome do Capitão</th>
              <th>Data da Ancoragem</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {ships.map((ship, index) => {
              return (
                <tr onClick={() => seeShip(ship.id)}>
                  <td>{index}</td>
                  <td>
                    {ship.name}
                    <br />
                    {ship.dock_name}
                  </td>
                  <td>{ship.type}</td>
                  <td>{ship.ship_captain}</td>
                  <td>{ship.arrival_time}</td>
                  <td>
                    {ship.isCertificated !== null ? (
                      <p style={{ color: "limegreen" }}>
                        Certificado em {ship.certification_time}
                      </p>
                    ) : (
                      <p style={{ color: "red" }}>Aguardando Certificação</p>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default Docks;
