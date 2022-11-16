import {React, Fragment} from 'react'
import {NavProjects} from './navProjects'
import {GridProjects} from '../../../shared/gridProjects'
import {ItemProject} from '../../../shared/gridProjects/itemProject'

import './personalProjects.css'


export const PersonalProjects = () => {


    return (
        <Fragment>
            <div className="container-fluid mt-5 personalProjectsBox">
                <h2 className="display-3 text-center pt-2">Projects</h2>
                <NavProjects/>
                <GridProjects>
                    <ItemProject/>
                    <ItemProject/>
                    <ItemProject/>
                    <ItemProject/>
                    <ItemProject/>
                    <ItemProject/>
                    <ItemProject/>

                </GridProjects>
            </div>
        </Fragment>
    )
}