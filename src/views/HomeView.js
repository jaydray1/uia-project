import React from 'react';
import Hamburger from '.././components/Hamburger.js';
import Footer from '.././components/Footer.js';
import Navbar from '.././components/Navbar.js';
import grandma from '../img/twoguys.jpeg';
import logo from '../img/logononame.png';
import HomeMain from '../components/HomeMain';
// import SpinMe from '../components/SpinMe';


const HomeView = () => {
     
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
                {/* <SpinMe
                cancel={3000}
                /> */}
                <HomeMain 
                />
            

            
                <Footer></Footer> 
            </div>
            
        )
}

export default HomeView