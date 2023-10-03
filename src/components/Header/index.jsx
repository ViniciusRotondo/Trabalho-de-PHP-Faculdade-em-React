import React from "react";
import { useEffect } from "react";
import './header.css'
import { Link } from "react-router-dom";


const Header = () => {

    useEffect(() => {}, []);

    return (    
        <header className="cabecalho">
            <a href="/home">
                <img src="https://www.fatecjd.edu.br/site/assets/imagens/fatec.png" alt="logo" />
            </a>
            <h2>P1 de Linguagem de Promagação IV</h2>
        </header>
    );
};

export default Header;

