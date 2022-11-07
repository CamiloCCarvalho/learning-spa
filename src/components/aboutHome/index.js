import {React, Fragment, useState} from 'react'
import './aboutHome.css'

const initialState = {
    title: "Meus Conhecimentos",
    contentIntro: "Atualmente usando React, JavaScript, Bootstrap, Html, Css e APIs RESTful.",
    contentMid: "Mas também utilizo outras stacks como: TypeScript, Sass/Scss, Bulma, Git, Babel, Webpack e um pouco de NodeJS.",
    contentEnd: " E Atualmente estou disponivel para iniciar na carreira de desenvolvimento web e estudando mais sobre React, NodeJS e Express." 
}

export const AboutHome = () => {
    const [stateNow, setState] = useState(initialState)
    return (
        <Fragment>
            <div className="container pt-3">
                <div className="row g-3">
                    <div className="col-md coll">
                        <h3 className="pt-2">{stateNow.title}</h3>
                        <p className="px-1 pt-2">{stateNow.contentIntro}</p>
                        <p className="px-1">{stateNow.contentMid}</p>
                        <p className="px-1">{stateNow.contentEnd}</p>
                    </div>

                    <div className="col-md coll">
                        <div className="row g-3">
                            <div className="col-lg coll">
                                <a href="https://reactjs.org/">
                                    <img className="logo" alt="React" src="https://user-images.githubusercontent.com/106208340/199318462-58be3b04-8c48-488f-b8c3-384afc04bfdc.png"/> 
                                </a>
                            </div>
                            <div className="col-lg coll">
                                <a href="https://www.javascript.com/">
                                    <img className="logo" alt="JavaScript" widht="48px" heigth="48px" src="https://img.icons8.com/color/48/000000/javascript--v1.png"/> 
                                </a>
                            </div>
                            <div className="col-lg coll">
                                <a href="https://www.w3schools.com/html/">
                                    <img className="logo" alt="Html" src="https://img.icons8.com/fluency/48/000000/html-5.png"/> 
                                </a>
                            </div>
                        </div>


                        <div className="row g-3">
                            <div className="col-lg coll">
                                <a href="https://www.w3schools.com/css/">
                                    <img className="logo" alt="Css" widht="48px" heigth="48px" src="https://img.icons8.com/fluency/48/000000/css3.png"/> 
                                </a>
                            </div>
                            <div className="col-lg coll">
                                <a href="https://sass-lang.com/">
                                    <img className="logo" alt="Sass" widht="48px" heigth="48px" src="https://img.icons8.com/color/48/000000/sass.png"/> 
                                </a>
                            </div>
                            <div className="col-lg coll">
                                <a href="https://getbootstrap.com/">
                                    <img className="logo" alt="BootStrap" widht="48px" heigth="48px" src="https://img.icons8.com/color/48/000000/bootstrap.png"/> 
                                </a>
                            </div>
                        </div>


                        <div className="row g-3">
                            <div className="col-lg coll">
                                <a href="https://www.npmjs.com/">
                                    <img className="logo" alt="Npm" widht="48px" heigth="48px" src="https://img.icons8.com/color/48/000000/npm.png"/>
                                </a>
                            </div>
                            <div className="col-lg coll">
                                <a href="https://nodejs.org/pt-br/">
                                    <img className="logo" alt="Node" widht="48px" heigth="48px" src="https://img.icons8.com/fluency/48/000000/node-js.png"/> 
                                </a>
                            </div>
                            <div className="col-lg coll">
                                <a href="https://babeljs.io/">
                                    <img className="logo" alt="Babel" width="56" height="56" src="https://d33wubrfki0l68.cloudfront.net/7a197cfe44548cc1a3f581152af70a3051e11671/78df8/img/babel.svg"/>  
                                </a>
                            </div>
                        </div>


                        <div className="row g-3">
                            <div className="col-lg coll">
                                <a href="https://webpack.js.org/">
                                    <img className="logo" alt="WebPack" src="https://img.icons8.com/color/48/000000/webpack.png"/> 
                                </a>
                            </div>
                            <div className="col-lg coll">
                                <a href="https://git-scm.com/">
                                    <img className="logo" alt="Git" src="https://img.icons8.com/color/48/000000/git.png"/>
                                </a>
                            </div>
                            <div className="col-lg coll">
                                <a href="https://github.com/">
                                    <img className="logo" alt="GitHub" src="https://img.icons8.com/color/48/000000/github--v1.png"/> 
                                </a>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </Fragment>
    )
}