
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Components/Header'
import About from './Components/About'
import Section from './Components/Section'
// import Footer from './Components/Footer'
import Hire from './Components/Hire'
import Projects from './Components/Projects'
import Showcase from './Components/Showcase'

function App() {
  return (

      <Router>
        
        <Route path="/" exact>
            <Header />
            <Showcase />
            <About />
            <Section />
            


        </Route>
        <Route path="/projects" >
            <Projects />
        </Route>
        <Route path="/hire" >
            <Hire />
        </Route>
      </Router>
  );
}

export default App;
