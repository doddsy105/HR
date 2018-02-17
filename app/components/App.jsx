import React, { Component } from 'react';
import Results from './api';

class App extends Component { 
	constructor(props) {
    super(props);
    this.state = {
		title: "Bright HR data",
    }
  }


	render() {
		return (
		<div>
		<h1 className="main-site-title">{this.state.title}</h1>
			<Results />
		</div>
		);
	}
}

export default App;