import React from 'react';
import Hamburger from '.././components/Hamburger.js';
import Footer from '.././components/Footer.js';
import HomeCards from '.././components/HomeCards.js';
import Navbar from '.././components/Navbar.js';
import grandma from '../img/twoguys.jpeg';
import CaroBar from '.././components/Slick.js';
import Sponsor from '.././components/Sponsors.js';
import logo from '../img/logononame.png';
import Quotes from '.././components/quotesColumns'


const HomeView = _ => {
    return (
        <div className="home-main">

        <Hamburger></Hamburger>
        <Navbar></Navbar>
         <div className="umbrella-holder">
            <img src={grandma} className="hero-image" alt="hero" id="home-image" />
        </div> 
       

        <div className="Hero-sub">
            <div className="Hero-sub-sub" id="home-hero-sub">
                <h2>United In</h2>
                <img src={logo} className="logo-name" alt="logo_with_name" height="70em" />
                <h2>Aging</h2>
        </div>
        </div> 
        <div className="mission">
            <div><i className="fa fa-quote-left fa-3x" aria-hidden="true"></i></div>
            <div className="mission-text">
            United in Aging Inc. Is a nonprofit designed to create safe spaces for LGBTQIA older adults. Our mission is to provide consulting, educational information, and tools to long term care facilities, such as nursing homes and assisted living centers, to help foster a culture of awareness and inclusion.
            </div>
            <div><i className="fa fa-quote-right fa-2x" aria-hidden="true"></i></div>
        </div>

         
        
         <HomeCards></HomeCards> 
          <CaroBar></CaroBar>  
          <Quotes></Quotes>
        <p className="support-tag">United in Aging is Supported By</p>
        <Sponsor></Sponsor>
         <Footer></Footer> 
        </div>
        
    )
}

export default HomeView