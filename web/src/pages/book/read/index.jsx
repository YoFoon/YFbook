import React, { Component } from 'react';
import {Link } from 'react-router'
import ListAction from 'pages/book/actions/listAction';
import ListStore from 'pages/book/stores/listStore';

export default class ReadIndex extends Component{

	constructor(props) {
		super(props);
	}

  render() {
    return (
    	<div>
    		<div className="read">
    			{this.props.children}
    		</div>
	    </div>
    )
      
  }

};
