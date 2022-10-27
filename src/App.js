import logo from './logo.svg';
import './App.css';
import {HelloWorld as Hw, Hello, HelloWorld2} from './basic.js';
import {LoremIpsum} from './components/LoremIpsum.js';
import {Planets} from './components/Planets';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <LoremIpsum/>
          <Hw/>
          <Hello/>
          <HelloWorld2/>
          <hr/>
          <Planets/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
