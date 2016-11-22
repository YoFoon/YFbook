import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, useRouterHistory, Redirect } from 'react-router'
import { createHashHistory } from 'history'

import 'styles/index.less';

import 'config/globe';

const validate = function (next, replace, callback) {
    const isLoggedIn = !!window.USER_INFO
    if (!isLoggedIn) {
        //window.location.href = '/tenant/#/login?return_insite='+ encodeURIComponent(location.href);
        //return false
    }
    callback()
};

const NotFound = React.createClass({
    render() {
        return <h2>Not found</h2>
    }
});

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

import BookMain from 'pages/book/index.jsx';
import BookList from 'pages/book/list/index.jsx';
import Search from 'pages/book/search/index.jsx';
import SearchList from 'pages/book/search/list.jsx';
import Read from 'pages/book/read/index.jsx';
import Chapter from 'pages/book/read/chapter.jsx';
import Text from 'pages/book/read/text.jsx';


ReactDOM.render((
  <Router history={appHistory}>
    <Route path="/" onEnter={validate}>
      <IndexRedirect to="book/all" />
      <Redirect from="/" to="/book/all"/>
      <Redirect from="/book" to="/book/all"/>
      <Route path="book" component={BookMain}>
        <Route path="all" component={BookList} />
        <Route path="search" component={Search} />
        <Route path="search/:name" component={SearchList} />
      </Route>
      <Router path="read" component={Read}>
        <Route path="chapter/:code" component={Chapter} />
        <Route path="text/:code" component={Text} />
      </Router>
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
), document.getElementById('main'));
