import React, { Component } from 'react';
import ListAction from 'pages/book/actions/listAction';
import ListStore from 'pages/book/stores/listStore';
import _ from 'lodash';

export default class ReadText extends Component{

	constructor(props) {
		super(props);
		this.state = {
			text: {},
			load: false,
			bookCode:'/' + this.props.params.code.split('YF')[1] + '/',
			nextText: {},
			nextUrl: '' 
		}
	}

	componentDidMount() {
		ListAction.getText( this.props.params.code.split('YF').join('/')).then( (data) => {
			this.state.text = data;
			this.state.load = true;
			this.setState({
				text: data,
				load: true
			})
			ListAction.getText( this.state.bookCode + data.next ).then( (nextData) => {
				this.state.nextText = nextData;
				this.setState({
					nextText: nextData
				})
			})
		})
	}

	componentDidUpdate(prevProps, prevState) {
		if(this.state.nextUrl !=  prevState.nextUrl){
			ListAction.getText( this.state.bookCode + this.state.nextUrl ).then( (nextData) => {
				this.state.nextText = nextData;
				this.setState({
					nextText: nextData
				})
			})
		}
	}

	handleClick(url,type) {
		if(type == 'next'){
			this.setState({
				text: this.state.nextText,
				nextUrl: this.state.nextText.next
			})
		} else {
			ListAction.getText( this.state.bookCode + url ).then( (data) => {
				this.state.text = data;
				this.setState({
					text: data,
					nextUrl: data.next
				})
			})
		}
		document.body.scrollTop = 0;
	}

	handleClickToMenu(url) {
		window.location.href = '#/read/chapter' + url;
	}

  render() {
    return (
      <div>
      	{
      		!this.state.load
      		? null:
      		<div className="text">
      			<h2 className="title">{this.state.text.title}</h2>
      			<div className="text-content">
	      			{
			  				_.map(this.state.text.text, (item, index) => {
			  					return (
			  						<p key={index}>{item}</p>
			  					)
			  				})
			  			}
		  			</div>
	  				<ul className="page clearfix">
	  					<li onClick={this.handleClick.bind(this,this.state.text.prev,'prev')}>上一章</li>
	  					<li onClick={this.handleClickToMenu.bind(this,this.state.text.menu)}>目录</li>
	  					<li onClick={this.handleClick.bind(this,this.state.text.next,'next')}>下一章</li>
	  				</ul>
      		</div> 
      	}		
  		</div>
    )
      
  }

};