
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
//import Header from './Components/Header'
import Hire from './Components/Hire'
import Projects from './Components/Projects'
import Showcase from './Components/Showcase'

function App() {
  return (

      <Router>
        
        <Route path="/" exact>
            <Showcase />
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
