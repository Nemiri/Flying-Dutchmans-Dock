
import { Container, Form } from "./styles";
import api from "../../api/api";

import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import React from "react";

interface DockForm {
  name: string;
  max_ships: number;
  max_ship_size: number;
}

const CreateDock: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = async (data: DockForm) => {
    try {
      await api.post("/dock", data);
    } catch (e) {
      console.log(e.message);
    }

    history.push("/docks");
  };

  return (
    <Container>
      <h2>Registrar Doca</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-div">
          <label>Nome da Doca</label>
          <input
            {...register("name")}
            placeholder="Tente pensar em mais letras gregas!"
          />
        </div>
        <div className="input-div">
          <label>Máximo de Embarcações</label>
          <input 
            {...register("max_ships", { valueAsNumber: true })}
            placeholder= "Passou de 3 já é aglomeração."
          />
        </div>
        <div className="input-div">
          <label>Tamanho máximo da Embarcação (em m²)</label>
          <input
            {...register("max_ship_size", { valueAsNumber: true })}
            placeholder="Tamanho não é documento, hein."
          />
        </div>
        <button type="submit" value="submit">
          Cadastrar
        </button>
      </Form>
    </Container>
  );
};

export default CreateDock;