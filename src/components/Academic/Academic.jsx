import './Academic.css'
import '../../assets/unifeb.png'

export function Academic(props){
    return(
        <section>
            <img src={props.cursoImg} alt="" />
            <p>{props.cursoName}</p>
            <ul>
                <li>
                    <img src="" alt="" />
                    <p></p>
                </li>
                <li>
                    <img src="" alt="" />
                    <p></p>
                </li>
            </ul>
            <button>Exibir Certificado</button> 
        </section>
    )
}