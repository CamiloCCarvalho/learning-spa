import {React, Fragment} from 'react'
import {PortHeaderItem} from './portHeaderItem'
import './portHeader.css'



export const PortHeader = () => {



    return (
        <Fragment>
            <h1 className="display-1 text-center mt-3">Title</h1>
            <div className="container-fluid">
                <ul className="portHeader-list mt-5">
                    <PortHeaderItem/>
                    <PortHeaderItem/>
                    <PortHeaderItem/>
                    <PortHeaderItem/>
                </ul>
            </div>
        </Fragment>
    )
}