import React from 'react';
import logoImg from '../../assets/logo.png'
import "./Navbar.css";



export function Navbar() {

    return(
        <header id='sumir'>
            <nav id="nav-bar">
                <ul>
                    <li><a href="#about">SOBRE MIM</a></li>
                    <li><a href="#professional">EXPERIÊNCIA</a></li>
                    <li><img src={logoImg} alt="logo M - Marcelo"/></li>
                    <li><a href="#academic">ACADÊMICO</a></li>
                    <li><a href="#footer">CONTATO</a></li>
                </ul>
            </nav>
        </header>
    )
}