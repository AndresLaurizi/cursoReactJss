

import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './container/ItemListContainer';

function App() {
  return (
   <>
    <NavBar/>
    <ItemListContainer saludo = "hola soy ItemListConteiner"/>
    <div className="App">
      <header className="App-header">
        <p>
          Hola mundo
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
   </>
  );
}

export default App;
