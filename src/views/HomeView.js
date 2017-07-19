import React from 'react';
import {render} from 'react-dom';
import Hamburger from '.././components/Hamburger.js';
import Navbar from '.././components/Navbar.js';
import Navdrop from '.././components/Navdrop.js'
// import Hero from '.././components/Hero.js';
// import HeroSub from '.././components/Hero_sub.js';

const HomeView = _ => {
    return (
        <div>
                
        
        <Hamburger></Hamburger>
         {/* <Hero></Hero>
        <HeroSub></HeroSub>  */}
        <h1>Welcome Home!</h1>
        </div>
            
    )
}

export default HomeView