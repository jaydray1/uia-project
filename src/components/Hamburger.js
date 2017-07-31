import React, { Component } from 'react';
import Navdrop from './Navdrop';
// import LogoNo from '../img/logononame.png';

class Hamburger extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            hamburgerShow: false
        }

        this.showHamburger = this.showHamburger.bind(this);
    }

showHamburger() {
    this.setState({
        hamburgerShow: !this.state.hamburgerShow
    })
}

render() {
    return (
        <div className="hamburgler">

            
             {/* <div id="logo-stick">
                <img src={LogoNo} alt="logo" />
            </div>   */}

            <div>
            <i className="fa fa-bars fa-2x" 
                aria-hidden="true" 
                onClick={this.showHamburger}
            />

            { this.state.hamburgerShow ? <Navdrop /> : null } 
            </div>

         </div>
        )
    }
}

export default Hamburger;