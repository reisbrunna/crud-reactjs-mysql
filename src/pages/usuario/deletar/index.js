import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './index.css';

export default class DeletarUsuario extends Component {
    constructor(props) {
        super(props);

        this.state = {
            usuario: {},
            redirect: false
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        fetch(`http://localhost:3003/sistema/usuarios/${id}`)
            .then(data => {
                data.json().then(data => {
                    this.setState({ usuario: data });
                });
            })
    }

    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to="/usuarios" />
        } else {

            return (
                <div id="deletar">
                    <Link to={`/usuarios`}>
                        <FiArrowLeft />&nbsp;&nbsp;
                        Voltar
                    </Link><br />

                    <fieldset>
                        <legend>Deletar usuário</legend>
                        <div className="usuario-delete">
                            <label htmlFor="nome">Usuário: {this.state.usuario.nome}</label>
                            <p>Tem certeza que deseja deletar este registro ?</p>

                            <button onClick={this.handleClick}>Confirmar</button>
                            <br />
                        </div>
                    </fieldset>
                </div>

            );
        }
    }

    handleClick = event => {
        const { id } = this.props.match.params;
        fetch(`http://localhost:3003/sistema/usuarios/${id}`, {
            method: "delete"
        })
            .then(data => {
                if (data.ok) {
                    this.setState({ redirect: true })
                }
            })

        event.preventDefault();
    }

}


