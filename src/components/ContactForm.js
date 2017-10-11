import React, {Component} from 'react'
import axios from 'axios'
// var Spinner = require('react-spinkit');

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

            firstName: '',
            lastName: '',
            email: '',
            volunteer: false,
            fundraise: false,
            stayInformed: false,
            successStories: false,
            messsage: '',
            services: false,
            hidden: "hidden"


        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
        });
    }
    

    handleSubmit(event) {
        event.preventDefault();
                    
        axios.post('/api/contactpost', { 
            firstName: this.state.firstName
          , lastName: this.state.lastName
          , email: this.state.email
          , volunteer: this.state.volunteer
          , fundraise: this.state.fundraise
          , stayInformed: this.state.stayInformed
          , successStories: this.state.successStories
          , message: this.state.message
          , services: this.state.services
         })
        .then (this.setState({
            firstName: ""
            , lastName: ""
            , email: ""
            , volunteer: ""
            , fundraise: ""
            , stayInformed: ""
            , successStories: ""
            , message: ""
            , services: ""
        }))
        .catch( error => console.log(error));
    }

    render() {

        return (
            
            <div className={this.state.hidden}>
           
            <div className="main-contact">
                <section className="main-contact">
                <div id="contact">
                <div className="form-group form-group-lg">

                  <form onSubmit={this.handleSubmit}> 

                    <label for="firstname">First Name</label>
                        <input 
                            type="text"
                            className="form-control"
                            name="firstName"
                            value={this.state.firstName} 
                            onChange={this.handleInputChange} />
                    
                   

                    
                        <label for="lastname">Last Name</label>
                            <input
                            type="text"
                            className="form-control"
                            name="lastName"
                            value={this.state.lastName}
                            onChange={this.handleInputChange} />
                   
                    
                    
                        <label for="email">Email</label>
                            <input 
                            className="form-control"
                            name="email"
                            type="email"
                            value={this.state.email}
                            onChange={this.handleInputChange} />
                    
                            <label for="message">Message</label>
                            <textarea 
                            className="form-control"
                            name="message"
                            type="text"
                            value={this.state.message}
                            onChange={this.handleInputChange} />
                   
                        <h4>Contact Purpose</h4>

                        <div className="checkbox">
                            <label>
                                <input 
                                name="services"
                                type="checkbox"
                                checked={this.state.services}
                                onChange={this.handleInputChange}
                                  /> 
                            Request Services
                            </label>
                        </div>

                        <div className="checkbox">
                            <label>
                                <input
                                name="volunteer"
                                type="checkbox" 
                                checked={this.state.volunteer}
                                onChange={this.handleInputChange}
                                 />
                            Volunteer
                            </label>
                        </div>

                        <div className="checkbox">
                            <label>
                                <input
                                name="fundraise" 
                                type="checkbox" 
                                checked={this.state.fundraise}
                                onChange={this.handleInputChange}
                                 />
                            Fundraise
                            </label>
                        </div>

                        <div className="checkbox">
                            <label>
                                <input 
                                 name="stayInformed"
                                 type="checkbox"
                                 checked={this.state.stayInformed}
                                 onChange={this.handleInputChange}
                                  /> 
                            Stay Informed 
                            </label>
                        </div>

                        <div className="checkbox">
                            <label>
                                <input 
                                name="successStories"
                                type="checkbox"
                                checked={this.state.successStories}
                                onChange={this.handleInputChange}
                                  /> 
                            Hear Success Stories
                            </label>
                        </div>
                    <div className="g-recaptcha" data-sitekey="6Lfq1iwUAAAAAK7C2yghEAAtE_SNtnF04G-uoyKJ"></div>
                    <button type ="submit" value="Submit" className="btn-primary btn-large">Send</button>
                </form> 
                </div>
                </div>
                </section>
                </div>
            </div>
        );
    }
}

export default ContactForm