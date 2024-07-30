import React from 'react';
import './Academic.css'
import imgIn from'../../assets/entrada.png'
import imgOut from'../../assets/saida.png'
import AOS from 'aos';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";


export function Academic(props){
    const botaoCertificado = props.visualizar;
    AOS.init();
    return(
        <section id="academic" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" className='section-academic'>
            <h1>{props.title}</h1>
            <div id="container-academic">
                <a href={props.site}>
                    <img src={props.cursoImg} alt="" />
                </a>
                <p>{props.cursoName}</p>
            <div id="container-bottom">
                <ul>
                    <li>
                        <img src={imgIn} alt="" />
                        <p>{props.dateIn}</p>
                    </li>
                    <li>
                        <img src={imgOut} alt="" />
                        <p>{props.dateOut}</p>
                    </li>
                </ul>
                {
                    botaoCertificado ? ( <a href={props.site}><button>Exibir Certificado <FontAwesomeIcon icon={faLink} /></button></a>) : 
                    (<a href={props.site}><button>
                        Certificado Indisponível </button></a>)
                }
            </div>
            </div>
        </section>
    )
}