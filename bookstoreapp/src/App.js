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
          <Route path="/"  exact component={Home} />  
          <Route path="/Login" component={Login} /> 
          <Route path="/Signup" component={Signup} /> 
          <Route path="/Pictures" component={Pictures} /> 
          </Switch>
        </div>
      </Router>
      
    );
  }
  




export default App;