
const bodyParser = require('body-parser');
const express = require('express')
const app = express();
const PORT = 3001
const bcrypt = require('bcrypt');
var cors = require('cors')
const pgp= require('pg-promise')()
const connectionString= {
    "host": "localhost",
    "port": 5432,
    "database": "comprof",
    "user": "postgres"
  };

const db = pgp(connectionString)
const jwt = require('jsonwebtoken')
app.use(cors())
// parse application/json
app.use(bodyParser.json())
app.use(function(req, res, next) {
  //
  // res.header("Access-Control-Allow-Headers: Authorization")
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, Authorization,X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(PORT, function(){
  console.log('Server is running...')
})
//---------------------------------------------------------------
