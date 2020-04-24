import React from 'react';
import Search from "./components/search";

export class App  extends React.Component { 
    render() {
    return (
        <div className="div_first">
        <label className="label_first"> Search</label>
        <input type="text" name="Search" placeholder="bookname"/>
        </div>

        );

    }
}
