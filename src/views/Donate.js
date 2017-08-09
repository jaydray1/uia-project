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
            <div className="Hero-sub-sub" id="home-hero-sub">
                <h2>United In Aging</h2>
                <img src={logo} className="logo-name" alt="logo_with_name" height="70em" />
                <h2>Donate</h2>
        </div>
        </div> 
        
        <div className="donate-main">
            <div class="pay-button">
                <div className="donate-now">
                    Donate Now
                </div>
                <p className="coming-soon">COMING SOON</p>
            </div>
                <StripeComp />
        </div>
            <Footer />
        </div>
        );
    }


export default Donate