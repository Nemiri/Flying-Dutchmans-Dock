import React from "react";

import {Container, Form} from "./styles";
import api from "../../api/api";

import {useForm} from "react-hook-form";
import {useHistory, useParams} from "react-router-dom";

interface CargoForm {
    type: string;
    weight: string;
    risk_class: string;
}

interface Request {
    ship_id: string;
}

const CreateShip: React.FC = () => {
    const {register, handleSubmit} = useForm();
    const history = useHistory();
    const params = useParams<Request>();

    const onSubmit = async (data: CargoForm) => {
        console.dir({...data, ship_id: params.ship_id})
        try {
            await api.post("/cargo", {
                ...data,
                ship_id: params.ship_id
            });
        } catch (e) {
            console.log(e.message);
        }

        history.push(`/ship/${params.ship_id}`);
    };

    return (
        <Container>
            <h2>Registrar Carga</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-div">
                    <label>Tipo da Carga</label>
                    <input
                        {...register("type")}
                        placeholder="Tá levando o que aí?"
                    />
                </div>
                <div className="input-div">
                    <label>Peso da Carga (em Kg)</label>
                    <input
                        {...register("weight", {valueAsNumber: true})}
                        placeholder="Pesa quanto?"
                    />
                </div>
                <div className="input-div">
                    <label>Classe de Risco</label>
                    <select {...register("risk_class", {valueAsNumber: true})}>
                        <option value="" disabled selected hidden>Se for 5, eu saio correndo agora</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
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
