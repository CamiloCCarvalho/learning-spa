import {React, Fragment} from 'react'
import './sessionHome.css'

export const SessionHome = ()  => {
    const styleCardImg = {
        width: '18rem',
        display:'block'
    }
    return (
        <Fragment>
            <div className="sessionHome">
                <div className="card" style={styleCardImg}>
                    <img src="https://camiloccarvalho.github.io/mypage/img/camilo.jpg" className="card-img-top" alt="Foto de Camilo Costa"/>
                    <div className="card-body">
                        <h5 className="card-title">Camilo Costa</h5>
                        <p className="card-text">Hello World! Estou iniciando no mundo do Front-End, atualmente trabalho com algumas stacks e estou a procura de uma oportunidade para iniciar minha carreira na area.</p>
                        <a href="#" className="btn btn-primary">Mais sobre</a>
                    </div>
                </div>

                <div className="card" style={styleCardImg}>
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}