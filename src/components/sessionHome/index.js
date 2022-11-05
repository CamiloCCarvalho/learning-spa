import {React, Fragment} from 'react'
import './sessionHome.css'

export const SessionHome = ()  => {
    const styleCardImg = {
        width: '18rem'
    }
    return (
        <Fragment>
            <div className="sessionHome">
                <div className="card" style={styleCardImg}>
                    <img src="https://camiloccarvalho.github.io/mypage/img/camilo.jpg" className="card-img-top" alt="Foto de Camilo Costa"/>
                    <div className="card-body">
                        <h5 className="card-title">Camilo Costa</h5>
                        <p className="card-text">Ola! Estou iniciando no mundo do Front-End, veja toda home e clique no botão para saber mais!</p>
                        <a href="#" className="btn btn-primary">Mais sobre</a>
                    </div>
                </div>

                <div className="card" style={styleCardImg}>
                    <img src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" height="100%" alt="Ilustração Desenvolvedor"/>
                    <div className="card-body">
                        <h5 className="card-title">Front-End</h5>
                        <p className="card-text">Desenvolvimento web, com React, JavaScript, Html, Css entre outras stacks.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}