import React, {useEffect, useState} from 'react'
import { Container, Table, TableContainer } from './styles'

import api from '../../api/api'

interface Dock {
    name: string;
    max_ships: number;
    max_ship_size: number;
}

interface Ship {
    name: string;
    ship_captain: string;
}

const Docks = () => {
    const [docks, setDocks] = useState({} as Dock[])
    const [ships, setShips] = useState({} as Ship[])

    useEffect(() => {
        api.get('dock').then((response) => {
            setDocks(response.data)
        })

        api.get('ship').then((response) => {
            setShips(response.data)
        })
    }, [])

    console.dir(docks)
    console.dir(ships)

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
                        <tr>
                            <td>1</td>
                            <td>Bismarck</td>
                            <td>Davi Banfi</td>
                            <td>26/08/2021</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Bismarck</td>
                            <td>Davi Banfi</td>
                            <td>26/08/2021</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Bismarck</td>
                            <td>Davi Banfi</td>
                            <td>26/08/2021</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Bismarck</td>
                            <td>Davi Banfi</td>
                            <td>26/08/2021</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Bismarck</td>
                            <td>Davi Banfi</td>
                            <td>26/08/2021</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Bismarck</td>
                            <td>Davi Banfi</td>
                            <td>26/08/2021</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Bismarck</td>
                            <td>Davi Banfi</td>
                            <td>26/08/2021</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Bismarck</td>
                            <td>Davi Banfi</td>
                            <td>26/08/2021</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Bismarck</td>
                            <td>Davi Banfi</td>
                            <td>26/08/2021</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Bismarck</td>
                            <td>Davi Banfi</td>
                            <td>26/08/2021</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Bismarck</td>
                            <td>Davi Banfi</td>
                            <td>26/08/2021</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Bismarck</td>
                            <td>Davi Banfi</td>
                            <td>26/08/2021</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Bismarck</td>
                            <td>Davi Banfi</td>
                            <td>26/08/2021</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Bismarck</td>
                            <td>Davi Banfi</td>
                            <td>26/08/2021</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Bismarck</td>
                            <td>Davi Banfi</td>
                            <td>26/08/2021</td>
                        </tr>
                    </tbody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default Docks;