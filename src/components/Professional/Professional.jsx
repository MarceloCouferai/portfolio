import './Professional.css';
import imgIn from '../../assets/entrada.png';
import imgOut from '../../assets/saida.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


export function Professional(props){
    AOS.init();
    return(
        <section id="professional" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" className='section-professional'>
            <div id="container-professional">
                <h1>{props.title}</h1>
                <a href={props.site}><img src={props.img} alt="" /></a>
                <p>{props.conteudo}</p>
            </div> 
            <div className='container-professional-dates'>
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