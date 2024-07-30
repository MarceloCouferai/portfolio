import React from 'react';
import logoImg from '../../assets/logo.png'
import "./Navbar.css";



export function Navbar() {

    return(
        <header>
            <nav id="nav-bar" data-aos="fade-down" data-aos-delay="200" data-aos-duration="1000">
                <ul>
                    <li><a href="#about">SOBRE MIM</a></li>
                    <li><a href="#Ancora-Professional">EXPERIÊNCIA</a></li>
                    <li><img src={logoImg} alt="logo M - Marcelo"/></li>
                    <li><a href="#AncoraAcademic">ACADÊMICO</a></li>
                    <li><a href="#formAncora">CONTATO</a></li>
                </ul>
            </nav>
        </header>
    )
}