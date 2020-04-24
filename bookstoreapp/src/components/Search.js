import React, { Component } from 'react';
import ReactDom from 'react-dom'
import axios from 'axios';
const API_URL = 'https://bookauthority.org/api/site/get-topic-data?topicId=rest_api&viewId=best&formatId=print&featureId=null&skip=5&limit=10&getAdditionalBooks=false&getInfo=false&pageviewId=56023790858211ea9e710d1d42024a5c';

 class Search extends Component{
    state = {
        books : []
    }

    constructor (props){
         super(props);
         this.state =  { 
             books: []
     }

   getData() {
       const url = `${API_URL}/users/`;
       axios.get(url).then(response => response.data)
       then(data) => {
           this.setState( {books: data.books} )

       })


   }
    
 
  render() {
      
    return (
        <div className="div_first">
            <h1><label className="label"> Search</label></h1>
            <input type="text" onChange={this.textresult} className="form-control" name="Search" placeholder="bookname" />
            <div className="div_second">
                <button onClick={this.getData} className="btn btn-primary">submit</button>
            </div>
            this.
            <div className="results-container">
            </div>
        </div>
    )
  }

    }
export default Search;

