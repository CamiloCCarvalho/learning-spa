import {React, Fragment} from 'react'
import {GridProjects} from '../../../shared/gridProjects'
import {ItemProject} from '../../../shared/gridProjects/itemProject'
import './personalClones.css'


export const PersonalClones = () => {


    return (
        <Fragment>
            <div className="container-fluid mt-5 mb-5 personalClonesBox">
                <h2 className="display-3 text-center pt-2 pb-3">Clone Pages</h2>
                    <GridProjects>
                        <ItemProject linkURL="https://raw.githubusercontent.com/CamiloCCarvalho/my-landing-page/master/src/img/musicdot.png" textAlt=""/>
                        <ItemProject linkURL="https://raw.githubusercontent.com/CamiloCCarvalho/my-landing-page/master/src/img/musicdot.png" textAlt=""/>
                        <ItemProject linkURL="https://raw.githubusercontent.com/CamiloCCarvalho/my-landing-page/master/src/img/musicdot.png" textAlt=""/>
                    </GridProjects>
            </div>
        </Fragment>
    )
}

