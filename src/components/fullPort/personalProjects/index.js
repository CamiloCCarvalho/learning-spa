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
                        <ItemProject linkURL="https://raw.githubusercontent.com/CamiloCCarvalho/my-landing-page/master/src/img/musicdot.png" textAlt=""/>
                        <ItemProject linkURL="https://raw.githubusercontent.com/CamiloCCarvalho/my-landing-page/master/public/coming-soon.png" textAlt=""/>
                        <ItemProject linkURL="https://raw.githubusercontent.com/CamiloCCarvalho/my-landing-page/master/public/coming-soon.png" textAlt=""/>
                        <ItemProject linkURL="https://raw.githubusercontent.com/CamiloCCarvalho/my-landing-page/master/public/coming-soon.png" textAlt=""/>
                        <ItemProject linkURL="https://raw.githubusercontent.com/CamiloCCarvalho/my-landing-page/master/public/coming-soon.png" textAlt=""/>
                </GridProjects>
            </div>
        </Fragment>
    )
}