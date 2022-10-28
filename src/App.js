import './App.css';
import {HelloWorld as Hw, Hello, HelloWorld2} from './basic.js';
import {LoremIpsum} from './components/LoremIpsum.js';
import {Planets} from './components/Planets';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div>
          <LoremIpsum/>
          <Hw/>
          <Hello/>
          <HelloWorld2/>
          <hr/>
          <Planets/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >Learn React</a>
          </div>
      </header>
    </div>
  );
}

export default App;
