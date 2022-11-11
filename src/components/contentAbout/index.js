import {React, Fragment} from 'react'
import './contentAbout.css'


export const ContentAbout = () => {



    return (
        <Fragment>
            <div id="aboutBox"class="card text-center">
                <div class="card-header bg-primary">
                    <ul id="aboutNav"class="nav nav-tabs card-header-tabs">
                    <li class="nav-item aboutPage">
                        <a id="aboutNavItem-1"class="nav-link active" aria-current="true" href="#">Sobre mim</a>
                    </li>
                    </ul>
                </div>
                <div class="card-body">
                    <h5 class="card-title title-about">Ola! Me chamo Camilo Costa</h5>
                    <p class="card-text text-about m-5">Tenho 29 Anos, atualmente estou em busca de uma oportunidade para iniciar carreira na area de desenvolvimento Web, preferencialmente FrontEnd pois tenho mais conhecimento sobre a mesma. Sou formado em Gestão de Recursos Humanos porem não trabalho na area, e a cerca de 1 ano estudo programação para web e suas principais ferramentas, tecnologias, stacks e linguagens.</p>
                    <p class="card-text text-about m-5">Estudo diariamente, e tenho como referencia StackOverFlow, Github, além de videos e cursos. Atualmente estou na fase final do Curso de FullStack JavaScript da empresa denominada OneBitCode.</p>
                </div>
            </div>
        </Fragment>
    )
}