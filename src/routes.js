import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/usuario/home';
import MainUsuario from './pages/usuario/main';
import DetalhesUsuario from './pages/usuario/detalhes';
import CriarUsuario from './pages/usuario/criar';
import EditarUsuario from './pages/usuario/editar';
import DeletarUsuario from './pages/usuario/deletar';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route component={Home} path="/" exact />
            <Route exact path="/usuarios" component={MainUsuario} />
            <Route path="/usuarios/:id" component={DetalhesUsuario} />
            <Route path="/criarUsuario/" component={CriarUsuario} />
            <Route path="/editarUsuario/:id" component={EditarUsuario} />
            <Route path="/deletarUsuario/:id" component={DeletarUsuario} />

        </Switch>
    </BrowserRouter>
)

export default Routes;