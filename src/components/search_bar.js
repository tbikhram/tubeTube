import React, { Component } from 'react';


class SearchBar extends Component {
	// before using state inside of component you need t0 initalizing the state 
	constructor(props){
		super(props)
		//the state term is empty(empty search bar) waiting for text to be entered thats
		//why term: is an empty string
		this.state = {term: ''}
	}
	render() {

		return (
			<div className="search-bar">
		<input 
		value={this.state.term}
	//the state is updated when text is entered in the input box
		onChange ={event => this.onInputChange(event.target.value)} />	
		</div>
		);
	}

	onInputChange(term){
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;
