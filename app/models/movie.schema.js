
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var MovieSchema   = new Schema({
    name: {
    	type:String,
    	required:true,
    	unique:true
    }
});

module.exports = mongoose.model('Movie', MovieSchema);