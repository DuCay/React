import logo from './logo.svg';
import './App.css';
import Button from './button.jsx';
let clickOnButton=(name)=>{
  alert(`Вы нажали на кнопку:${name}`)
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
        <>
          <Button text='Кнопка' onClick={()=>clickOnButton('user')}/>
        </>
      </header>
    </div>
  );
}

export default App;
