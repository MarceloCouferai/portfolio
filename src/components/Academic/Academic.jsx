import React from 'react';
import './Academic.css'
import imgIn from'../../assets/entrada.png'
import imgOut from'../../assets/saida.png'
import AOS from 'aos';


export function Academic(props){
    const botaoCertificado = props.visualizar;
    AOS.init();
    return(
        <section id="academic" data-aos="fade-up">
            <h1>{props.title}</h1>
            <div id="container">
                <a href={props.site}>
                    <img src={props.cursoImg} alt="" />
                </a>
                <p>{props.cursoName}</p>
            </div>
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
                    botaoCertificado ? ( <a href={props.site}><button>Exibir Certificado</button></a>) : 
                    (<a href={props.site}><button>Sem certificado digital</button></a>)
                }
            </div>
        </section>
    )
}