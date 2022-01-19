import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import './App.css';
import Company from './pages/Company';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NewProject from './pages/NewProject';
import Container from './components/layout/Container'

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li> <Link to="/">Home</Link> </li>
          <li><Link to="/company">Company</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/newproject">New Project</Link></li>
        </ul>
        <Switch>
          <Container customClass="min-height">
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
          </Container>
        
      </Switch>
      <p>Footer</p>
      </Router>
      
    </div>
  );
}

export default App;
