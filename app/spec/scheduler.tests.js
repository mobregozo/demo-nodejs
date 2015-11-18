'use strict';

var api = require('../controllers/scheduler.controller');
var config = require('../config/config.js');

describe('When making a http request', function() {
	this.timeout(5000);
	it('response should be 200 OK', function(done) {
		api.makeHttpRquestGet(config.basePath + '/scheduler/job/facebookServiceJob', config.args).then(function(response) {
			expect(response).not.to.be.null;
			console.log('HTTP Service Successfully Called');		
			done();
		})
		.catch(function(error){
			console.log(error);
			done();
		})
	});
});