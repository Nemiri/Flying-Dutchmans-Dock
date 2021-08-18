import React, {useEffect, useState} from "react";

import { Container, Form } from './styles'
import api from "../../api/api";

interface Dock {
  id: string;
  name: string;
}

const CreateShip: React.FC = () => {
  const [docks, setDocks] = useState<Dock[]>([]);

  useEffect(() => {
    api.get('/dock').then(response => {
      setDocks(response.data)
    })
  }, [])

  console.log(docks)

  return (
    <Container>
      <Form onSubmit={() => alert('Foi!')}>
        <div className="input-div">
          <label>Nome da Embarcação</label>
          <input name="name" type="text" id="name" placeholder="Todas as embarcações legais tem nome!"/>
        </div>
        <div className="input-div">
          <label>Tipo da Embarcação</label>
          <select name="type" id="type">
            <option value="" disabled selected hidden>Tipo da Embarcação</option>
            <option value="Exploração">Exploração</option>
            <option value="Cargueiro">Cargueiro</option>
            <option value="Militar">Militar</option>
            <option value="Comerciante">Comerciante</option>
          </select>
        </div>
        <div className="input-div">
          <label>Tamanho da Embarcação (em m²)</label>
          <input name="size" type="text" id="size" placeholder="É melhor ser grande." />
        </div>
        <div className="input-div">
          <label>Máximo de Tripulantes</label>
          <input name="max_tripulation" type="text" id="max_tripulation" placeholder="Lembre-se: não é como coração de mãe"/>
        </div>
        <div className="input-div">
          <label>Velocidade Máxima</label>
          <input name="max_speed" type="text" id="max_speed" placeholder="Será que alcança o Holandês Voador?"/>
        </div>
        <div className="input-div">
          <label>Nome do Capitão</label>
          <input name="ship_captain" type="text" id="ship_captain" placeholder="Se for Jack Sparrow é melhor procurar outro lugar"/>
        </div>
        <div className="input-div">
          <label>Máximo de Carga (Kg)</label>
          <input name="max_cargo" type="text" id="max_cargo" placeholder="Tá carregando o que aí? Pedras?"/>
        </div>
        <div className="input-div">
          <label>Doca</label>
          <select name="dock_id" id="dock_id">
            <option value="" disabled selected hidden>Escolha uma Doca</option>
            {docks.map(dock => {
              return (
                  <option value={dock.id}>{dock.name}</option>
              )
            })}
          </select>
        </div>
        <button type="submit"><p>Cadastrar</p></button>
      </Form>
    </Container>
  );
};

export default CreateShip;
