import React from 'react';
import { Link } from 'react-router-dom';


function Navbar () {
    const navStyle = {
        color: 'white'
    };

return(

  
  <nav>
   <h1>  Book store </h1>
   <ul className="navbar_link">
       <Link style={navStyle} to='/Fiction'>
       <li> Fiction</li>
       </Link>
       <Link style={navStyle} to='/Nonfiction'>
       <li> Nonfiction</li>
       </Link>
       <Link style={navStyle} to='Search'>
       <li> Search</li>
       </Link >
        </ul>
</nav>
 

)
}

export default Navbar;