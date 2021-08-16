import React, {useEffect, useState} from 'react'
import { Container, Table, TableContainer } from './styles'

import api from '../../api/api'

interface Ship {
    name: string;
    ship_captain: string;
    dock_name: string
    arrival_time: string;
}

const Docks = () => {
    const [ships, setShips] = useState<Ship[]>([])

    useEffect(() => {
        api.get<Ship[]>('ship').then((response) => {
            setShips(response.data)
        })
    }, [])

    return (
        <Container>
            <TableContainer>
                <div id="table-header">
                    <h1>Docas</h1>
                    <h2>Todos os Navios Ancorados</h2>
                </div>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Detalhes do Navio</th>
                            <th>Nome do Capitão</th>
                            <th>Data da Ancoragem</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ships.map((ship, index) => {
                            return (
                                <tr>
                                    <td>{index}</td>
                                    <td>{ship.name}<br/>{ship.dock_name}</td>
                                    <td>{ship.ship_captain}</td>
                                    <td>{ship.dock_name}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default Docks;