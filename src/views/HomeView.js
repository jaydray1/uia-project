import React from 'react';
import Hamburger from '.././components/Hamburger.js';
// import Navbar from '.././components/Navbar.js';
// import Navdrop from '.././components/Navdrop.js'
import Hero from '.././components/Hero.js';
// import HeroSub from '.././components/Hero_sub.js';
import Footer from '.././components/Footer.js';
import HomeCards from '.././components/HomeCards.js';

const HomeView = _ => {
    return (
        <div className="home-main">
                
        
        <Hamburger></Hamburger>
        <Hero></Hero>
        {/* <HeroSub></HeroSub>  */}
        <h1 className="welcome">Welcome Home!</h1>
        
        <HomeCards></HomeCards>
        <Footer></Footer>
        </div>
        
    )
}

export default HomeView