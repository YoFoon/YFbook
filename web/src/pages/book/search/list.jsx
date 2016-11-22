import React, { Component } from 'react';
import ListAction from 'pages/book/actions/listAction';
import ListStore from 'pages/book/stores/listStore';
import _ from 'lodash';

export default class ListIndex extends Component{

	constructor(props) {
		super(props);
		this.state = {
			bookList: []
		}
	}

	componentDidMount() {
		ListAction.getBook(this.props.params.name).then( (data) => {
			this.state.bookList = data;
			this.setState({
				bookList: data
			})
		})
	}

	handleClick(url){
		let code = url.split('/')[3];
		window.location.href = '#/read/chapter/' + code;
	}

  render() {
    return (
      <ul className="book-list">
      	{_.map(this.state.bookList, (item,index) => {
      		return (
      			<li key={index} onClick={this.handleClick.bind(this, item.url)}>
      				<h3>{item.title}</h3>
      				<p>{item.author}</p>
      				<p>{item.type}</p>
      				<p>{item.intro}</p>
      			</li>
      		)
      	})}
      </ul>
    )
  }

};