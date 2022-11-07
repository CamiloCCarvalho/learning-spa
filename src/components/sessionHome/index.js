import {React, Fragment} from 'react'
import './sessionHome.css'


export const SessionHome = ()  => {
    const flipCardStyle = {
        width: "300px",
        height: "300px"
    }
    return (
        <Fragment>
            <div className="sessionHome">
                <p className="display-2" id="home-hi">Hello!</p>
                <p className="display-1" id="home-name">Eu sou <i>Camilo</i></p>
                <p className="display-5 mt-3" id="home-content">Front-End Developer Jr. Criando aplicações WEB com React, BootStrap, JS e outras Stacks.</p>

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <div id="imageDev"></div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}