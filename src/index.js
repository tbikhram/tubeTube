
import React from 'react';
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar'
// Api_key from console.developers.google.com
const API_KEY = 'AIzaSyBiJgOpJnWJO9SNEeQiwA_8YbhzQ-IKeJ0';

// 1.create a new component, should produce some HTML
// 2.take this component's generated HTML and put it on the page (in the DOM)

// 1.
const App = () => {
	return <div> 
			<SearchBar />
			</div>;
}



 


ReactDOM.render(<App />, document.querySelector('.container'));