import Reflux from 'reflux';

export default Reflux.createActions({

	getBook:{
		asyncResult: true
	},

  getChapter: {
    asyncResult: true
  },

  getText: {
  	asyncResult: true
  }
})
