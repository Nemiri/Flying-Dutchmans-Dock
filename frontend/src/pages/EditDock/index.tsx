
import { Container, Form } from "./styles";
import api from "../../api/api";

import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import React from "react";

interface EditDockForm {
  name: string;
  max_ships: number;
  max_ship_size: number;
}

interface Request {
 dock_id: string;
}

const EditDock: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const params = useParams<Request>();

  const onSubmit = async (data: EditDockForm) => {
    try {
      await api.put(`/dock/${params.dock_id}`, {
          ...data
      });
    } catch (e) {
      console.log(e.message);
    }

    history.push("/docks");
  };

  return (
    <Container>
      <h2>Atualizar Doca</h2>
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
          Editar
        </button>
      </Form>
    </Container>
  );
};

export default EditDock;