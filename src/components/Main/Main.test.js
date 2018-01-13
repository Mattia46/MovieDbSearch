import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Main from './Main';
import MovieButton from './../Button/Button.js';
import MovieCard from './../MovieCard/MovieCard.js';

describe('Main Component', () => {
	const wrapper = shallow(<Main />);

	it('should has a title', () => {
		expect(wrapper.contains(<h1> The Movie DB </h1>)).toBe(true);
	});

	it('should has a state with a movie array', () => {
		expect(wrapper.state().movie).toEqual([]);
	});

	it('should has a list of buttons', () => {
        expect(wrapper.find(MovieButton)).toHaveLength(4);
	});

	it('should has a list of Movies', () => {
        wrapper.setState({movie: [
            {
                id: 1,
                title: 'Batman',
                vote_average: '9',
                poster_path: 'url'
            },
            {
                id: 2,
                title: 'Superman',
                vote_average: '9',
                poster_path: 'url'
            }

        ]});
        expect(wrapper.find(MovieCard)).toHaveLength(2);
	});
});
