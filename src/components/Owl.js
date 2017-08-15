import React, {Component} from 'react';
import OwlCarousel from 'react-owl-carousel2';
import rainbow from '../img/rainbowflag2.jpg';

class Owl extends Component {
    render() {
        const options = {
            items: 1,
            center: true,
            nav: false,
            rewind: true,
            autoplay: true,
            loop: true
        };
        return (
            <OwlCarousel 
            ref="car" 
            options={options} 
             >
            <div><img src={rainbow} alt="The Last of us" id="car"/></div>
            <div><p>kasd faksjhdf laksjdfh laskjdfh laskdjfh </p></div>
            <div><img src="/img/fullimage3.jpg" alt="Mirror Edge"/></div>
        </OwlCarousel>
        )
    }
}
export default Owl

