import React from 'react';
import { Link } from 'react-router-dom';


function Navbar () {
    const navStyle = {
        color: 'white'
    };

return(

  
  <nav>
   <h1> Children's Book store </h1>
   <ul className="navbar_link">
       <Link style={navStyle} to='/Fiction'>
       <li> Home</li>
       </Link>
       <Link style={navStyle} to='/Nonfiction'>
       <li> Login</li>
       </Link>
       <Link style={navStyle} to='Search'>
       <li> Signup</li>
       </Link >
        </ul>

  </nav>
 

)
}

export default Navbar;