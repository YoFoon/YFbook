import React, { Component } from 'react';
import {Link } from 'react-router'
import ListAction from 'pages/book/actions/listAction';
import ListStore from 'pages/book/stores/listStore';

export default class BookIndex extends Component{

	constructor(props) {
		super(props);
	}

  render() {
    return (
    	<div>
    		<div className="content">
    			{this.props.children}
    		</div>
	      <ul className="bottom">
    			<li><Link to="book/all">书架</Link></li>
    			<li><Link to="book/search">找书</Link></li>
    		</ul>
	    </div>
    )
      
  }

};
