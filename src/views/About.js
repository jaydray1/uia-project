import React from 'react';
import Hamburger from '.././components/Hamburger.js';
import Footer from '.././components/Footer.js';
import Navbar from '.././components/Navbar.js';
import team from '../img/meetus.jpeg';
import logo from '../img/logononame.png';
import Bios from '../components/bios';
// import SpinMe from '../components/SpinMe';



    
    const About = _ => {
        return (
            <div>
                
                <Hamburger></Hamburger>
                <Navbar></Navbar>
                <div>
                     <img src={team} className="hero-image" id="about-image" alt="meet the team" /> 
                </div>
                <div className="Hero-sub">
                <div className="Hero-sub-sub" id="home-hero-sub">
                    <h2>United In Aging</h2>
                    <img src={logo} className="logo-name" alt="logo_with_name" height="70em" />
                    <h2>Meet Us</h2>
            </div>
            </div>
                {/* <SpinMe/> */}
                <Bios 
                wait={1000}
                done={3000}
                />
            
    
           <Footer></Footer>
    
            </div>
                
        )
    }


export default About