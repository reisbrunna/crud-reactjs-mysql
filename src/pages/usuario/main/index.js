import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FiEye, FiEdit, FiTrash } from 'react-icons/fi';
import moment from 'moment';

import './index.css';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: []
        }
    }

    componentDidMount() {
        fetch(`http://localhost:3003/sistema/usuarios`)
            .then(usuario =>
                usuario.json().then(usuario => this.setState({ usuario }))
            )
    }


    render() {
        const { usuario } = this.state;
        return (
            <div>
                <div className="header">
                    <h1 className="title">Lista de funcionários</h1>
                    <div className="criarUsuario">
                        <Link to={`/criarUsuario/`}>
                            <strong>CADASTRAR</strong>
                        </Link>&nbsp;&nbsp;
                    </div>
                </div>
                <section>

                    <div className="tbl-header">
                        <table cellpadding="0" cellspacing="0" border="0">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nome</th>
                                    <th>Salário</th>
                                    <th>Data de Nascimento</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                        </table>
                    </div>

                    <div className="usuario-list">
                        <table cellpadding="0" cellspacing="0" border="0">
                            <tbody>
                                {usuario.map((usuario, index) => (
                                    <tr key={index}>
                                        <td>{usuario.id}</td>
                                        <td>{usuario.nome}</td>
                                        <td>{new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(usuario.salario)}</td>
                                        <td>{moment(usuario.dataNascimento).format('DD/MM/YYYY')}</td>
                                        <td>
                                            <p>
                                                <Link to={`/usuarios/${usuario.id}`}>
                                                    <FiEye size={16} color="#000000" />
                                                </Link>&nbsp;&nbsp;

                                                 <Link to={`/deletarUsuario/${usuario.id}`}>
                                                    <FiTrash size={16} color="#000000" />
                                                </Link>&nbsp;&nbsp;

                                                <Link to={`/editarUsuario/${usuario.id}`}>
                                                    <FiEdit size={16} color="#000000" />
                                                </Link>
                                            </p>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        );

    }
}