import React, { useEffect, useState } from "react";

import api from "../../api/api";

import { IoCheckmarkSharp } from "react-icons/io5";
import { Container, InfoContainer, Certificate, ShipAndCargo } from "./styles";
import { useHistory, useParams } from "react-router-dom";
import { format, parseISO } from "date-fns";

interface SingleShip {
  id: string;
  name: string;
  type: string;
  size: number;
  ship_captain: string;
  max_tripulation: number;
  max_cargo: number;
  max_speed: number;
  highest_risk_class: number;
  dock_name: string;
  dock_id: string;
  arrival_time: string;
  isCertificated?: string;
  certification_time?: string;
}

interface Cargo {
  type: string;
  risk_class: number;
  weight: number;
}

interface Request {
  id: string;
}

const Ship: React.FC = () => {
  const params = useParams<Request>();
  const [ship, setShip] = useState<SingleShip>({} as SingleShip);
  const [cargo, setCargo] = useState<Cargo[]>([]);

  const history = useHistory();

  const handleSubmit = async () => {
    try {
      await api.post("/allowed_ships", {
        dock_id: ship.dock_id,
        ship_id: ship.id,
      });
      history.push("/ships");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    api.get<SingleShip>(`ship/${params.id}`).then((response) => {
      if (response.data.certification_time) {
        response.data.certification_time = format(
          parseISO(response.data.certification_time),
          "dd/MM/yyyy"
        );
      }

      setShip(response.data);
    });

    api.get<Cargo[]>(`cargo/${params.id}`).then((response) => {
      setCargo(response.data);
    });
  }, [params.id]);

  console.dir(ship)

  return (
    <Container>
      <h1>{ship.name}</h1>
      <ShipAndCargo>
        <InfoContainer>
          <div className="header">
            <h2>Informações</h2>
            <p>{ship.dock_name}</p>
          </div>
          <div id="general-info">
            <div className="cell">
              <p>Velocidade Máxima</p>
              <h3>{ship.max_speed} Km/h</h3>
              <hr />
            </div>
            <div className="cell">
              <p>Número máximo de Tripulantes</p>
              <h3>{ship.max_tripulation}</h3>
              <hr />
            </div>
            <div className="cell">
              <p>Tipo da Embarcação</p>
              <h3>{ship.type}</h3>
              <hr />
            </div>
            <div className="cell">
              <p>Tamanho</p>
              <h3>{ship.size} m²</h3>
              <hr />
            </div>
            <div className="cell">
              <p>Peso máximo de carga</p>
              <h3>{ship.max_cargo} Kg</h3>
            </div>
          </div>
        </InfoContainer>
        <InfoContainer>
          <div className="header">
            <h2>Informações da Carga</h2>
            <p>Classe mais alta de risco: {ship.highest_risk_class}</p>
            <button id='add-cargo'>registrar carga</button>
          </div>
          <div id="general-info">
            {cargo.map((single_cargo) => {
              return (
                <>
                  <div className="cell">
                    <p>Tipo da Carga</p>
                    <h3>{single_cargo.type}</h3>
                  </div>
                  <div className="cell">
                    <p>Peso</p>
                    <h3>{single_cargo.weight} Kg</h3>
                  </div>
                  <div className="cell">
                    <p>Risco</p>
                    <h3>{single_cargo.risk_class}</h3>
                    <hr />
                  </div>
                </>
              );
            })}
          </div>
        </InfoContainer>
      </ShipAndCargo>
      {ship.isCertificated == null ? (
        <Certificate>
          <form>
            <div id="header">
              <div>
                <h2>Certificar</h2>
                <p>Para a embarcação ser certificada, confirme a checklist.</p>
              </div>
              <button onClick={handleSubmit}>Certificar</button>
            </div>
            <div id="checklist-container">
              <div>
                <label className="checklist">
                  <input type="checkbox" className="checkbox" />
                  <p>Tem alguém armado?</p>
                </label>
                <hr />
                <label className="checklist">
                  <input type="checkbox" className="checkbox" />
                  <p>Algum tripulante tem TikTok instalado?</p>
                </label>
                <hr />
                <label className="checklist">
                  <input type="checkbox" className="checkbox" />
                  <p>Certeza que ninguém tá armado?</p>
                </label>
              </div>
            </div>
          </form>
        </Certificate>
      ) : (
        <Certificate>
          <div className="certificated">
            <IoCheckmarkSharp color="limegreen" />
            <div>
              <h2>Navio Certificado em {ship.certification_time}</h2>
              <p>Este navio foi certificado e está pronto para partir</p>
            </div>
          </div>
        </Certificate>
      )}
    </Container>
  );
};

export default Ship;
