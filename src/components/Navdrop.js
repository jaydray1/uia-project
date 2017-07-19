import React from 'react';
import {Link} from 'react-router-dom';

const Navdrop = _ => {
    return (
        <div className="nav-table">
            <ul>
                <Link className="linkage" to="/">
                <li>Home</li>
                </Link>
                <Link className="linkage" to="/about">
                <li>About</li>
                </Link>
                <Link className="linkage" to="/contact">
                <li>Contact</li>
                </Link>
                <Link className="linkage" to="/donate">
                <li>Donate</li>
                </Link>
            </ul>
        </div>
    )
}

export default Navdrop;