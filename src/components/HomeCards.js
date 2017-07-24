import React from 'react';

const HomeCards = _ => {
    return (
        <div>
            <section className="home-cards-main">
                <div className="card-box">
                    <span className="circle"><i className="fa fa-handshake-o fa-3x" aria-hidden="true"></i></span>
                    <p>Connect today to speak to one of our people, etc etc etc</p>
                </div>
                <div className="card-box">
                    <span className="circle"><i className="fa fa-book fa-3x" aria-hidden="true"></i></span>
                    <p>Current literature available in regards to LGBTQIA older adults health and wellness</p>
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