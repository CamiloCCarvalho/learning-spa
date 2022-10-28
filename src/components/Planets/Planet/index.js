import React from 'react'
import {GrayImg} from '../../shared/gray_img'
import {DescriptionWithLink} from '../../shared/descriptionWithLink'

export const Planet = (props) => {
    const listNames = [
        {id: 0, name: 'a'},
        {id: 1, name: 'b'},
        {id: 2, name: 'c'}
    ]
    const satellites = listNames.map(item =>
         <li key={item.id}>Satelite "{item.name}"</li>
    )

    let title;
    if(props.title_with_underline)
        title = <h4><u>{props.name}</u></h4>
    else
        title = <h4>{props.name}</h4>

    return (
        //como o parametro da função click usa props ele acha que ja é pra chama a função antes do click colocando uma arrowFunc vc limita a renderização para chamar o click apenas no ato de onClick da div
        <div onClick={() => props.clickOnPlanet(props.name)}>
            <hr/>
            {title}
            <DescriptionWithLink descriptionText={props.descriptionText} linkHREF={props.linkHREF}></DescriptionWithLink>
            <hr/>
            <GrayImg img_url={props.img_url} gray={props.gray}/>

            <h4>Lista de Satelites:</h4>
            <ul>
                {satellites}
            </ul>
            <hr/>
        </div>
    )
}