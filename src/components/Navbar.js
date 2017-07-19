import React from 'react';
import logo from '../img/logo-name.png';

const Navbar = _ => {
    return (
        <div className="Nav-main">
          <div class="logo-parent">
            <img src={logo} className="img fluid" alt="logo" />
         </div>
            <div className="Nav-header"> 
                <div>Home</div>
                <div>About</div> 
                <div>Contact</div>
                <div>Help Us Help You</div>
            </div>
        </div>  
        
    )
}

export default Navbar