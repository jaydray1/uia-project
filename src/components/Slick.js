import React, { Component } from 'react';
import Slider from 'react-slick';
import { Link } from "react-router-dom";

class BarberSlider extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
    };
    return (
      <div className="barber-caro">
        <Slider {...settings}>
          <div><h3></h3><img className="barber-img" src={aboutbackground} alt=""/></div>
          <div><img className="barber-img" src={barber} alt=""/><h3></h3></div>
          <div><img className="barber-img" src={zionbackground} alt=""/><h3></h3></div>
        </Slider>
        <Link to="/barbers">
          <div className="barberButton barberButtonBack"></div>
          <div className="barberButton">Meet the Barbers</div>
        </Link>
      </div>
    );
  }
}
export default BarberSlider;