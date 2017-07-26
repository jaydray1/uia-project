import React from 'react';
import {Link} from 'react-router-dom';

const Navdrop = _ => {
    return (
        <div>
            <div className="nav-table">
                <ul>
                    <Link className="linkage" to="/">
                    <li className="link-ham">Home</li>
                    </Link>
                    <Link className="linkage" to="/about">
                    <li className="link-ham">About</li>
                    </Link>
                    <Link className="linkage" to="/contact">
                    <li className="link-ham">Contact</li>
                    </Link>
                    <Link className="linkage" to="/donate">
                    <li className="link-ham">Donate</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Navdrop;