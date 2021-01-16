import Movies from './Movies';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        The Shoppies
      </header>
      <Switch>
        
        <Route path="/" component={Movies} />
      </Switch >
    </div>
  );
}

export default App;
