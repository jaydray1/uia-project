import React, {Component} from 'react';
import {render} from 'react-dom';
import Hamburger from '.././components/Hamburger.js';

class ContactForm extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>Contact Form ME!</h1>
                 <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type ="submit" value="Submit" />
                </form> 
            </div>
        );
    }
}

export default ContactForm