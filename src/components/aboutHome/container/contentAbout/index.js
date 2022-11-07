import {React, Fragment, useState, useEffect} from 'react'


const initialState = {
    title: "Meus Conhecimentos",
    contentIntro: "Atualmente usando React, JavaScript, Bootstrap, Html, Css e APIs RESTful.",
    contentMid: "Mas também utilizo outras stacks como: TypeScript, Sass/Scss, Bulma, Git, Babel, Webpack e um pouco de NodeJS.",
    contentEnd: " E Atualmente estou disponivel para iniciar na carreira de desenvolvimento web e estudando mais sobre React, NodeJS e Express." 
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
                <p className="px-1 pt-2">{content.contentIntro}</p>
                <p className="px-1">{content.contentMid}</p>
                <p className="px-1">{content.contentEnd}</p>
            </div>
        </Fragment>
    )
}