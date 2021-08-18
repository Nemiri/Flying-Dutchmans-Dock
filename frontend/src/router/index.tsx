import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";

import Ships from "../pages/Ships";
import Ship from "../pages/Ship";
import CreateShip from "../pages/CreateShip";
import CreateCargo from '../pages/CreateCargo'
import Docks from "../pages/Dock";
import Menu from "../components/Navbar";

const Routes: React.FC = () => (
  <BrowserRouter>
    <Menu />
    <Switch>
      <Route path="/ships" component={Ships} />
      <Route path="/create_ship" component={CreateShip} />
      <Route path="/create_cargo/:ship_id" component={CreateCargo} />
      <Route path="/ship/:id" component={Ship} />
      <Route path="/docks/" component={Docks} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
