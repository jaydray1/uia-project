import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import stripe from '.././components/stripeKey.js';
import axios from 'axios';


class DonateStripe extends Component {
  onToken = (token) => {
    token.card = void 0;
    console.log('token', token);
    axios.post('http://localhost:3030/api/payment', { token, amount: 100 } )
    .then(response => {
      alert('we are in business')
    });
  }

render() {
    return (
        <div>
            <StripeCheckout 
            token={this.onToken}
            stripeKey={stripe.pub_key}
            amount={1000}
        />
            
     </div>
        );
    }
}

export default DonateStripe