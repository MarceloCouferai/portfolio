import React from 'react';
import logoImg from '../../assets/logo.png'
import "./Navbar.css";

export function Navbar() {
    return(
        <header>
            <nav id="nav-bar">
                <ul>
                    <li><a href="/">SOBRE MIM</a></li>
                    <li><a href="/">ACADÊMICO</a></li>
                    <li><img src={logoImg} alt="logo M - Marcelo"/></li>
                    <li><a href="/">PROJETOS</a></li>
                    <li><a href="/">CONTATO</a></li>
                </ul>
            </nav>
        </header>
    )
}