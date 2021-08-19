import React, { useEffect, useState } from "react";
import { Container, Table } from "./styles";
import { useHistory } from "react-router-dom";
import api from "../../api/api";

interface Announcement {
  id: string;
  dock_id: string;
  ship_id: number;
  arrival_time: number;
  departure_time: number;
}

const Announcements: React.FC = () => {
  const history = useHistory();
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);

  const createAnnouncement = () => {
    history.push("/create_announcement");
  };

  return (
    <Container>
      <h1>Docas</h1>
      <div id = "containerHeader">
      <h2>Todos as Docas em funcionamento</h2>
        <button onClick={createAnnouncement}>Novo Anúncio</button>
      </div>
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
          {announcements.map((announcement, index) => {
            return (
              <tr>
                <td>{index}</td>
                <td>{announcement.dock_id}</td>
                <td>{announcement.ship_id}</td>
                <td>{announcement.arrival_time}</td>
                <td>{announcement.departure_time}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
          <button>Deletar Anúncio</button>
    </Container>
  );
};

export default Announcements;