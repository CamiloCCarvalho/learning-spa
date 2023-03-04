import {React, Fragment, useState, useEffect} from 'react'


const initialState = {
    title: "Meus Conhecimentos",
    contentIntro: "Atualmente usando REACT, JS, BOOTSTRAP, HTML, CSS e RESTful APIs.",
    contentMid: "Também utilizo as stacks: TYPESCRIPT, SASS, BULMA, GIT, BABEL, WEBPACK.",
    contentEnd: "Atualmente estou disponivel para iniciar na carreira de desenvolvimento e estudando mais sobre REACT, NODE e BACK-END." 
}

export const ContentAbout = () => {
    const [content, setContent] = useState({})
    
    useEffect(() => {
        setContent(initialState)
    }, [])

    return (
        <Fragment>
            <div className="col-md coll">
                <h3 className="pt-2">{content.title}</h3>
                <hr/>
                <p className="px-1 pt-2">{content.contentIntro}</p>
                <p className="px-1">{content.contentMid}</p>
                <p className="px-1">{content.contentEnd}</p>
            </div>
        </Fragment>
    )
}