'use strict';

var express = require('express');
var router = express.Router();
var movies = require('../controllers/movie.controller');
//Scheduler Routes

router.route('/')
	.post(movies.createMovie)
	.get(movies.findMovies);
router.route('/:movieName')
	.get(movies.findMoviesByName);	

module.exports = router;	