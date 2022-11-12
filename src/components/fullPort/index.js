import {React, Fragment} from 'react'
import {PortHeader} from './portHeader'
import {PersonalProjects} from './personalProjects'
import './fullPort.css'

export const FullPort = () => {


    return (
        <Fragment>
            <div className="container-fluid portBox">
                <PortHeader/>
                <PersonalProjects/>
            </div>
        </Fragment>
    )
}