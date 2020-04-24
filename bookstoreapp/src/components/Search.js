import React, { Component } from 'react';
import ReactDom from 'react-dom'

 class Search extends Component{
    displayResults() {
        
    }
     
    
 
  render() {
      
    return (
        <div className="div_first">
            <h1><label className="label"> Search</label></h1>
            <input type="text" className="form-control" name="Search" placeholder="bookname" />
            <div className="div_second">
                <button onClick={this.displayResults} className="btn btn-primary">submit</button>
            </div>
            <div className="results-container">
            </div>
        </div>
    )
  }

}
export default Search;

