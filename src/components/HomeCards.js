import React from 'react';
import {Link} from 'react-router-dom';

const HomeCards = _ => {
    return (
        <div>
             <section className="home-cards-main">

                <div className="card-box">
                    <div className="circle-holder">
                     <Link className="linkage" to="/contact">
                    <div className="circle"><i className="fa fa-handshake-o" aria-hidden="true"></i></div>
                    </Link>
                    </div>
                    <div className="card-caller">CONSULTING</div>
                    <div className="card-content">One on one consulting can be provided for long term care facilities who want to strive towards a more inclusive environment for LGBTQIA older adults </div>
                </div>

                <div className="card-box">
                    <div className="circle-holder">
                    <div className="circle"><i className="fa fa-book" aria-hidden="true"></i></div>
                    </div>
                    <div className="card-caller">EDUCATIONAL INFORMATION</div>
                    <div className="card-content">Current resources available in regards to LGBTQIA older adults health and wellness</div>
                </div>

                <div className="card-box">
                    <div className="circle-holder">
                    <div className="circle"><i className="fa fa-wrench" aria-hidden="true"></i></div>
                    </div>
                    <div className="card-caller">TOOLS</div>
                    <div className="card-content">
                        As we continue to expand our reach and offerings, please standby for
                        additional tools to help you accomplish your goals.
                    </div>
                </div>
            </section> 

        </div>
        
    )
}

export default HomeCards