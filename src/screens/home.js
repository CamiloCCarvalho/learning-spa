import {React, Fragment} from 'react'
import {NavBar} from './shared/navbar'
import {SessionHome} from './components/sessionHome'
import {AboutHome} from './components/aboutHome'
import {PortHome} from './components/portHome'
import {Footer} from './shared/footer'

export const HomeScreen = () => {
    return (
        <Fragment>
            <NavBar/>
            <div>
                <SessionHome/>
                <AboutHome/>
                <PortHome/>
                <Footer/>
            </div>
        </Fragment>
    )
}