import React from 'react';
import Hamburger from '.././components/Hamburger.js';
import ContactForm from '.././components/ContactForm.js';
import Footer from '.././components/Footer.js';
// import Hero from '.././components/Hero.js';
import Navbar from '.././components/Navbar.js';
import contactPic from '../img/contactpic.jpg';
import logo from '../img/logononame.png';
// import SpinMe from '../components/SpinMe';

const Contact = _ => {
    return (
        <div className>
            <Hamburger></Hamburger>
            <Navbar></Navbar>
            <div>
                <img src={contactPic} className="hero-image" id="contact-image" alt="meet the team" />
            </div>

            <div className="Hero-sub">
            <div className="Hero-sub-sub" id="home-hero-sub">
                <h2>United In Aging</h2>
                <img src={logo} className="logo-name" alt="logo_with_name" height="70em" />
                <h2>Contact Us</h2>
        </div>
        </div> 

            {/* <SpinMe/> */}
            <ContactForm 
            wait={1000}
            />
            <section id="contact-foot-main">
                <div className="contact-foot">
                    <Footer></Footer>
                </div>
            </section>
        </div>
            
    )
}

export default Contact


