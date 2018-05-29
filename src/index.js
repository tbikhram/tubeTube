
import React from 'react';
import ReactDOM from 'react-dom'

// 1.create a new component, should produce some HTML
// 2.take this component's generated HTML and put it on the page (in the DOM)

// 1.
const App = () => {
	return <div> hello there</div>;
}



 


ReactDOM.render(<App />, document.querySelector('.container'));