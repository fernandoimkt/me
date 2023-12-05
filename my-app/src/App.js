import logo from './logo.svg';
import './App.css';

const App = () => {

	const saludo = "Hola mundo!    ... ( editado por Fernando Gavilanes ) ...";
	const suma = 1 + 2;


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
	  <p>
	  {saludo}
	  </p>
	  <p>
	  <input type="text" name="numero1" id="num1"/>
	  <input type="text" name="numero2" id="num2"/>
	  {suma}
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
