import {React, Fragment} from 'react'
import './footer.css'


export const Footer = () => {


    return (
        <Fragment>
            <div id="footerBox" className="container-fluid mt-5 bg-primary">
                <div id="footer" className="card text-center">
                    <div className="card-header">
                    8 de Novembro, 2022
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Front-End Developer</h5>
                        <p className="card-text">Não esqueça de visitar as outras Abas!</p>
                        <a href="#" className="btn btn-danger">Voltar ao Topo</a>
                    </div>
                    <div className="card-footer text-center mb-1">
                        <div className="i-flex">
                            <i className="fa-brands fa-linkedin-in"></i>
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-github"></i>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}