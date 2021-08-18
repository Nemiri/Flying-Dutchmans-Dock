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
}

const Docks: React.FC = () => {
  const history = useHistory();

  const [ships, setShips] = useState<Ship[]>([]);

  useEffect(() => {
    api.get<Ship[]>("ship").then((response) => {
      setShips(
        response.data.map((ship) => {
          return {
            ...ship,
            arrival_time: format(parseISO(ship.arrival_time), "dd/MM/yyyy"),
          };
        })
      );
    });
  }, []);

  const seeShip = useCallback(
    (id) => {
      history.push(`ship/${id}`);
    },
    [history]
  );

  console.log(ships);

  return (
    <Container>
      <h1>Embarcações</h1>
      <h2>Todos os Navios Ancorados</h2>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Detalhes do Navio</th>
            <th>Tipo</th>
            <th>Nome do Capitão</th>
            <th>Data da Ancoragem</th>
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
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Docks;
