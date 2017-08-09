const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')
    , config = require('../config.js')
    , app = express()
    , saveNames = require('./controller/save_names.js')
    , getTeam = require('./controller/get_team.js')
    , getFacts = require('./controller/get_facts.js')
    , stripe = require('stripe')(config.secret_key);

app.use(bodyParser.json());
app.use(cors());

//*********Serves static build files to the front-end
app.use(express.static(__dirname + "./../build"));

//*********Massive allows you to create sql files to populate your DB with */
massive(config.connectionString).then(dbInstance => app.set('db', dbInstance));

app.post('/api/contactpost', saveNames.postContact)

app.get('/api/team', getTeam.getMember)

// app.get('/api/facts', getFacts.getFact)

app.post('/api/payment', function(req, res, next){
  //convert amount to pennies
  const amountArray = req.body.amount.toString().split('');
  const pennies = [];
  for (var i = 0; i < amountArray.length; i++) {
    if(amountArray[i] === ".") {
      if (typeof amountArray[i + 1] === "string") {
        pennies.push(amountArray[i + 1]);
      } else {
        pennies.push("0");
      }
      if (typeof amountArray[i + 2] === "string") {
        pennies.push(amountArray[i + 2]);
      } else {
        pennies.push("0");
      }
    	break;
    } else {
    	pennies.push(amountArray[i])
    }
  }
  const convertedAmt = parseInt(pennies.join(''));

  const charge = stripe.charges.create({
  amount: convertedAmt, // amount in cents, again
  currency: 'usd',
  source: req.body.token.id,
  description: 'Test charge from react app'
}, function(err, charge) {
    if (err) return res.sendStatus(500)
    return res.sendStatus(200);
  // if (err && err.type === 'StripeCardError') {
  //   // The card has been declined
  // }
});
});

app.listen(config.port, () => {console.log(`Listening on port ${config.port}`); } );