import React from 'react'
import './App.css';
import Navbar from './components/Navbar.js';
import Fiction from './components/Fiction.js';
import Nonfiction from './components/Nonfiction.js';
import Search from './components/Search.js';

import {BrowserRouter as Router, Switch, Route  } from 'react-router-dom';

function App() {
  
    return (  
     <Router>
      <div className="App">
       
          <Navbar />
          <Switch>
          <Route path="/Fiction"  exact component={Fiction} />  
          <Route path="/Nonfiction" component={Nonfiction} /> 
          <Route path="/Search" component={Search} /> 
          <Route path="/Pictures" component={Pictures} /> 
          </Switch>
        </div>
      </Router>
      
    );
  }
  




export default App;