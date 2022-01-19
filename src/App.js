import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './App.css';
import Company from './pages/Company';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NewProject from './pages/NewProject';

function App() {
  return (
    <div className="App">
      <h1>Teste para o Commit</h1>
      <Router>
        <ul>
          <li>Home</li>
          <li>Company</li>
          <li>Contact</li>
          <li>New Project</li>
        </ul>
        <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/company">
          <Company/>
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
        <Route exact path="/newproject">
          <NewProject/>
        </Route>
      </Switch>
      </Router>
      
    </div>
  );
}

export default App;
