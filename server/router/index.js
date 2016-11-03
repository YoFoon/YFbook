var test = require("./../component/test");
var SearchBook = require("./../component/searchBook");

module.exports = function(router) {

	router.get("/", test);

	router.get("/search/:name", SearchBook);

}