import React, {Fragment} from 'react';
import {Planet} from './Planet';

export const Planets = () => {
    return (
        <Fragment>
            <h3>Lista de Planetas</h3>
            <Planet name="Mercurio"
                    descriptionText="Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar."
                    linkHREF="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
                    img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg"
                    
            />
            <Planet name="Marte"
                    descriptionText='Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema Solar. Batizado em homenagem ao deus romano da guerra, muitas vezes é descrito como o "Planeta Vermelho".'
                    linkHREF="https://pt.wikipedia.org/wiki/Marte_(planeta)"
                    img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/280px-OSIRIS_Mars_true_color.jpg"
            />
        </Fragment>
    )
}