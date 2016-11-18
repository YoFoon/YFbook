var pref = "http://localhost:8000";

export default {
	searchBook(name) {
		return pref + '/search/' + name;
	},

	searchChapter: pref + '/searchChapter',

	searchText: pref + '/searchText',
}