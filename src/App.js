import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Ali Veli";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ali Veli <code>src/App.js</code> and save to reload.
        </p>
        <h1>{name}</h1>  
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
