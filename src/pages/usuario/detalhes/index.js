import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import moment from 'moment';
import './index.css';


export default class Usuario extends Component {
    state = {
        usuario: {}
    };

    componentDidMount() {
        const { id } = this.props.match.params;

        fetch(`http://localhost:3003/sistema/usuarios/${id}`)
            .then(usuario =>
                usuario.json().then(usuario => this.setState({ usuario }))
            )
    }

    render() {

        const { usuario } = this.state;

        if (usuario.ativo) {
            usuario.ativo = "Usuário ativo";
        } else {
            usuario.ativo = "Usuário inativo";
        }


        return (
            <div id="detalhes">
                <Link to={`/usuarios`}>
                    <FiArrowLeft />&nbsp;&nbsp;
                        Voltar
                </Link><br />

                <fieldset>
                    <legend>Detalhes</legend>
                    <div className="usuario-info">
                        <h1>Nome: {usuario.nome}</h1>
                        <h1>Status: {usuario.ativo}</h1>
                        <h1>Salário: {new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(usuario.salario)}</h1>
                        <h1>Data de nascimento: {moment(usuario.dataNascimento).format('DD/MM/YYYY')}</h1>
                        <br />

                    </div>
                </fieldset>
            </div>
        )


    }
}