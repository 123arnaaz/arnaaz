import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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

import logo from './logo.svg';
import './App.css';
import { QueryByAttribute } from '@testing-library/react';

function App(abc){
  return(
    <p>Hello React {abc.restaruantName}</p>
  );
}
export default App;

1.prop are read only 
2.Irt works similar as HTML Attribute 
Props are immutable