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
          <div><h3>“United in Aging Inc. is a nonprofit designed 
          to create safe spaces for LGBTQIA older adults. Our 
          mission is to provide consulting, educational information, 
          and tools to long term care facilities, such as nursing 
          homes and assisted living centers, to help foster a culture 
          of awareness and inclusion.”</h3></div>
          <div><h3>#2</h3></div>
          <div><h3>#3</h3></div>
        </Slider>
      </div>
    );
  }
}
export default CaroBar;