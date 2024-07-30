import './Footer.css';
import linkedin from '../../assets/linkedin.png';
import instagram from '../../assets/instagram.png';
import git from '../../assets/github.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export function Footer(){
    return(
        <footer id='footer'>
            <div id='container'>
                <div id='icons'>
                    <a href="https://br.linkedin.com/in/marcelo-couferai">
                        <img src={linkedin} alt="" />
                    </a>
                    <a href="https://www.instagram.com/couferai/">
                        <img src={instagram} alt="" />
                    </a>
                    <a href="https://github.com/MarceloCouferai">
                        <img src={git} alt="" />
                    </a>
                </div>
                <div id='dados'>
                <div className='footer-email'>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <p >mcouferai@gmail.com</p>
                </div>
                    <p>© DESENVOLVIDO POR MARCELO COUFERAI</p>
                    <p>Barretos - 2024</p>
                </div>
            </div>
        </footer>
    )
}