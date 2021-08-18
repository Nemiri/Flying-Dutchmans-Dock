import React, { useEffect, useState } from "react";

import { Container, Form } from "./styles";
import api from "../../api/api";

import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

interface Dock {
  id: string;
  name: string;
}

interface ShipForm {
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

const CreateShip: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const [docks, setDocks] = useState<Dock[]>([]);
  const history = useHistory();

  useEffect(() => {
    api.get("/dock").then((response) => {
      setDocks(response.data);
    });
  }, []);

  const onSubmit = async (data: ShipForm) => {
    try {
      api.post("/ship", data).then(response => {
        if (response.status === 200) {
          alert('O banco foi semado com valores predefinidos!')
        } else {
          alert('Erro ao semear o banco, talvez você já tenha semeado?')
        }
      });
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
          <label>Nome da Embarcação</label>
          <input
            {...register("name")}
            placeholder="Todas as embarcações legais tem nome!"
          />
        </div>
        <div className="input-div">
          <label>Tipo da Embarcação</label>
          <select {...register("type")}>
            <option value="" disabled selected hidden>
              Tipo da Embarcação
            </option>
            <option value="Exploração">Exploração</option>
            <option value="Cargueiro">Cargueiro</option>
            <option value="Militar">Militar</option>
            <option value="Comerciante">Comerciante</option>
          </select>
        </div>
        <div className="input-div">
          <label>Tamanho da Embarcação (em m²)</label>
          <input
            {...register("size", { valueAsNumber: true })}
            placeholder="É melhor ser grande."
          />
        </div>
        <div className="input-div">
          <label>Máximo de Tripulantes</label>
          <input
            {...register("max_tripulation", { valueAsNumber: true })}
            placeholder="Lembre-se: não é como coração de mãe"
          />
        </div>
        <div className="input-div">
          <label>Velocidade Máxima</label>
          <input
            {...register("max_speed", { valueAsNumber: true })}
            placeholder="Será que alcança o Holandês Voador?"
          />
        </div>
        <div className="input-div">
          <label>Nome do Capitão</label>
          <input
            {...register("ship_captain")}
            placeholder="Se for Jack Sparrow é melhor procurar outro lugar"
          />
        </div>
        <div className="input-div">
          <label>Máximo de Carga (Kg)</label>
          <input
            {...register("max_cargo", { valueAsNumber: true })}
            placeholder="Tá carregando o que aí? Pedras?"
          />
        </div>
        <div className="input-div">
          <label>Tripulação Atual</label>
          <input
            {...register("tripulation", { valueAsNumber: true })}
            placeholder="Vai fazer festa?"
          />
        </div>
        <div className="input-div">
          <label>Doca</label>
          <select {...register("dock_id")}>
            <option value="" disabled selected hidden>
              Escolha uma Doca
            </option>
            {docks.map((dock) => {
              return <option value={dock.id}>{dock.name}</option>;
            })}
          </select>
        </div>
        <button type="submit" value="submit">
          Cadastrar
        </button>
      </Form>
    </Container>
  );
};

export default CreateShip;
