import { useEffect } from "react";
import "./Loading.css"

export function Loading(){

        useEffect(()=>{
            const timer = setTimeout(runTimer, 2000)
            function runTimer(){
                document.getElementById('sumir').style.opacity = 0;
                setTimeout(() => {
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