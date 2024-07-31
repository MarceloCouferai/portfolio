import './Contato.css'
import AOS from 'aos';

export function Contato(){
    AOS.init();

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const formData = new FormData(event.target);
    
        // Envie os dados do formulário para o Sheet Monkey
        const response = await fetch(process.env.REACT_APP_API_URL_SHEETMONKEY, {
          method: 'POST',
          body: formData,
        });
    
        if (response.ok) {
          // Exibe um alerta de sucesso
          alert('Formulário enviado com sucesso!');
        } else {
          // Trate erros aqui se necessário
          alert('Erro ao enviar o formulário. Tente novamente mais tarde.');
        }
      };
    return(
            <form id="formAncora" data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom" onSubmit={handleSubmit}>
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
                    <input 
                        type="hidden" 
                        name="x-sheetmonkey-redirect" 
                        value="https://my-site.com/signup-success.html" 
            />
                    <button type="submit">Enviar</button>
                </div>
            </form>
    )
}