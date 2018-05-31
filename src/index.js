
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
// Api_key from console.developers.google.com
const API_KEY = 'AIzaSyBiJgOpJnWJO9SNEeQiwA_8YbhzQ-IKeJ0';

// 1.create a new component, should produce some HTML
// 2.take this component's generated HTML and put it on the page (in the DOM)
// using youtube api to search for surfboards
// YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
// 	console.log(data);
// });


class App extends Component {
	constructor(props){
		super(props);

		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
		 this.setState({ videos });
 	});
}

render(){
	return(
		<div>
			<SearchBar />
			<VideoList videos ={this.state.videos} />
		</div>
		);

	}
}



 


ReactDOM.render(<App />, document.querySelector('.container'));