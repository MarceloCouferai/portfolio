import "./styles/reset.css"
import "./styles/App.css"
import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar/Navbar"
import { About } from "./components/About/About";
import { Professional } from "./components/Professional/Professional";
import { Loading } from "./components/Loading/Loading";
import { Academic } from "./components/Academic/Academic";

//images
import unifeb from './assets/unifeb.png';
import ha from './assets/ha branca.png';

export function App() {

    const [loader, setLoader] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 3500);
        return clearTimeout(loader);
    }, []);
    return (
        <div>
            {loader ? (
                <h1>pause</h1>
                // <Loading />
            ) : (  
                <div id="teste">
                    <Navbar />
                    <About />
                    <Professional site='https://www.unifeb.edu.br/' img={unifeb} conteudo="Durante minha atuação na UNIFEB, adquiri experiência na instalação e remanejamento de câmeras, bem como na ajuda na criação de projetos de instalação e monitoramento dessas câmeras. Além disso, fui responsável pela criação de salas virtuais e pelo suporte técnico completo para eventos remotos, como palestras e reuniões, desde o início até o término dos mesmos. Também prestei apoio e suporte técnico em eventos externos e internos, incluindo palestras, reuniões e aulas presenciais, garantindo o bom funcionamento dos equipamentos e a satisfação dos participantes." dateIn="Novembro de 2017 " dateOut="Março de 2021"/>
                    <Professional site='https://www.unifeb.edu.br/' img={ha} conteudo="Atuo como analista de negócios no Hospital de Amor, com foco principal na gestão e otimização do sistema RM - Totvs. Minhas responsabilidades incluem a manutenção, atualização e resolução de problemas técnicos do sistema, além do suporte aos usuários. Busco garantir a eficiência do sistema e sua adequação às necessidades da instituição, contribuindo para a melhoria contínua dos processos internos.
                    Anteriormente, atuei na área de suporte técnico, sendo responsável pela infraestrutura de todas as Unidades de Saúde Básica (UBS) da empresa. Nesse período, desenvolvi e acompanhei projetos de infraestrutura, prestei suporte a softwares e criei dashboards no PowerBI para a gestão das unidades" dateIn="Março de 2021 (Emprego atual)" dateOut="-"/>
                    <Academic />
                </div>
            )}
        </div>
    );
}