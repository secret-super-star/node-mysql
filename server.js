var express = require('express')
var mysql = require('mysql')
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
})); // support encoded bodies

port = process.env.PORT || 3000;

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sampleDB'
})

connection.connect(function(error) {
  if (!!error) {
    console.log('Error')
  } else {
    console.log('Connected');
  }
})

app.listen(port);

console.log('API server started on: ' + port);

var routes = require('./app/routes/approutes'); //importing route
routes(app); //register the route
