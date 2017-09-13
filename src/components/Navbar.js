import React from 'react';
import logo from '../img/logo-name.png';
import {Link} from 'react-router-dom';

const Navbar = _ => {
    return (
        <div className="Nav-main">
          <div class="logo-parent">
              <Link className="linkage" to="/">
            <img src={logo} alt="logo" id="logo-img" />
             </Link>
         </div>
            <div className="nav-header"> 
                <ul>
                    <Link className="linkage" to="/">
                    <li className="link-nav">HOME</li>
                    </Link>
                    <Link className="linkage" to="/about">
                    <li className="link-nav">MEET US</li>
                    </Link>
                    <Link className="linkage" to="/contact">
                    <li className="link-nav">CONTACT</li>
                    </Link>
                    <Link className="linkage" to="/donate">
                    <li className="link-nav">DONATE</li>
                    </Link>
                </ul>
            </div>
        </div>  
        
    )
}

export default Navbar