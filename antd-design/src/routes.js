import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ClientList from './pages/main/index'
import Cliente from './pages/clientes/index'
import EditClient from './pages/editar-cliente/index'
import CadastrarCliente from './pages/cadastrar-cliente/index'
import PaginaInicial from './pages/pagina-inicial/index'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={PaginaInicial} />
            <Route path="/cliente/editar/:id" component={EditClient} />
            <Route path="/cliente/:id" component={Cliente} />
            <Route path="/cadastrar/cliente" component={CadastrarCliente} />
            <Route path="/clientes" component={ClientList} />
        </Switch>
    </BrowserRouter>
);

export default Routes