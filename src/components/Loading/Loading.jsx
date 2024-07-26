import { useEffect } from "react";
import "./Loading.css"

export function Loading(){

    useEffect(()=>{ 
        const timer = setTimeout(runTimer, 1000) //definindo timer
        function runTimer(){ //chamando função declarada no timer
            document.getElementById('sumir').style.opacity = 0; //pegando elemento e removendo devagar
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