'use strict';

var express = require('express');
var router = express.Router();
var movie = require ('./movie.route');


module.exports = function(app) {
	//Schedule Job Path
    app.use('/movies', movie);
};