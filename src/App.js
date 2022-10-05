import logo from './logo.svg';
import './App.css';
import MyTick from './mycom/MyTick';
import Mytime from './mycom/Mytime';

function App() {
  console.log("app");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
      <MyTick />
      <Mytime />
    </div>
  );
}

export default App;
