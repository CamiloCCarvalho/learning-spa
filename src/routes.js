import { React } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeScreen from './screens/home.js'
import AboutScreen from './screens/about.js'
import PortifolioScreen from './screens/portifolio.js'
import ClockDigitalScreen from './screens/clockdigital.js'

const MyRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<HomeScreen/>}/>
            <Route exact path='/sobre' element={<AboutScreen/>}/>
            <Route exact path='/portifolio' element={<PortifolioScreen/>}/>
            <Route exact path='/portifolio/projetos' element={<h1>Teste page About</h1>}/>
            <Route exact path='/portifolio/clones' element={<h1>Teste page About</h1>}/>
            <Route exact path='/portifolio/clockdigital' element={<ClockDigitalScreen/>}/>
        </Routes>
    </BrowserRouter>
)

export default MyRoutes;