import React from 'react';
import  './style.css';

export const GrayImg = (props) => {
    return (
        <img className={props.gray ? 'gray-img' : 'color-img'} alt="text" src={props.img_url}/>
    )
}




