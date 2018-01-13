import React from 'react';
import { mount, shallow, render } from 'enzyme';
import MovieCard from './MovieCard';

const movie = {
    poster_path: 'Batman_poster',
    title: 'Batman',
    vote_average: '9',
    overview: 'Great movie',
    imageUrl: 'https://image.tmdb.org/t/p/w300/'
};

describe('Main Component', () => {
	const wrapper = shallow(<MovieCard data={movie}/>);

    it('should has children', () => {
        expect(wrapper.find('.mainDiv')).toHaveLength(1);
        expect(wrapper.find('.img')).toHaveLength(1);
    });

    it('should has a title', () => {
        expect(wrapper.contains(movie.title)).toBe(true);
    });

    it('should has an overview', () => {
        expect(wrapper.contains(movie.overview)).toBe(true);
    });

    it('should has a poster', () => {
        expect(wrapper.contains(<img src="https://image.tmdb.org/t/p/w300/Batman_poster" />)).toBe(true);
    });

    it('should has a rate', () => {
        expect(wrapper.contains(movie.vote_average)).toBe(true);
    });
});
