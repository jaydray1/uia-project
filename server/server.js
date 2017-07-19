const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const config = require('../config.js');


const app = express();
app.use(bodyParser.json());
app.use(cors());

//*********Serves static build files to the front-end
app.use(express.static(__dirname + "./../build"));

//*********Massive allows you to create sql files to populate your DB with */
massive(config.connectionString).then(dbInstance => app.set('db', dbInstance));




app.listen(config.port, () => {console.log(`Listening on port ${config.port}`); } );