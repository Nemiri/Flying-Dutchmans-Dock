import React, { useEffect, useState } from "react";

import { Container, ShipInfo, CargoInfo, Certificate, ShipAndCargo } from './styles'
import api from "../../api/api";
import { useParams } from "react-router-dom";

interface SingleShip {
    name: string;
    ship_captain: string;
    dock_name: string
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
                <ShipInfo>
                    <p>ShipInfo</p>
                </ShipInfo>
                <CargoInfo>
                    <p>CargoInfo</p>
                </CargoInfo>
            </ShipAndCargo>
            <Certificate>
                <p>Certificate</p>
            </Certificate>
        </Container>
    )
}

export default Ship