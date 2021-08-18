import React, { useCallback, useEffect, useState } from "react";
import { Container, Table } from "./styles";

import api from "../../api/api";
import { useHistory } from "react-router-dom";

interface Dock {
  id: string;
  name: string;
  max_ships: number;
  max_ship_size: number;
}

const Docks: React.FC = () => {
  const history = useHistory();

  const [docks, setDocks] = useState<Dock[]>([]);

  useEffect(() => {
    api.get<Dock[]>("dock").then((response) => {
      setDocks(
        response.data
        )
      ;
    });
  }, []);

  const seeDock = useCallback(
    (id) => {
      history.push(`dock/${id}`);
    },
    [history]
  );

  console.log(docks);

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
              <tr onClick={() => seeDock(dock.id)}>
                <td>{index}</td>
                <td>
                  {dock.name}
                  <br />
                </td>
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