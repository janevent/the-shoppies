import Movies from './Movies';
import Reviews from './Reviews';
import NominationsPage from './NominationsPage';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        The Shoppies
      </header>
      <Switch>
        <Route path="/nominations" component={NominationsPage} />
        <Route path="/reviews" component={Reviews} />
        <Route path="/" component={Movies} />
        
      </Switch >
    </div>
  );
}

export default App;
