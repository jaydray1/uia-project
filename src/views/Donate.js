import React from 'react';
import Hamburger from '.././components/Hamburger.js';
import Navbar from '.././components/Navbar.js';
import donatePic from '../img/donatepic.jpeg';
import StripeComp from '.././components/StripeComp.js';
import Footer from '.././components/Footer.js';
import logo from '../img/logononame.png';

const Donate = _ => {
    return (
        <div className>
            <Hamburger></Hamburger>
            <Navbar></Navbar>
            <div>
                <img src={donatePic} className="hero-image" id="donate-image" alt="donate" />
            </div>

            <div className="Hero-sub">
                <div className="Hero-sub-sub">
                <h2>United In</h2>
                <img src={logo} className="logo-name" alt="logo_with_name" height="100em" />
                <h2>Aging</h2>
                </div>
            </div>
        
        <div className="donate-main">
            <div class="pay-button">
                <p>
                    Insert some stuff about donating here:
                </p>
                <StripeComp />
            </div>
            <Footer />
        </div>
        </div>
        );
    }


export default Donate