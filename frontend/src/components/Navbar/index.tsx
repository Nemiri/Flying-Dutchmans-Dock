import React, {useCallback} from "react";
import { Container, Navbar, LogoAndTitle } from "./style"

import logo from '../../assets/logo.png'
import { FaAnchor, FaShip, FaTicketAlt } from 'react-icons/fa'
import { IoMegaphone } from 'react-icons/io5'
import { useHistory } from "react-router-dom";

const Menu: React.FC = () => {
    const history = useHistory()

    const redirectDocks = useCallback(() => {
        history.push('/docks')
    }, [history])

    const redirectNavies = useCallback(() => {
        history.push('/navies')
    }, [history])

    const redirectAnnouncements = useCallback(() => {
        history.push('/announcements')
    }, [history])

    const redirectCertificates = useCallback(() => {
        history.push('/certificates')
    }, [history])

    return (
        <Container>
            <LogoAndTitle>
                <img src={logo} alt="logo"/>
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
            </Navbar>
        </Container>
    )
}

export default Menu;