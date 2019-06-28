import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './pages/main/index'
import Cliente from './pages/clientes/index'
import CadastrarCliente from './pages/cadastrar-cliente/index'
import PaginaInicial from './pages/pagina-inicial/index'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/cliente/:id" component={Cliente} />
            <Route path="/cadastrar/cliente" component={CadastrarCliente} />
            <Route path="/pagina-inicial" component={PaginaInicial} />
        </Switch>
    </BrowserRouter>
);

export default Routes