import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Components/header/Header';
import About from './Components/about/About';
import Section from './Components/section/Section';
import Footer from './Components/footer/Footer';
import Hire from './Components/Hire';
import Projects from './Components/projects/Projects';
import Showcase from './Components/showcase/Showcase';

function App() {
  return (
    <div>
      <Router>
        <Route path='/' exact>
          <Header />
          <Showcase />
          <About />
          <Section />
        </Route>
        <Route path='/projects'>
          <Projects />
        </Route>
        <Route path='/hire'>
          <Hire />
        </Route>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
