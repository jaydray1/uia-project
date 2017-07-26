import React from 'react';
import Hamburger from '.././components/Hamburger.js';
import ContactForm from '.././components/ContactForm.js';
import Footer from '.././components/Footer.js';
// import Hero from '.././components/Hero.js';
import Navbar from '.././components/Navbar.js';
import contactPic from '../img/contactpic.jpg';


const Contact = _ => {
    return (
        <div className>
            <Hamburger></Hamburger>
            <Navbar></Navbar>
            <div>
                <img src={contactPic} className="hero-image" alt="meet the team" />
            </div>
            <ContactForm></ContactForm> 
            <section id="contact-foot-main">
                <div className="contact-foot">
                    <Footer></Footer>
                </div>
            </section>
        </div>
            
    )
}

export default Contact


