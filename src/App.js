import './App.css'
import {NavBar} from './components/navbar'
import {SessionHome} from './components/sessionHome'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div>
       <SessionHome></SessionHome>
      </div>
    </div>
  );
}

export default App;
