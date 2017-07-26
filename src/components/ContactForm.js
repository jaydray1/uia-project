import React, {Component} from 'react';
import axios from 'axios';

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
        
        axios.post('/api/contactpost', { 
            firstName: this.state.firstName
          , lastName: this.state.lastName
          , email: this.state.email
          , volunteer: this.state.volunteer
          , fundraise: this.state.fundraise
          , stayInformed: this.state.stayInformed
          , successStories: this.state.successStories 
         })
        
        .then( (response) => console.log('updated!'))
        .catch( error => console.log(error));
    }

    render() {
        return (
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
                    
                   

                    
                        <label for="firstname">Last Name</label>
                            <input
                            type="text"
                            className="form-control"
                            name="lastName"
                            value={this.state.lastName}
                            onChange={this.handleInputChange} />
                   
                    
                    
                        <label for="firstname">Email</label>
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
                    <button type ="submit" value="Submit" className="btn-primary btn-large">Send</button>
                </form> 
                </div>
                </div>
                </section>
            </div>
        );
    }
}

export default ContactForm