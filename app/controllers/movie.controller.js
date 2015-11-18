'use strict';

var request = require('request');
var Promise = require('bluebird');
var config = require('../config/config.js');
var _ = require('lodash');
var Movie = require('../models/movie.schema');


//create Movie
exports.createMovie = function(req, res) {
    var movie = new Movie(req.body); 
    console.log(movie.name);
    

    // save the movie and check for errors
    movie.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'Movie created!' });
    });
};

