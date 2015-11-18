'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Schema definition
var MovieSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    followers: {
        type: Number,
        requiered: true
    },
    description: {
        type: String
    }
});

// validation
MovieSchema.path('name').validate(function(v) {
    console.log("validate movie name");
    console.log(v);
    return v.length > 5 && v.length < 20;
}, 'Movie name should be between 5 and 20 characters');

MovieSchema.path('description').validate(function(v) {
    console.log("validate description");
    console.log(v);
    return v.length > 10 && v.length < 80;
}, 'Movie description should be more than 10 characters');


module.exports = mongoose.model('Movie', MovieSchema);