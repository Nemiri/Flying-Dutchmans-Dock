import React, { useEffect, useState } from "react";

import { Container, Form } from "./styles";
import api from "../../api/api";

import { useForm } from "react-hook-form";
import {useHistory, useParams} from "react-router-dom";

interface Dock {
  id: string;
  name: string;
}

interface EditShipForm {
  name: string;
  type: string;
  max_speed: number;
  ship_captain: string;
  tripulation: number;
  max_tripulation: number;
  max_cargo: number;
  size: number;
  dock_id: string;
}

interface Request {
  id: string;
}

const EditShip: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const [docks, setDocks] = useState<Dock[]>([]);
  const history = useHistory();
  const params = useParams<Request>();

  useEffect(() => {
    api.get("/dock").then((response) => {
      setDocks(response.data);
    });
  }, []);

  const onSubmit = async (data: EditShipForm) => {
    try {
      await api.put(`/ship/${params.id}`, data);
    } catch (e) {
      console.log(e.message);
    }

    history.push("/ships");
  };

  return (
    <Container>
      <h2>Registrar Embarcação</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-div">
          <label>Editar Nome da Embarcação</label>
          <input
            {...register("name")}
            placeholder="Digite o novo nome da embarcação."
          />
        </div>
        <div className="input-div">
          <label>Editar Tipo da Embarcação</label>
          <select {...register("type")}>
            <option value="" disabled selected hidden>
              Selecione o novo tipo da embarcação
            </option>
            <option value="Exploração">Exploração</option>
            <option value="Cargueiro">Cargueiro</option>
            <option value="Militar">Militar</option>
            <option value="Comerciante">Comerciante</option>
          </select>
        </div>
        <div className="input-div">
          <label>Editar Tamanho da Embarcação (em m²)</label>
          <input
            {...register("size", { valueAsNumber: true })}
            placeholder="Digite o novo tamanho do navio."
          />
        </div>
        <div className="input-div">
          <label>Editar Máximo de Tripulantes</label>
          <input
            {...register("max_tripulation", { valueAsNumber: true })}
            placeholder="Digite o novo máximo de tripulantes."
          />
        </div>
        <div className="input-div">
          <label>Editar Velocidade Máxima</label>
          <input
            {...register("max_speed", { valueAsNumber: true })}
            placeholder="Digite a nova velocidade máxima."
          />
        </div>
        <div className="input-div">
          <label>Editar Nome do Capitão</label>
          <input
            {...register("ship_captain")}
            placeholder="Digite o novo nome do capitão."
          />
        </div>
        <div className="input-div">
          <label>Editar Máximo de Carga (Kg)</label>
          <input
            {...register("max_cargo", { valueAsNumber: true })}
            placeholder="Digite a nova quantidade de carga máxima."
          />
        </div>
        <div className="input-div">
          <label>Editar Tripulação Atual</label>
          <input
            {...register("tripulation", { valueAsNumber: true })}
            placeholder="Digite a nova quantidade de tripulantes."
          />
        </div>
        <div className="input-div">
          <label>Editar Doca</label>
          <select {...register("dock_id")}>
            <option value="" disabled selected hidden>
              Escolha uma nova Doca
            </option>
            {docks.map((dock) => {
              return <option value={dock.id}>{dock.name}</option>;
            })}
          </select>
        </div>
        <button type="submit" value="submit">
          Editar
        </button>
      </Form>
    </Container>
  );
};

export default EditShip;