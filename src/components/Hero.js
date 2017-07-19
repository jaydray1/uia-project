import React from 'react';
import grandma from '../img/grandma.jpeg'; 

const Hero = _ => {
    return (

            <div className="hero-main">
                <img src={grandma} className="img-responsive" alt="hero" />
            </div>
       
    )
}

export default Hero