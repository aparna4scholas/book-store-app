import React, { Component } from 'react';
import ReactDom from 'react-dom'
import axios from 'axios'

 class Search extends Component{
    state = {
        books : []
    }

    /* constructor (props){
         super(props);
         this.state = searchkey
     }
    displayResults =(e) => { 
         
       e.preventDefault()

    }
    textresult = (e) => {
        e.preventDefault()
    }
 */
    
 
  render() {
      
    return (
        <div className="div_first">
            <h1><label className="label"> Search</label></h1>
            <input type="text" onChange={this.textresult} className="form-control" name="Search" placeholder="bookname" />
            <div className="div_second">
                <button onClick={this.displayResults} className="btn btn-primary">submit</button>
            </div>
            this.
            <div className="results-container">
            </div>
        </div>
    )
  }

}
export default Search;

