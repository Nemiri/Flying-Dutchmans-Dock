import React, { useEffect, useState } from "react";
import { Container, Table } from "./styles";
import { useHistory } from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import Button from '@material-ui/core/Button';

import api from "../../api/api";

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

  const createDock = () => {
    history.push("/create_dock");
  };

  useEffect(() => {
    api.get<Dock[]>("dock").then((response) => {
      setDocks(response.data);
    });
  }, []);

  const deleteDock = async (dock_id: string) => {
    alert('Deseja deletar a doca?')

    await api.delete(`dock/${dock_id}`)

    api.get('dock').then(response => {
      setDocks(response.data)
    })
  }
  
  const updateDock = (dock_id: string) => {
    history.push(`/update_dock/${dock_id}`);
  }

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
                  <td>
                      <div id="menu">
                      <Button
                        variant="contained"
                        color="secondary"
                        id = "update"
                        startIcon={<CreateIcon />}
                        onClick={()=>updateDock(dock.id)}
                        > Update </Button>
                        <Button
                        variant="contained"
                        color="secondary"
                        id = "delete"
                        startIcon={<DeleteIcon />}
                        onClick={()=>deleteDock(dock.id)}
                        > Delete </Button>
                      </div>
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
