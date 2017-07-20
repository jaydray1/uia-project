import React, {Component} from 'react';
import {render} from 'react-dom';
import Hamburger from '.././components/Hamburger.js';

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
            successStories: false

        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
    }

    render() {
        return (
            <div>
                <h1>Contact Form ME!</h1>
                <div id="contact">
                <div className="form">

                  <form onSubmit={this.handleSubmit}> 

                    <label>
                        First Name
                        <input 
                            type="text"
                            className="form-control"
                            name="firstName"
                            value={this.state.firstName} 
                            onChange={this.handleInputChange} />
                        Last Name

                        <input
                            type="text"
                            className="form-control"
                            name="lastName"
                            value={this.state.lastName}
                            onChange={this.handleInputChange} />
                        Email

                        <input 
                            className="form-control"
                            name="email"
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInputChange} />


                        <h4>Subscription Options</h4>

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
                    </label> 
                    <input type ="submit" value="Submit" />
                </form> 
                </div>
                </div>
            </div>
        );
    }
}

export default ContactForm