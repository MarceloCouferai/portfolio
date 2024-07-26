import './Professional.css';
import logoUNIFEB from '../../assets/unifeb.png';
import imgIn from '../../assets/entrada.png';
import imgOut from '../../assets/saida.png'

export function Professional(){
    return(
        <section>
            <div id="container">
                <a href="https://www.unifeb.edu.br/"><img src={logoUNIFEB} alt="" /></a>
                <p>Durante minha atuação na UNIFEB, adquiri experiência na instalação e remanejamento de câmeras, bem como na ajuda na criação de projetos de instalação e monitoramento dessas câmeras. Além disso, fui responsável pela criação de salas virtuais e pelo suporte técnico completo para eventos remotos, como palestras e reuniões, desde o início até o término dos mesmos. Também prestei apoio e suporte técnico em eventos externos e internos, incluindo palestras, reuniões e aulas presenciais, garantindo o bom funcionamento dos equipamentos e a satisfação dos participantes.</p>
            </div> 
            <div>
                <ul>
                    <li>
                        <img src={imgIn} alt="Icone de entrada" />
                        <p>Novembro de 2017</p>
                    </li>
                    <li>
                        <img src={imgOut} alt="Icone de saída" />
                        <p>Março de 2021</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}