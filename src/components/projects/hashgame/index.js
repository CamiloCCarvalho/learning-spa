import {React, Fragment} from 'react'
import './hashgame.css'

export const HashGame = () => {

    return (
        <Fragment>
            <div className="container-fluid hashGameBox">

                <div className="board circle">
                    <div className="cell x"data-cell></div>
                    <div className="cell circle"data-cell></div>
                    <div className="cell"data-cell></div>

                    <div className="cell"data-cell></div>
                    <div className="cell"data-cell></div>
                    <div className="cell"data-cell></div>

                    <div className="cell"data-cell></div>
                    <div className="cell"data-cell></div>
                    <div className="cell"data-cell></div>
                </div>

                <div className="winning-message"data-wm>
                    <p className="winnig-message-text">X foi o vencedor!</p>
                    <button className="winning-message-btn">Reiniciar</button>
                </div>
            </div>
        </Fragment>
    )
}