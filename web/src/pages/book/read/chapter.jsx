import React, { Component } from 'react';
import ListAction from 'pages/book/actions/listAction';
import ListStore from 'pages/book/stores/listStore';
import _ from 'lodash';

export default class ReadChapter extends Component{

	constructor(props) {
		super(props);
		this.state = {
			chapter: []
		}
	}

	componentDidMount() {

		ListAction.getChapter('/' + this.props.params.code).then( (data) => {
			this.state.chapter = data;
			this.setState({
				chapter: data
			})
		})
	}

	handleClick(url){
		url = url.split('/').join('YF');
		window.location.href = '#/read/text/' + url;
	}

  render() {
    return (
      <ul className="chapter-list">
  			{
  				_.map(this.state.chapter, (item, index) => {
  					return (
  						<li key={index} onClick={this.handleClick.bind(this,item.url)}>
  							{item.name}
  						</li>
  					)
  				})
  			}
  		</ul>
    )
  }

};