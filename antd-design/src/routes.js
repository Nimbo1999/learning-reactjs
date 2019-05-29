import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './pages/main/index'
import Cliente from './pages/clientes/index'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/cliente/:id" component={Cliente} />
        </Switch>
    </BrowserRouter>
);

export default Routes