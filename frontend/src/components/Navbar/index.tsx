import React, {useCallback} from "react";
import { Container, Navbar, LogoAndTitle } from "./style"

import { FaAnchor, FaShip, FaTicketAlt } from 'react-icons/fa'
import { IoMegaphone } from 'react-icons/io5'
import { useHistory } from "react-router-dom";
import { GiCargoShip } from "react-icons/gi";
import { FaSeedling } from "react-icons/fa"
import api from "../../api/api";

const Menu: React.FC = () => {
    localStorage.setItem('isSeeded', JSON.stringify(false))

    const history = useHistory()

    const redirectDocks = useCallback(() => {
        history.push('/docks');
    }, [history])

    const redirectNavies = useCallback(() => {
        history.push('/navies');
    }, [history])

    const redirectAnnouncements = useCallback(() => {
        history.push('/announcements');
    }, [history])

    const redirectCertificates = useCallback(() => {
        history.push('/certificates');
    }, [history])

    const seed = useCallback(() => {
        if(localStorage.getItem('isSeeded') === 'true') {
            alert('O Banco de Dados já foi semeado.')
            return;
        }

        api.post('/seeder');
        localStorage.setItem('isSeeded', JSON.stringify(true))
    }, [])

    return (
        <Container>
            <LogoAndTitle>
                <GiCargoShip/>
                <h3>Flying Dutchman's Dock</h3>
            </LogoAndTitle>
            <Navbar>
                <li onClick={redirectDocks}>
                    <FaAnchor/><p>Docas</p>
                </li>
                <li onClick={redirectNavies}>
                    <FaShip/><p>Navios</p>
                </li>
                <li onClick={redirectCertificates}>
                    <FaTicketAlt/><p>Certificados</p>
                </li>
                <li onClick={redirectAnnouncements}>
                    <IoMegaphone/><p>Anúncios</p>
                </li>
                <li onClick={seed}>
                    <FaSeedling/><p>Rodar Seeder</p>
                </li>
            </Navbar>
        </Container>
    )
}

export default Menu;