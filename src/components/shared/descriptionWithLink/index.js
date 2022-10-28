import React, {Fragment} from 'react';

export const DescriptionWithLink = (props) => {
    if(!props.descriptionText)
        return null;
    if(props.linkHREF){
        return (
            <Fragment>
                <p>{props.descriptionText}</p>
                <p>
                    <a href={props.linkHREF}>Saiba Mais clicando aqui</a>
                </p>
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <p><u>{props.descriptionText}</u></p>
            </Fragment>
        )
    }
    
}