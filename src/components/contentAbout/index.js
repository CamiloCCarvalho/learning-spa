import {React, Fragment} from 'react'
import './contentAbout.css'


export const ContentAbout = () => {



    return (
        <Fragment>
            <div id="aboutBox"className="card text-center">
                <div className="card-header bg-primary">
                    <ul id="aboutNav"className="nav nav-tabs card-header-tabs">
                    <li className="nav-item aboutPage">
                        <a id="aboutNavItem-1"className="nav-link active" aria-current="true" href="#">Sobre</a>
                    </li>
                    </ul>
                </div>
                <div className="card-body">
                    <h5 className="card-title title-about mt-2">Ola! Me chamo Camilo Costa</h5>
                    <p className="card-text text-about m-5">Tenho 29 Anos, atualmente estou em busca de uma oportunidade para iniciar carreira na area de desenvolvimento Web, preferencialmente Front-End pois tenho mais conhecimento sobre a mesma. Sou formado em Gestão de Recursos Humanos porem não trabalho na area, e a cerca de 1 ano estudo programação para web e suas principais ferramentas, tecnologias, stacks e linguagens.</p>
                    <h5 className="card-title title-about">Principais Stacks</h5>
                    <p className="card-text text-about m-5">O que tenho mais conhecimento e uso pratico no dia a dia é JavaScript, Html, Css e Scss. Seguido destas tenho iniciado o uso de WebPack e Babel principalmente para entender os bastidores do React. O citado por ultimo tenho utilizado a menos tempo para desenvolver o Front-End dos meus projetos e exercicios.</p>
                    <h5 className="card-title title-about">Construção da SPA</h5>
                    <p className="card-text text-about m-5">Nesta pagina utilizei React e BootStrap para a construção dos elementos, estilos e funcionalidades. Explorando os Components, Routes, Props e Hooks. Pretendo implementar neste projeto também TypeScript e Bulma.</p>
                    <h5 className="card-title title-about">Estudos</h5>
                    <p className="card-text text-about m-5">Procuro praticar diariamente, e tenho como referência StackOverFlow, Github, além de videos e cursos. Atualmente estou na fase final do Curso de FullStack JavaScript da empresa denominada OneBitCode.</p>
                </div>
            </div>
        </Fragment>
    )
}