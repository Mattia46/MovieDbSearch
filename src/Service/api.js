export const getListApi = fetch => apikey => baseUrl => pathUrl => {
	const url = `${baseUrl}${pathUrl}`;
	return fetch(url, {
		method: 'GET',
    	headers: {
			apikey: apikey,
			'Content-Type': 'application/json'
    	},
	})
    	.then(data => data.json())
		.catch(err => err);
};


export const getMovieOrTvApi = fetch => apikey => baseUrl => pathUrl => movie =>{
	const url = `${baseUrl}${pathUrl}`;
	const params = { 'query': movie };
	return fetch(url, {
		method: 'GET',
    	headers: {
			'apikey': apikey,
			'Content-Type': 'application/json'
		},
		params: params
	})
    	.then(data => data.json())
    	.catch(err => err);
};
