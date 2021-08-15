import React from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';

import Docks from '../pages/Docks';
import Menu from "../components/Navbar";

const Routes: React.FC = () => (
    <BrowserRouter>
        <Menu/>
        <Switch>
            <Route path="/docks" component={Docks}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;