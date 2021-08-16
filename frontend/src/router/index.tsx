import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Docks from '../pages/Docks';
import Ship from '../pages/Ship'

import Menu from "../components/Navbar";

const Routes: React.FC = () => (
    <BrowserRouter>
        <Menu/>
        <Switch>
            <Route path="/docks" component={Docks}/>
            <Route path="/ship/:id" component={Ship}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;