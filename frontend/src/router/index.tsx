import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";

import Ships from "../pages/Navies";
import Ship from "../pages/Ship";
import CreateShip from "../pages/CreateShip";

import Menu from "../components/Navbar";

const Routes: React.FC = () => (
  <BrowserRouter>
    <Menu />
    <Switch>
      <Route path="/ships" component={Ships} />
      <Route path="/create_ship" component={CreateShip} />
      <Route path="/ship/:id" component={Ship} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
