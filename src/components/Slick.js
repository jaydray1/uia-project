import React, { Component } from 'react';
import Slider from 'react-slick';

class CaroBar extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      // speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 7000,
      arrows: false,
    };
    return (
      <div className="quote-caro">
        <Slider {...settings}>
          <div><h3>#1</h3></div>
          <div><h3>#2</h3></div>
          <div><h3>#3</h3></div>
        </Slider>
      </div>
    );
  }
}
export default CaroBar;