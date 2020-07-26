import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';


const Home = () => {
    return (
        <div id="page-home">
            <div className="content">

                <main>
                    <h1>Visualize, cadastre, edite e exclua dados de forma simples e prática</h1>
                   
                    <Link to="/usuarios">
                       
                        <strong>ENTRAR</strong>

                    </Link>
                </main>
            </div>
        </div>
    )
}

export default Home;