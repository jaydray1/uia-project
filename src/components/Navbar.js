import React from 'react';
import logo from '../img/logo-name.png';
import {Link} from 'react-router-dom';

const Navbar = _ => {
    return (
        <div className="Nav-main">
          <div class="logo-parent">
            <img src={logo} alt="logo" id="logo-img" />
         </div>
            <div className="nav-header"> 
                <ul>
                    <Link className="linkage" to="/">
                    <li className="link-nav">Home</li>
                    </Link>
                    <Link className="linkage" to="/about">
                    <li className="link-nav">Meet Us</li>
                    </Link>
                    <Link className="linkage" to="/contact">
                    <li className="link-nav">Contact</li>
                    </Link>
                    <Link className="linkage" to="/donate">
                    <li className="link-nav">Donate</li>
                    </Link>
                </ul>
            </div>
        </div>  
        
    )
}

export default Navbar