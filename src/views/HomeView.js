import React from 'react';
import Hamburger from '.././components/Hamburger.js';
import Footer from '.././components/Footer.js';
import HomeCards from '.././components/HomeCards.js';
import Navbar from '.././components/Navbar.js';
import grandma from '../img/twoguys.jpeg';
import CaroBar from '.././components/Slick.js';
import Sponsor from '.././components/Sponsors.js';
import logo from '../img/logononame.png';
import umbrella from '../img/umbrella.jpeg';


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
                <h2>United In Aging</h2>
                <img src={logo} className="logo-name" alt="logo_with_name" height="70em" />
                <h2>Home</h2>
        </div>
        </div> 

         
            {/* <img src={umbrella} className="umbrella" alt="umbrellas" /> */}
        
         <HomeCards></HomeCards> 
          <CaroBar></CaroBar>  
        <p className="support-tag">United in Aging is Supported By</p>
        <Sponsor></Sponsor>
         <Footer></Footer> 
        </div>
        
    )
}

export default HomeView