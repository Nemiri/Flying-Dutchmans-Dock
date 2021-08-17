import React, {useCallback, useEffect, useState} from "react";

import { Container, InfoContainer, Certificate, ShipAndCargo } from './styles'
import api from "../../api/api";
import { useParams } from "react-router-dom";

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
}

interface Cargo {
    type: string;
    risk_class: number;
    weight: number;
}

interface Request {
    id: string
}

const Ship: React.FC = () => {
    const params = useParams<Request>()
    const [ship, setShip] = useState<SingleShip>({} as SingleShip)
    const [cargo, setCargo] = useState<Cargo[]>([])

    const handleSubmit = useCallback(() => {
        api.post('allowed_ships', {
            dock_id: ship.dock_id,
            ship_id: ship.id
        })
    }, [])

    useEffect( () => {
        api.get<SingleShip>(`ship/${params.id}`).then(response => {
            setShip(response.data)
        })

        api.get<Cargo[]>(`cargo/${params.id}`).then(response => {
            setCargo(response.data)
        })
    }, [params.id])

    return (
        <Container>
            <h1>{ship.name}</h1>
            <ShipAndCargo>
                <InfoContainer>
                    <div className="header">
                        <h2>Informações</h2><p>{ship.dock_name}</p>
                    </div>
                    <div id="general-info">
                        <div className="cell">
                            <p>Velocidade Máxima</p>
                            <h3>{ship.max_speed} Km/h</h3>
                            <hr/>
                        </div>
                        <div className="cell">
                            <p>Número máximo de Tripulantes</p>
                            <h3>{ship.max_tripulation}</h3>
                            <hr/>
                        </div>
                        <div className="cell">
                            <p>Tipo da Embarcação</p>
                            <h3>{ship.type}</h3>
                            <hr/>
                        </div>
                        <div className="cell">
                            <p>Tamanho</p>
                            <h3>{ship.size} m²</h3>
                            <hr/>
                        </div>
                        <div className="cell">
                            <p>Peso máximo de carga</p>
                            <h3>{ship.max_cargo} Kg</h3>
                            <hr/>
                        </div>
                        <div className="cell">
                            <p>Certificado em</p>
                            <h3>25/08/2021</h3>
                        </div>
                    </div>
                </InfoContainer>
                <InfoContainer>
                    <div className="header">
                        <h2>Informações da Carga</h2><p>Classe mais alta de risco: {ship.highest_risk_class}</p>
                    </div>
                    <div id="general-info">
                        {cargo.map(single_cargo => {
                            return(
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
                                        <hr/>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </InfoContainer>
            </ShipAndCargo>
            <Certificate>
                <div id="header">
                    <div>
                        <h2>Certificar</h2><p>Para a embarcação ser certificada, confirme a checklist.</p>
                    </div>
                    <button type="submit" onClick={() => alert('aaa')}><p>Gerar Certificado</p></button>
                </div>
                <form id="checklist-container" onSubmit={handleSubmit}>
                    <label className="checklist">
                        <input type="checkbox" className="checkbox" />
                        <p>Tem alguém armado?</p>
                    </label>
                    <hr/>
                    <label className="checklist">
                        <input type="checkbox" className="checkbox" />
                        <p>Algum tripulante tem TikTok instalado?</p>
                    </label>
                    <hr/>
                    <label className="checklist">
                        <input type="checkbox" className="checkbox" />
                        <p>Certeza que ninguém tá armado?</p>
                    </label>
                </form>
            </Certificate>
        </Container>
    )
}

export default Ship