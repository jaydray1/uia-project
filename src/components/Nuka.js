import React, {Component} from 'react'
import Carousel from 'nuka-carousel'
import rainbow from './../img/rainbowflag2.jpg'

class Nuka extends Component {
    render() {
        return (
            <Carousel
            width='100%'
            dragging={true}    
            slidesToShow={1}
            cellAlign='center'
            cellSpacing={25}
            >
            <div className="nuka-1">LGBT older adults do not access aging services out of fear of harassment or disapproval.</div>
            <img src={rainbow} alt="some"/>
            <div>Some text!</div>
            <div>Some text!</div>
            <div>Some text!</div>

            
          </Carousel>
        )
    }
}
export default Nuka