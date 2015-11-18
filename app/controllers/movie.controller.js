'use strict';

var mongoose = require('mongoose');
var Movie = require('../models/movie.schema');

var Promise = require('bluebird');

require('bluebird').promisifyAll(mongoose);
// Mongoose model as a promise in your controller

exports.createMovie = function(req, res) {
    
    var movie = new Movie(req.body);
    console.dir(movie.name);
    movie.saveAsync().then(function() {
        res.jsonp(movie);
    }).catch(function(e) {
        console.log(e);
        return res.status(400).send({
            message: e.errors.name.message
        });
    });
};

exports.findMovies = function(req,res) {
    Movie.find().exec(function(err, movies) {
        if (err) {
            return res.status(400).send({
                message: err
            })
        } else {
            res.jsonp(movies);
        }
    });
}

exports.findMoviesByName = function(req,res) {
    Movie.find({name:req.params.movieName}).exec(function(err, movies) {
        if (err) {
            return res.status(400).send({
                message: err
            })
        } else {
            res.jsonp(movies);
        }
    });
}