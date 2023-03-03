import {React, Fragment} from 'react'
import {GridProjects} from '../../../shared/gridProjects'
import {ItemProject} from '../../../shared/gridProjects/itemProject'

import './personalProjects.css'


export const PersonalProjects = () => {


    return (
        <Fragment>
            <div className="container-fluid mt-5 personalProjectsBox">
                <h2 className="display-3 text-center pt-2 pb-3">Projects</h2>
                <GridProjects>
                        <ItemProject linkURL="https://raw.githubusercontent.com/CamiloCCarvalho/my-landing-page/master/src/img/relogioanalogico.jpeg" textAlt="Relogio Analogico"/>
                        <ItemProject linkURL="https://raw.githubusercontent.com/CamiloCCarvalho/my-landing-page/master/src/img/relogiodigital.jpeg" textAlt="Relogio Digital"/>
                        <ItemProject linkURL="https://raw.githubusercontent.com/CamiloCCarvalho/my-landing-page/master/src/img/jogodavelha.jpeg" textAlt="Jogo da Velha"/>
                        <ItemProject linkURL="https://raw.githubusercontent.com/CamiloCCarvalho/my-landing-page/master/src/img/calculadora.jpeg" textAlt="Calculadora"/>
                        <ItemProject linkURL="https://raw.githubusercontent.com/CamiloCCarvalho/my-landing-page/master/public/coming-soon.png" textAlt=""/>
                </GridProjects>
            </div>
        </Fragment>
    )
}