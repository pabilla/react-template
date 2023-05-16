import './App.css';
import Router from './components/router';
import AppBar from "./components/AppBar/AppBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <AppBar />
         <Router />
      </header>
    </div>
  );
}

export default App;
