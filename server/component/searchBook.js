var cheerio = require('cheerio');
var async = require('async');
var eventproxy = require('eventproxy');
var fetchUrl = require("./../config/fetchUrl");
var Q = require('q');
var request = require('superagent');

module.exports = function *(next) {
	var name = this.params.name;

	var _this = this;

	var url = fetchUrl.biqugeSearch + "s=287293036948159515" + "&q=" + encodeURIComponent(name);

	console.log(url);
	var deferred = Q.defer();
	request.
		get( url )
		.end( function( err, res ) {
			if(err) {
				deferred.reject(err);
			} else {
				deferred.resolve(res.text);
			}
		})
	this.body = yield deferred.promise;

}