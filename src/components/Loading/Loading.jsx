import { useEffect } from "react";
import "./Loading.css"

export function Loading(){


        // Esconde o scroll
        const disableScroll = () => {
          document.body.style.overflow = "hidden";
        };
        disableScroll();

      // efeito que tira o loading
        useEffect(()=>{ 
            const timer = setTimeout(runTimer, 2000) //definindo timer
            function runTimer(){ //chamando função declarada no timer
                document.getElementById('sumir').style.opacity = 0; //pegando elemento e removendo devagar
                setTimeout(() => { //function que remove main da tela
                    document.getElementById('sumir').remove();
                }, 3000);
            }
            return () => clearTimeout(timer);
        }, []);
        
    return(
        <main id="sumir">
            <div id="container">
                <h2>ELEVANDO SEUS PROJETOS AO</h2>
                <h1>PRÓXIMO NÍVEL</h1>
            </div>
        </main>
    )
}