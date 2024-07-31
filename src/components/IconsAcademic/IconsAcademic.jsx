import './IconsAcademic.css';
import AOS from 'aos';
import powerBI from '../../assets/PowerBI-Logo.webp';
import react from '../../assets/react.png';
import excel from '../../assets/excel.png'
import figma from '../../assets/figma.png';
import git from '../../assets/github.png';
import html from '../../assets/html-5.png';
import js from '../../assets/js.png';
import python from '../../assets/logotipo-da-linguagem-python.png';
import node from '../../assets/nodejs.png';
import powerP from '../../assets/power-point.png';
import sql from '../../assets/servidor-sql.png';
import css from '../../assets/css-3 (1).png';
import word from '../../assets/palavra.png';

export function IconsAcademic(){
    AOS.init();
    return(
        <section data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" className='section-IconsAcademic'>
            <div id="title">
                <p>Além dessas formações concluídas e em andamento, foram feitos outras formações extra-curriculares e experiência profissional, adquirindo conhecimento nos seguintes itens:</p>
            </div>
            <div id="icons">
                <ul id="listOne">
                    <li><img src={html} alt="" /></li>
                    <li><img src={css} alt="" /></li>
                    <li><img src={js} alt="" /></li>
                    <li><img src={react} alt="" /></li>
                    <li><img src={node} alt="" /></li>
                    <li><img src={git} alt="" /></li>
                    <li><img src={python} alt="" /></li>
                    <li><img src={powerBI} alt="" /></li>
                    <li><img src={excel} alt="" /></li>
                    <li><img src={word} alt="" /></li>
                    <li><img src={powerP} alt="" /></li>
                    <li><img src={figma} alt="" /></li>
                    <li><img src={sql} alt="" /></li>
                </ul>
            </div>
        </section>
    )
}