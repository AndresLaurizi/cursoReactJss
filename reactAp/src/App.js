

import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './container/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
   <>
    <NavBar/>
    <ItemListContainer saludo = "hola soy ItemListConteiner"/>
    <ItemCount stock= "5" inicial = "1" />
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
