
export function Contato(){
    return(
            <form action="">
                <div>
                    <div>
                        <label htmlFor="">Nome:</label>
                        <input type="text" nome="" id="inputName" placeholder="Nome"/>
                    </div>
                    <div>
                        <label htmlFor="">E-mail:</label>
                        <input type="email" placeholder="E-mail" />
                    </div>
                    <div>
                        <label htmlFor="">Observação:</label>
                        <input type="text" placeholder="Digite sua mensagem..."/>
                    </div>
                    <button type="submit">Enviar</button>
                </div>
            </form>
    )
}