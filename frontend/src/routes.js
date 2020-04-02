import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Logged from './pages/Logged';
import NewLogin from './pages/newLogin';

export default function Router() {
    return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/logged/:id" component={Logged} />
          <Route path="/graduate" component={NewLogin} />
        </Switch>
      </BrowserRouter>
    );
}