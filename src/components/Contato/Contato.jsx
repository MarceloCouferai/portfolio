import './Contato.css'
import AOS from 'aos';

export function Contato(){
    AOS.init();
    return(
            <form id="formAncora" action={process.env.REACT_APP_API_URL_SHEETMONKEY} data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom" method="post">
                    <h3>Entre em contato!</h3>
                <div className='container-form'>
                    <div className='container-form-option'>
                        <label htmlFor="">Nome</label>
                        <input  name="name" type="text" nome="" id="inputName"/>
                    </div>
                    <div className='container-form-option'>
                        <label htmlFor="">E-mail</label>
                        <input name="email" type="email"/>
                    </div>
                    <div className='container-form-option'>
                        <label htmlFor="">Mensagem</label>
                        <textarea name="mensagem" id=""></textarea>
                    </div>
                    <button type="submit">Enviar</button>
                </div>
            </form>
    )
}