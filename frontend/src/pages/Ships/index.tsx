import React, { useEffect, useState } from "react";
import { Container, Table } from "./styles";
import { parseISO, format } from "date-fns";

import api from "../../api/api";
import { useHistory } from "react-router-dom";

interface Ship {
  id: string;
  name: string;
  tripulation: number;
  type: string;
  ship_captain: string;
  dock_name: string;
  cargo: number;
  arrival_time: string;
  isCertificated?: string;
  certification_time?: string;
}

const Docks: React.FC = () => {
  const history = useHistory();

  const [ships, setShips] = useState<Ship[]>([]);

  useEffect(() => {
    api.get<Ship[]>("ship").then((response) => {
      setShips(
        response.data.map((ship) => {
          if (!ship.certification_time && !ship.arrival_time) return ship;

          if (!ship.certification_time) return {
            ...ship,
            arrival_time: format(parseISO(ship.arrival_time), "dd/MM/yyyy"),
          };

          if (!ship.arrival_time) return {
            ...ship,
            certification_time: format(
              parseISO(ship.certification_time),
              "dd/MM/yyyy"
            ),
          }

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

  const createShip = () => {
    history.push("/create_ship");
  };

  const seeShip = (id: string) => {
    history.push(`ship/${id}`);
  };

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
              <th>Carga atual</th>
              <th>Data da Ancoragem</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {ships.map((ship, index) => {
              return (
                <tr onClick={() => seeShip(ship.id)} key={ship.id}>
                  <td>{index}</td>
                  <td>
                    {ship.name}
                    <br />
                    {ship.dock_name}
                  </td>
                  <td>{ship.type}</td>
                  <td>{ship.ship_captain}</td>
                  {ship.cargo ? <td>{ship.cargo} Kg</td> : <td>Nenhuma carga registrada</td>}
                  {ship.arrival_time ? <td>{ship.arrival_time}</td> : <td>Ainda não ancorado</td>}
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
