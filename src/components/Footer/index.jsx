import React from "react";
import { useEffect } from "react";
import './footer.css'


const Footer = () => {

    useEffect(() => {}, []);

    return (    
        <header className="rodape">
            <img src="https://www.fatecjd.edu.br/site/assets/imagens/fatec.png" alt="logo" />

        
            <p><b>Professora:</b> Luciana Ferreira</p>
                <ul>
                    <li><b>Integrantes: </b></li>
                    <li>Vinícius Rotondo Silva</li>
                    <li>Guilherme de Araujo Miyahira</li>
                    <li>Vitor Silva dos Santos</li>
                </ul>
           
        </header>
    );
};

export default Footer;
