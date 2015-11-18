// Imports
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// MAIN SETUP
// =============================================================================

// Create our Express application
var app = express();

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.json());

// middleware to use for all requests
app.use(function(req, res, next) {
	// Go to the next route rule
	next();
});


var config = {
  db:'mongodb://mati:1234@ds039504.mongolab.com:39504/devspark'
};

var db = mongoose.connect(config.db, function(err) {
    if (err) {
      console.log(err);
      return;
    }
    console.log('Successfully connected!');
});


// ROUTES
// =============================================================================

var router = require('./app/routes/index.route')(app);

// START THE SERVER
// =============================================================================
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Application Running In Port ' + port);