
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
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

		this.state = { 
			videos: [],
			selectedVideo: null 

		};
		this.videoSearch('surfboards');
}


videoSearch(term){
		YTSearch({key: API_KEY, term: term}, (videos) => {
		 this.setState({ 
		 	videos: videos, 
		 	selectedVideo: videos[0]

		 });
 	});
}


render(){
	return(
		<div>
			<SearchBar onSearchTermChange={term => this.videoSearch(term)} />
			<VideoDetail video={this.state.selectedVideo} />
			<VideoList
				onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
				videos ={this.state.videos} />
		</div>
		);

	}
}



 


ReactDOM.render(<App />, document.querySelector('.container'));