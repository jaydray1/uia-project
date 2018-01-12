import React, { Component } from 'react';
import Rob from '../img/robedit7.png';
import Jm from '../img/bizpic.jpg';
import kate from '../img/kateedit2.png';
import terrell from '../img/terrelledit6.png';
import julia from '../img/whiteedit2.png';

class Bios extends Component {
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
        }, that.props.wait)
        setTimeout(function() {
            that.hide();
        }, that.props.done)
     }
     show() {
         this.setState({hidden: ""})
     }
     hide() {
         this.setState({hidden: "Hidden"})
     }

     render() {
         return (
        <div className={this.state.hidden}>
            <div className="card-wrapper">
            
                <div className="about-about-image"><img src={julia} alt="Julia White" className="img-card" /></div>
                    <div className="card">
                        <div className="holder">
                            <h1>Julia White</h1>
                            <div className="title">Managing Director</div>
                            <br />
                            <div>Master of Social Work, University of Pennsylvania 2019</div>
                            <br/>
                            <p>Serving the older population of the greater Philadelphia area 
                            for the past five years while working for the State of New Jersey 
                            and City of Philadelphia, Julia has firsthand experience helping 
                            those whose generation doesn’t accept the LGBTQIA community as 
                            readily as millennials. Through her experiences, Julia has 
                            developed both a passion and a vision for how to educate 
                            communities and long term care facilities. Her goal is to 
                            open up communication and  bring awareness to the greater 
                            population about the need to improve the treatment and respect 
                            of all older adults but specifically LGBTQIA older adults.</p>
                            <a href="https://www.linkedin.com/in/rob-versaw"><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>
            
                        <div className="about-about-terrell"><img src={terrell} alt="Terrell Wyche" className="img-card" /></div>
                            <div className="card">
                                <div className="holder">
                                    <h1>Terrell Wyche</h1>
                                    <p className="title">Consultant</p>
                                    <p>PhD School Psychology Howard University 2022</p>
                                    <p>Terrell has been an active member of the LGBTQIA community for 
                                    several years. As an Academic Advisor for the last six years at Utah 
                                    Valley University, he has been active in helping students succeed in 
                                    their various degrees. He has worked with a very large population of 
                                    students including non-traditional students. He is very passionate 
                                    about the many concerns that affect the learning of students including 
                                    accepting their sexuality. He is excited to work with older adults, 
                                    by opening up dialogue about the LGBTQIA community.   </p>
                                    <a href="https://www.linkedin.com/in/rob-versaw"><i className="fa fa-linkedin"></i></a>
                                </div>
                        </div>
                    
                 <div className="about-about-rob"><img src={Rob} alt="Rob Versaw" className="img-card" /></div> 
                    <div className="card">
                            <div className="holder">
                                <h1>Rob Versaw</h1>
                                <p className="title">Operations</p>
                                <p>George Washington University Master of Science in Computer Systems Engineering 2015</p>
                                <p>As an active member of the LGBTQIA community, and having 
                                spent time in parts of the country less welcoming to those from 
                                different background, Rob is passionate about United in Aging’s 
                                mission to aid older adults. With a strong background in product 
                                and project management, Rob’s role with the organization is to keep the proverbial trains running.</p>
                                <a href="https://www.linkedin.com/in/rob-versaw"><i className="fa fa-linkedin"></i></a>
                            </div>
                    </div>
                 
                 <div className="about-about-kate"><img src={kate} alt="Kate Drinkwater" className="img-card" /></div> 
            
                    <div className="card">
                        <div className="holder">
                            <h1>Kathryn Drinkwater</h1>
                            <p className="title">Marketing</p>
                            <p>Paul Mitchell Graduate & L'oreal Brand Rep</p>
                            <p>Kathryn first became acquainted with the older adult population 
                            by offering her hair styling services to older adults in nursing homes. 
                            Being a servant and  advocate since day one, Kate will manage the social 
                            media marketing and branding for United in Aging Inc. </p>
                        </div>
                    </div>
            
            <div className="about-about-kate"><img src={Jm} alt="Jon-Michael Dreher" className="img-card" /></div>
                    <div className="card">
                        <div className="holder">
                            <h1>Jon-Michael Dreher</h1>
                            <p className="title">Web Developer</p>
                            <p>Full Stack Web Development</p>
                            <p>After working in consulting and real estate for the first several 
                            years of his professional career, Jon-Michael pivoted to software 
                            development. As he embarks on the journey away from paperwork and 
                            PowerPoint, Jon-Michael has graciously volunteered the development 
                            of a modern website to help United in Aging further their mission. 
                            With family members and friends part of the LGBTQIA community and 
                            with a strong sense of belonging and connection, Jon-Michael welcomes 
                            the opportunity to help support and strengthen understanding and 
                            acceptance among the many and diverse members of the human family.</p>
                            <a href="https://www.linkedin.com/in/jonmichaeldreher"><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </div>
         )
     }
}

export default Bios