import React, { Component} from 'react';
import { 
	createSearchMovie, 
	createSearchTV, 
	createGetTopMovie, 
	createGetPopularMovie, 
	createGetTopTv, 
	createGetPopularTv 
} from './../Service/apiFactory.js';

export default class Main extends Component {
	state = {
	  movie: []
	}


	render() {
	  return (
			<div>
		  	<input />
			</div>
	  );
	}
}