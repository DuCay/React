import logo from './logo.svg';
import './App.css';
import ButtonList from '/home/alexeydemin/Рабочий стол/React/my-app/src/components/Button.jsx';
import styles from '/home/alexeydemin/Рабочий стол/React/my-app/src/styles/buttonList.module.css'
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
          <ButtonList className={styles.button} text='Кнопка' onClick={()=>clickOnButton('user')}/>
        </>
      </header>
    </div>
  );
}

export default App;
