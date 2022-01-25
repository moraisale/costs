import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Company from './pages/Company';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NewProject from './pages/NewProject';
import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Projects from './pages/Projects';

function App() {
  return (
      <Router >
        <Navbar/>
        <Switch>
          <Container customClass="min-height">
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/projects">
              <Projects/>
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
        <Footer/>
      </Router>
      
  );
}

export default App;
