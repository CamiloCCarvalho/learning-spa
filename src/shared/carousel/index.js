import {React, Fragment} from 'react'
import './carousel.css'

export const Carousel = ()  => {


    return (
        <Fragment>
            <div  id="carouselBox" className="container mt-5 mb-5">
                <h3 className="pt-3">Portifólio</h3>

                <div id="carouselBoxItem" className="carousel slide m-5" data-bs-ride="carousel">

                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <img src=" " className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item" data-bs-interval="1000">
                            <img src="https://raw.githubusercontent.com/CamiloCCarvalho/my-landing-page/master/public/coming-soon.png" className="d-block w-100" alt="..."/>
                        </div>
                    </div>


                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselBoxItem" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselBoxItem" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next </span>
                    </button>
                </div>

                <ul>
                    <li>
                        <a href="#">Visitar Todos projetos</a>
                    </li>
                    <li>
                        <a href="#">Conheça meus projetos pessoas</a>
                    </li>
                    <li>
                        <a href="#">Ver clone de paginas</a>
                    </li>
                </ul>
            </div>
        </Fragment>
    )
}