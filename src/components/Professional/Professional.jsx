import './Professional.css';
import imgIn from '../../assets/entrada.png';
import imgOut from '../../assets/saida.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


export function Professional(props){
    AOS.init();
    return(
        <section data-aos="fade-up">
            <div id="container">
                <h1>{props.title}</h1>
                <a href={props.site}><img src={props.img} alt="" /></a>
                <p>{props.conteudo}</p>
            </div> 
            <div>
                <ul>
                    <li>
                        <img src={imgIn} alt="Icone de entrada" />
                        <p>{props.dateIn}</p>
                    </li>
                    <li>
                        <img src={imgOut} alt="Icone de saída" />
                        <p>{props.dateOut}</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}