import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main/Main';
import ExampleBoundary from '../sentry';
import './components/MovieCard/MovieCard.css';
import './components/Main/Main.css';

ReactDOM.render(
	<ExampleBoundary />,
	document.getElementById('root')
);
