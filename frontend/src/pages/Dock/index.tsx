import React, { useEffect, useState } from "react";
import { Container, Table } from "./styles";
import { useHistory } from "react-router-dom";
import api from "../../api/api";
import { useCallback } from "react";

interface Dock {
  id: string;
  name: string;
  max_ships: number;
  ships: number;
  max_ship_size: number;
}

const Docks: React.FC = () => {
  const history = useHistory();
  const [docks, setDocks] = useState<Dock[]>([]);

  useEffect(() => {
    api.get<Dock[]>("dock").then((response) => {
      setDocks(response.data);
    });
  }, []);

  const createDock = () => {
    history.push("/create_dock");
  };
  
  const deleteDock = useCallback((dock_id: string) => {
    try{
      api.delete(`/dock/${dock_id}`).then(() => {
        api.get<Dock[]>("dock").then((response) => {
          setDocks(response.data);
        });
      })
    } catch(e) {
      alert(e.message);
    }
  },[])

  return (
    <Container>
      <h1>Docas</h1>
      <div id = "containerHeader">
      <h2>Todos as Docas em funcionamento</h2>
        <button onClick={createDock}>Registrar Doca</button>
      </div>
      <div id="scroller">
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Detalhes da Doca</th>
              <th>Embarcações Ancoradas</th>
              <th>Máximo de Embarcações</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {docks.map((dock, index) => {
              return (
                <tr key = {dock.id}>
                  <td>{index}</td>
                  <td>{dock.name}</td>
                  <td>{dock.ships}</td>
                  <td>{dock.max_ships}</td>
                  <td><button onClick={()=>deleteDock(dock.id)}>Excluir</button></td>
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
