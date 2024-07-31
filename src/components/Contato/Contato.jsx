import './Contato.css'
import AOS from 'aos';

export function Contato(){
    AOS.init();
    return(
            <form action="" data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom">
                    <h3>Entre em contato!</h3>
                <div className='container-form'>
                    <div className='container-form-option'>
                        <label htmlFor="">Nome</label>
                        <input type="text" nome="" id="inputName"/>
                    </div>
                    <div className='container-form-option'>
                        <label htmlFor="">E-mail</label>
                        <input type="email"/>
                    </div>
                    <div className='container-form-option'>
                        <label htmlFor="">Mensagem</label>
                        <textarea name="" id=""></textarea>
                    </div>
                    <button type="submit">Enviar</button>
                </div>
            </form>
    )
}