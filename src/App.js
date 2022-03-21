import logo from './logo.svg';
import './App.css';
let clickOnButton=(name)=>{
  alert('Вы нажали на кнопку:'+name)
}
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
        <button onClick={()=>clickOnButton('user')} className='App-button'>Кнопка</button>
      </header>
    </div>
  );
}

export default App;
