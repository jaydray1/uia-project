import React, { Component } from 'react';
import CaroBar from '.././components/Slick.js';
import Sponsor from '.././components/Sponsors.js';
import Quotes from '.././components/quotesColumns';
import HomeCards from '.././components/HomeCards.js';

class HomeMain extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hidden: "hidden"
        }
    }
    componentWillMount() {
        var that = this;
        setTimeout(function() {
            that.show();
        }, that.props.wait);
     }
     show() {
         this.setState({hidden: ""})
     }
     render() {
         return (
             <div className={this.state.hidden}>
                <div className="mission">
                    <div><i className="fa fa-quote-left fa-3x" aria-hidden="true"></i></div>
                    <div className="mission-text">
                    United in Aging Inc. Is a nonprofit designed to create safe spaces for LGBTQIA older adults. Our mission is to provide consulting, educational information, and tools to long term care facilities, such as nursing homes and assisted living centers, to help foster a culture of awareness and inclusion.
                    </div>
                    <div><i className="fa fa-quote-right fa-2x" aria-hidden="true"></i></div>
                </div>

         
        
                <HomeCards></HomeCards> 
                <CaroBar></CaroBar>  
                <Quotes></Quotes>
                <p className="support-tag">UNITED IN AGEING IS SUPPORTED BY</p>
                <Sponsor></Sponsor>
             </div>
         )
     }
}

export default HomeMain

