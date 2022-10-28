import React from 'react'
import {GrayImg} from '../../shared/gray_img'
import {DescriptionWithLink} from '../../shared/descriptionWithLink'

export const Planet = (props) => {
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
        </div>
    )
}