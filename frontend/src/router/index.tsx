import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";

import Ships from "../pages/Ships";
import Ship from "../pages/Ship";
import CreateShip from "../pages/CreateShip";
import CreateCargo from '../pages/CreateCargo'
import Docks from "../pages/Dock";
import Menu from "../components/Navbar";
import CreateDock from "../pages/CreateDock";
import EditShip from "../pages/EditShip";
import Announcements from "../pages/Announcement";
import EditDock from "../pages/EditDock";

const Routes: React.FC = () => (
  <BrowserRouter>
    <Menu />
    <Switch>
      <Route path="/ships" component={Ships} />
      <Route path="/ship/:id" component={Ship} />
      <Route path="/create_ship" component={CreateShip} />
      <Route path="/edit_ship/:ship_id" component={EditShip}/>
      <Route path="/create_cargo/:ship_id" component={CreateCargo} />
      <Route path="/" exact component={Docks} />
      <Route path="/docks/" component={Docks} />
      <Route path="/create_dock" component={CreateDock} />
      <Route path="/edit_dock/:dock_id" component={EditDock} />
      <Route path="/announcements" component={Announcements} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
