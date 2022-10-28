import React from 'react'
import {GrayImg} from '../../shared/gray_img'
import {DescriptionWithLink} from '../../shared/descriptionWithLink'

export const Planet = (props) => {
    return (
        <div onClick={props.clickOnPlanet(props.name)}>
            <hr/>
            <h4>{props.name}</h4>
            <DescriptionWithLink descriptionText={props.descriptionText} linkHREF={props.linkHREF}></DescriptionWithLink>
            <hr/>
            <GrayImg img_url={props.img_url}/>
        </div>
    )
}