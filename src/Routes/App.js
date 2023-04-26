import logo from './logo.svg';
import './App.css';
import Results from './Results'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Recipe Roulette
      </header>
      
      <div>
        <Link to="/results">
          <button>Generate</button>
        </Link>
      </div>
    </div>
  );
}

export default App;
