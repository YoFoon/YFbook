import Reflux from 'reflux';
import API from 'config/api';
import ListAction from 'pages/book/actions/listAction';

import request from 'superagent';

export default Reflux.createStore({
  listenables:[ListAction],
  
  onGetChapter(url){
    request
      .post( API.searchChapter )
      .send({url: url})
      .end(function(err, res) {
        res = res.text;
        res= JSON.parse(res);
        ListAction.getChapter.completed(res.data);
      })
  },

  onGetText(url) {
    request
      .post( API.searchText )
      .send({url: url})
      .end(function(err,res){
        res = res.text;
        res = JSON.parse(res);
        ListAction.getText.completed(res.data);
      })
  }
});

