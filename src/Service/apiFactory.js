import fetch from 'node-fetch';
import { getListApi, getMovieOrTvApi } from './api';

const option = {
	baseUrl: 'http://api.themoviedb.org/3/',
	searchMovie: 'search/multi',
	topMovie: 'movie/top_rated',
	popularMovie: 'movie/popular',
	topTv: 'movie/top_rated',
	popularTv: 'movie/popular',
	apikey: 'apikey'
};

const apiMovieOrTvFactory = getMovieOrTvApi(fetch)(option.apikey)(option.baseUrl);

export const createSearchMovie = apiMovieOrTvFactory(option.searchMovie);
export const createSearchTV = apiMovieOrTvFactory(option.searchTv);

const getListFactory = getListApi(fetch)(option.apikey)(option.baseUrl);

export const createGetTopMovie = getListFactory(option.topMovie);
export const createGetPopularMovie = getListFactory(option.popularMovie);
export const createGetTopTv = getListFactory(option.topTv);
export const createGetPopularTv = getListFactory(option.popularTv);
