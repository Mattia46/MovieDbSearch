import { getListApi, getMovieOrTvApi } from './api';
import { body, bodyWithParam, batmanObj, topMovies, fakeFetch, fakeFetchMovie } from './api.utils.js';

describe('API: ', () => {
	it('should retrieve a list of top movies', () => {
		getListApi(fakeFetch)('apikey')('baseUrl/')('movie/top_rated')
			.then(data => {
				expect(data).toEqual(topMovies);
				expect(fakeFetch).toBeCalledWith('baseUrl/movie/top_rated?api_key=apikey', body);
			});
	});

	it('should retrieve Batman Movie', () => {
		getMovieOrTvApi(fakeFetchMovie)('apikey')('baseUrl/')('search/movie')('Batman')
			.then(data => {
				expect(data).toEqual(batman);
				expect(data.results).toHaveLength(2);
				expect(fakeFetchMovie).toBeCalledWith('baseUrl/search/movie?api_key=apikey', bodyWithParam);
			});
	});
});
