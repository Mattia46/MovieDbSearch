import fetch from 'node-fetch';
const apikey = process.env.API_KEY;
const baseUrl = 'http://api.themoviedb.org/3/';
const searchUrl = 'search/multi';

export const getListApi = fetch => apikey => baseUrl => pathUrl => {
	const url = `${baseUrl}${pathUrl}?api_key=${apikey}`;
	return fetch(url, {
		method: 'GET',
	})
		.then(data => data.json())
		.catch(err => err);
};


export const getMovieOrTvApi = fetch => apikey => baseUrl => pathUrl => movie =>{
	const url = `${baseUrl}${pathUrl}?api_key=${apikey}&query=${movie}`;
	return fetch(url, {
		method: 'GET',
	})
    	.then(data => data.json())
    	.catch(err => err);
};

export const apiFactoryList = getListApi(fetch)(apikey)(baseUrl);
export const apiFactorySearch = getMovieOrTvApi(fetch)(apikey)(baseUrl)(searchUrl);
