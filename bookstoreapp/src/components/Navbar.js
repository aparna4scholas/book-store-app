import React from 'react';
import { Link } from 'react-router-dom';


function Navbar () {
    const navStyle = {
        color: 'white'
    };

return(

  
  <nav>
   <h1> Picture Portal </h1>
   <ul className="navbar_link">
       <Link style={navStyle} to='/Home'>
       <li> Home</li>
       </Link>
       <Link style={navStyle} to='/Login'>
       <li> Login</li>
       </Link>
       <Link style={navStyle} to='Signup'>
       <li> Signup</li>
       </Link >
       <Link style={navStyle} to='Pictures'>
       <li> Pictures</li>
       </Link>
       
   </ul>

  </nav>
 

)
}

export default Navbar;