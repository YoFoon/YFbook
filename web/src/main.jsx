import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, useRouterHistory, Redirect } from 'react-router'
import { createHashHistory } from 'history'

import 'antd/dist/antd.min.css';
import 'styles/index.less';

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


ReactDOM.render((
    <Router history={appHistory}>
        <Route path="/" onEnter={validate}>
            <IndexRedirect to="book/all" />
            <Redirect from="/" to="/book/all"/>
            <Redirect from="/book" to="/book/all"/>
            <Route path="book" component={BookMain}>
                <Route path=":filterUrl" component={BookList} />
            </Route>
            <Route path="*" component={NotFound} />
        </Route>
    </Router>
), document.getElementById('main'));
