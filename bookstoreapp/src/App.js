import React, { Component } from 'react'
import './App.css';
import Navbar from './components/Navbar.js';
import Books from './components/Books.js';
import Savebooks from './components/Savebooks.js';
import Search from './components/Search.js';

import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import { render } from 'react-dom';

class App extends Component {


  render() {
    return (  
     <Router>
      <div className="App">
       
          <Navbar />
          <Switch>
          <Route path="/Books"  component={Books} />  
          <Route path="/Savebooks" component={Savebooks} /> 
          <Route path="/Search" component={Search} /> 
      
          </Switch>
        </div> 
      </Router>
      
    );
  }
}
  
  




export default App;