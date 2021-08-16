import React, { useEffect, useState } from "react";

import { Container } from './styles'
import api from "../../api/api";
import {useParams} from "react-router-dom";

interface Ship {
    name: string;
    ship_captain: string;
    dock_name: string
    arrival_time: string;
}

interface Request {
    id: string
}

const Ship: React.FC = () => {
    const params = useParams<Request>()
    const [ship, setShip] = useState<Ship>()

    useEffect(() => {
        api.get<Ship>(`ship/${params.id}`).then((response) => {
            const ship = response.data

            setShip(ship)
        })
    }, [params.id])

    return (
        <Container>
            <h1>{ship?.name}</h1>
        </Container>
    )
}

export default Ship