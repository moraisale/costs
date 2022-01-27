import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
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
        <Container customClass="min-height">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/company" element={<Company/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/newproject" element={<NewProject/>}/>
          </Routes>
        </Container>
        <Footer/>
      </Router>
      
  );
}

export default App;
