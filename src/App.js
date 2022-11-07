import './App.css'
import {NavBar} from './components/navbar'
import {SessionHome} from './components/sessionHome'
import {AboutHome} from './components/aboutHome'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div>
        <SessionHome/>
        <AboutHome/>
      </div>
    </div>
  );
}

export default App;
