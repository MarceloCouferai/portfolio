import React from 'react';
import logoImg from '../../assets/logo.png'
import "./Navbar.css";



export function Navbar() {

    return(
        <header id='sumir'>
            <nav id="nav-bar">
                <ul>
                    <li><a href="/">SOBRE MIM</a></li>
                    <li><a href="/">EXPERIÊNCIA</a></li>
                    <li><img src={logoImg} alt="logo M - Marcelo"/></li>
                    <li><a href="#academic">ACADÊMICO</a></li>
                    <li><a href="/">CONTATO</a></li>
                </ul>
            </nav>
        </header>
    )
}