import React, { Component } from 'react';
import Slider from 'react-slick';
// import axios from 'axios';

class CaroBar extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     facts: []
  //   };
  // }

  // componentDidMount() {
  //   axios.get('/api/facts')
  //   .then(res => {
  //     const quotes = res.data.map(item => item.data);
  //     this.setState({facts:quotes});
  //   }).catch(err=>console.log(err))
  // }
  
  render() {
// console.log(this.state.quotes)
    var settings = {
      dots: false,
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

          <div className="slick-header">
            <span><i className="fa fa-quote-left fa-4x" aria-hidden="true"></i></span>
            <br/>
            <br/>
            <br/>
            <div className="slick-content">
            LGBT older adults do not access aging services out of fear of harassment or disapproval.</div></div>

            <div className="slick-header">
            <span><i className="fa fa-quote-left fa-4x" aria-hidden="true"></i></span>
            <br/>
            <br/>
            <br/>
          <div className="slick-content">
            Only 22% of LGBT seniors felt comfortable being open about their sexual identity ( 2011 report in the National Resource Center on LGBT Aging).</div></div>

          <div className="slick-header">
          <span><i className="fa fa-quote-left fa-4x" aria-hidden="true"></i></span>
            <br/>
            <br/>
            <br/>
          <div className="slick-content">LGBT older adult population is expected to double by 2030.</div></div>

          <div className="slick-header">
          <span><i className="fa fa-quote-left fa-4x" aria-hidden="true"></i></span>
            <br/>
            <br/>
            <br/>
          <div className="slick-content">Although 80% of long-term care in the U.S. is provided by family members, LGBT elders are 2x as likely to be single and 4x more likely to be without children than their heterosexual counterparts.</div></div>
        </Slider>
      </div>
    );
  }
}
export default CaroBar;
            