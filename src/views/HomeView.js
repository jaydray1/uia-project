import React from 'react';
import Hamburger from '.././components/Hamburger.js';
import Footer from '.././components/Footer.js';
import HomeCards from '.././components/HomeCards.js';
import Navbar from '.././components/Navbar.js';
import grandma from '../img/twoguys.jpeg';
import ButtonUp from '.././components/ButtonUp.js';
import CaroBar from '.././components/Slick.js';
import Sponsor from '.././components/Sponsors.js';
import logo from '../img/logononame.png';

const HomeView = _ => {
    return (
        <div className="home-main">
                
        <Hamburger></Hamburger>
        <Navbar></Navbar>
        <div>
            <img src={grandma} className="hero-image" alt="hero" id="home-image" />
        </div>

        <div className="Hero-sub">
            <div className="Hero-sub-sub" id="home-hero-sub">
                <h2>United In</h2>
                <img src={logo} className="logo-name" alt="logo_with_name" height="70em" />
                <h2>Aging</h2>
        </div>
        </div> 
        
        <HomeCards></HomeCards>
        <CaroBar></CaroBar>
        <ButtonUp></ButtonUp>
        <p className="support-tag">United in Aging is Supported By</p>
        <Sponsor></Sponsor>
        <Footer></Footer>
        </div>
        
    )
}

export default HomeView