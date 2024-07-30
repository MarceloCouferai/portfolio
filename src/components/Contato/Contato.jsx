import './Contato.css'
import AOS from 'aos';

export function Contato(){
    AOS.init();
    return(
            <form id="formAncora" action="" data-aos="zoom-in" >
                    <h3>Entre em contato!</h3>
                <div className='container-form'>
                    <div className='container-form-option'>
                        <label htmlFor="">Nome</label>
                        <input type="text" nome="" id="inputName" placeholder="Insira seu nome"/>
                    </div>
                    <div className='container-form-option'>
                        <label htmlFor="">E-mail</label>
                        <input type="email" placeholder="Insira seu endereço de e-mail"/>
                    </div>
                    <div className='container-form-option'>
                        <label htmlFor="">Observação</label>
                        <input type="text" placeholder="Digite sua mensagem..."/>
                    </div>
                    <button type="submit">Enviar</button>
                </div>
            </form>
    )
}