const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')
    , config = require('../config.js')
    , app = express()
    , saveNames = require('./controller/save_names.js')
    , getTeam = require('./controller/get_team.js')

app.use(bodyParser.json());
app.use(cors());

//*********Serves static build files to the front-end
app.use(express.static(__dirname + "./../build"));

//*********Massive allows you to create sql files to populate your DB with */
massive(config.connectionString).then(dbInstance => app.set('db', dbInstance));

app.post('/api/contactpost', saveNames.postContact)

app.get('/api/team', getTeam.getMember)

app.listen(config.port, () => {console.log(`Listening on port ${config.port}`); } );