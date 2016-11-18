var test = require("./../component/test");
var SearchBook = require("./../component/searchBook");
var SearchChapter = require("./../component/searchChapter");
var SearchText = require('./../component/searchText');

module.exports = function(router) {

	router.get("/", test);

	router.get("/search/:name", SearchBook);

	router.post("/searchChapter", SearchChapter);

	router.post('/searchText', SearchText);

}