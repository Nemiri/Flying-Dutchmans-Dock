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
  id: string;
  type: string;
  risk_class: number;
  weight: number;
}

interface Request {
  id: string;
}

const Ship: React.FC = () => {
  const params = useParams<Request>();

  const checked = new Array<boolean>(3).fill(false)
  const [isEnabled, setIsEnabled] = useState(false);
  const [ship, setShip] = useState<SingleShip>({} as SingleShip);
  const [cargo, setCargo] = useState<Cargo[]>([]);

  const history = useHistory();

  const handleSubmit = async () => {
    try {
      await api.post("/allowed_ships", {
        dock_id: ship.dock_id,
        ship_id: ship.id,
      });

      await api.put(`announcement/${params.id}`)

      history.push("/ships");
    } catch (e) {
      console.log(e);
    }
  };

  const verifyChecked = (position: number, checked: Array<boolean>) => {
    checked[position] = !checked[position]
    
    if (checked.includes(false))
      setIsEnabled(false)
    else
      setIsEnabled(true)
  }

  const createCargo = () => {
    history.push(`/create_cargo/${params.id}`);
  }

  const editShip = () => {
    history.push(`/edit_ship/${params.id}`);
  }

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

  console.log(cargo)

  const deleteShip = async (ship_id: string) => {
    alert('Deseja deletar a embarcação?')

    await api.delete(`ship/${ship_id}`)

    history.push("/ships");
  }

  return (
    <Container>
      <h1>{ship.name}</h1>
      <ShipAndCargo>
        <InfoContainer>
          <div className="header">
            <div>
              <h2>Informações</h2>
              <p>Ancorado na doca {ship.dock_name}</p>
            </div>
            <div>
              <button onClick={editShip}>Editar navio</button>
              <button id="delete" onClick={()=>deleteShip(ship.id)}>Excluir</button>
            </div>
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
            <div>
              <h2>Informações da Carga</h2>
              <p>Classe mais alta de risco: {ship.highest_risk_class}</p>
            </div>
            <button id='add-cargo' onClick={createCargo}>Registrar carga</button>
          </div>
          <div id="general-info">
            {cargo.map((single_cargo) => {
              return (
                <div key={single_cargo.id} id="cells">
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
                </div>
              );
            })}
          </div>
        </InfoContainer>
      </ShipAndCargo>
      {ship.isCertificated == null ? (
        <Certificate>
          <form>
            <div id="certification-header">
              <div>
                <h2>Certificar</h2>
                <p>Para a embarcação ser certificada, confirme a checklist.</p>
              </div>
              {isEnabled ? <button onClick={handleSubmit}>Certificar</button> : <button onClick={handleSubmit} disabled>Certificar</button>}
            </div>
            <div id="checklist-container">
              <div>
                <label className="checklist">
                  <input type="checkbox" className="checkbox" onChange={() => verifyChecked(0, checked)}/>
                  <p>Tem alguém armado?</p>
                </label>
                <hr />
                <label className="checklist">
                  <input type="checkbox" className="checkbox" onChange={() => verifyChecked(1, checked)}/>
                  <p>Algum tripulante tem TikTok instalado?</p>
                </label>
                <hr />
                <label className="checklist">
                  <input type="checkbox" className="checkbox" onChange={() => verifyChecked(2, checked)}/>
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
