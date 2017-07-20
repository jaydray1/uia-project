const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')
    , config = require('../config.js')
    , app = express();

app.use(bodyParser.json());
app.use(cors());

// var db = massive.connectSync({
//   connectionString: config.connectionString
// })

//*********Serves static build files to the front-end
app.use(express.static(__dirname + "./../build"));

//*********Massive allows you to create sql files to populate your DB with */
massive(config.connectionString).then(dbInstance => app.set('db', dbInstance));



app.listen(config.port, () => {console.log(`Listening on port ${config.port}`); } );