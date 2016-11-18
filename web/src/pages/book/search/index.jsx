import React, { Component } from 'react';
import ListAction from 'pages/book/actions/listAction';
import ListStore from 'pages/book/stores/listStore';
import API from 'config/api';
import request from 'superagent';


export default class SearchIndex extends Component{

	constructor(props) {
		super(props);
		this.state={
			value: ""
		}
	}

	handleChange(e){
		this.state.value = e.target.value;
		this.setState({
			value: this.state.value
		})
	}

	handleClilck() {
		if(this.state.value === ''){
			return false;
		}
		window.location.href="/#/book/search/"+ encodeURIComponent(this.state.value);
	}

  render() {

  	var list = [];

    return (
      <div className="search-page">
      	<div className="row search-component">
      		<div className="col-20"><input type="text" onChange={this.handleChange.bind(this)} /></div>
      		<div className="col-4"><button onClick={this.handleClilck.bind(this)}>搜索</button></div>
      	</div>
      	<ul>
      		{list}
      	</ul>
      </div>
    )
  }
};