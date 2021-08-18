import React, { useEffect, useState } from "react";
import { Container, Table } from "./styles";

import api from "../../api/api";

interface Dock {
  id: string;
  name: string;
  max_ships: number;
  ships: number;
  max_ship_size: number;
}

const Docks: React.FC = () => {
  const [docks, setDocks] = useState<Dock[]>([]);

  useEffect(() => {
    api.get<Dock[]>("dock").then((response) => {
      setDocks(response.data);
    });
  }, []);

  return (
    <Container>
      <h1>Docas</h1>
      <h2>Todos as Docas em funcionamento</h2>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Detalhes da Doca</th>
            <th>Embarcações Ancoradas</th>
            <th>Máximo de Embarcações</th>
          </tr>
        </thead>
        <tbody>
          {docks.map((dock, index) => {
            return (
              <tr>
                <td>{index}</td>
                <td>{dock.name}</td>
                <td>{dock.ships}</td>
                <td>{dock.max_ships}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Docks;
