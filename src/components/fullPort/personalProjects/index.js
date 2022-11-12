import {React, Fragment} from 'react'
import './personalProjects.css'


export const PersonalProjects = () => {


    return (
        <Fragment>
            <div className="container-fluid mt-5 personalProjectsBox">
                <h2 className="display-3 text-center pt-2">Projects</h2>
                <div>
                    <p className="text-center mt-3">Nav-Projects</p>
                    <p className="text-center mt-3 pb-3">Grid-Projects</p>
                </div>
            </div>
        </Fragment>
    )
}