import React from 'react';
import Hamburger from '.././components/Hamburger.js';
import Navbar from '.././components/Navbar.js';
import donatePic from '../img/donatepic.jpeg';
import StripeComp from '.././components/StripeComp.js'

const Donate = _ => {
    return (
        <div>
            <Hamburger></Hamburger>
            <Navbar></Navbar>
            <div>
                <img src={donatePic} className="hero-image" alt="meet the team" />
            </div>
            <StripeComp />
        </div>
        );
    }


export default Donate