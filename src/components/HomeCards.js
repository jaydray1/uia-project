import React from 'react';
import {Link} from 'react-router-dom';

const HomeCards = _ => {
    return (
        <div>
            <section className="home-cards-main">
                <div className="card-box">
                     <Link className="linkage" to="/contact">
                    <div className="circle"><i className="fa fa-handshake-o fa-3x" aria-hidden="true"></i></div>
                    </Link>
                    <p>One on one consulting can be provided for long term care facilities who 
                    want to strive</p>
                </div>
                <div className="card-box">
                    <span className="circle"><i className="fa fa-book fa-3x" aria-hidden="true"></i></span>
                    <p className="card-content">Current resources available in regards to LGBTQIA older adults health and wellness</p>
                </div>
                <div className="card-box">
                    <span className="circle"><i className="fa fa-wrench fa-3x" aria-hidden="true"></i></span>
                    <p>Tools: we got tools</p>
                </div>
            </section>
        </div>
    )
}

export default HomeCards