import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";

import Ships from "../pages/Ships";
import Ship from "../pages/Ship";
import CreateShip from "../pages/CreateShip";
import Docks from "../pages/Dock";
import Menu from "../components/Navbar";
import CreateDock from "../pages/CreateDock";

const Routes: React.FC = () => (
  <BrowserRouter>
    <Menu />
    <Switch>
      <Route path="/ships" component={Ships} />
      <Route path="/create_ship" component={CreateShip} />
      <Route path="/ship/:id" component={Ship} />
      <Route path="/docks/" component={Docks} />
      <Route path="/create_dock" component={CreateDock} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
