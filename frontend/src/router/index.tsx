import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Navies from '../pages/Navies';
import Ship from '../pages/Ship'

import Menu from "../components/Navbar";

const Routes: React.FC = () => (
    <BrowserRouter>
        <Menu/>
        <Switch>
            <Route path="/navies" component={Navies}/>
            <Route path="/ship/:id" component={Ship}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;