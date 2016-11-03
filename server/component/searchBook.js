var cheerio = require('cheerio');
var async = require('async');
var eventproxy = require('eventproxy');
var fetchUrl = require("./../config/fetchUrl");
var Q = require('q');
var request = require('superagent');

module.exports = function *(next) {
	var name = this.params.name;

	var _this = this;
	request
			.get( fetchUrl.biquge )
			.end( function( err, res ) {
				//_this.body = res.text;
			})

	this.body = "abc";
}