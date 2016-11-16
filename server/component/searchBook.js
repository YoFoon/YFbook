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

	var deferred = Q.defer();
	request.
		get( url )
		.end( function( err, res ) {
			if(err) {
				deferred.reject(err);
			} else {
				var data = [];

				var $ = cheerio.load(res.text);

				var lists = $(".result-item");
				for( var i = 0, listLen = lists.length; i < listLen; i++ ) {
					var list = lists.eq(i);
					var title = list.find('.result-game-item-title-link em').html();
					var url = list.find('.result-game-item-title-link').attr('href');
					var intro = list.find('.result-game-item-desc').html();

					data.push({
						title: title,
						url: url,
						intro: intro
					});
				}

				deferred.resolve(data);
			}
		})
	this.body = yield deferred.promise;
}