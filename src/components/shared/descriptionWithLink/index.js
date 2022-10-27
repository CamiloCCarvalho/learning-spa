import React, {Fragment} from 'react';

export const DescriptionWithLink = (props) => {
    return (
        <Fragment>
            <p>{props.descriptionText}</p>
            <a href={props.linkHREF}>Saiba Mais clicando aqui</a>
        </Fragment>
    )
}