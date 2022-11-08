import './App.css'
import {NavBar} from './shared/navbar'
import {SessionHome} from './components/sessionHome'
import {AboutHome} from './components/aboutHome'
import {PortHome} from './components/portHome'
import {Footer} from './shared/footer'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div>
        <SessionHome/>
        <AboutHome/>
        <PortHome/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
