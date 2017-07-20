import React from 'react';
import Hamburger from '.././components/Hamburger.js';
import Rob from '../img/robversaw.jpeg';
import Jm from '../img/bizpic.jpg';

const About = _ => {
    return (
        <div>
            <Hamburger></Hamburger>

        <div className="card">
            <img src={Rob} alt="Rob Versaw" className="img-card" />
            <div className="holder">
                <h1>Rob Versaw</h1>
                <p className="title">Director</p>
                <p>Duke University, MBA</p>
                <a href="https://www.linkedin.com/in/rob-versaw"><i className="fa fa-linkedin"></i></a>
            </div>
        </div>

        <div className="card">
            <img src={Rob} alt="Rob Versaw" className="img-card" />
            <div className="holder">
                <h1>Rob Versaw</h1>
                <p className="title">Director</p>
                <p>Duke University, MBA</p>
                <a href="https://www.linkedin.com/in/rob-versaw"><i className="fa fa-linkedin"></i></a>
            </div>
        </div>

        <div className="card">
            <img src={Rob} alt="Rob Versaw" className="img-card" />
            <div className="holder">
                <h1>Rob Versaw</h1>
                <p className="title">Director</p>
                <p>Duke University, MBA</p>
                <a href="https://www.linkedin.com/in/rob-versaw"><i className="fa fa-linkedin"></i></a>
            </div>
        </div>

        <div className="card">
            <img src={Jm} alt="Jon-Michael Dreher" className="img-card" />
            <div className="holder">
                <h1>Jon-Michael Dreher</h1>
                <p className="title">Web Developer</p>
                <a href="https://www.linkedin.com/in/jonmichaeldreher"><i className="fa fa-linkedin"></i></a>
            </div>
        </div>


        </div>
            
    )
}

export default About