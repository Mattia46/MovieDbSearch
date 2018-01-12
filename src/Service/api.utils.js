export const bodyWithParam = {
	method: 'GET',
	headers: {
		'apikey': 'apikey',
		'Content-Type': 'application/json'
	},
	params: { 'query': 'Batman' }
};

export const body = {
	method: 'GET',
	headers: {
		'apikey': 'apikey',
		'Content-Type': 'application/json'
	}
};

export const batmanObj = {
	page: 1,
	results: [
		{
			title: 'Batman',
			poster_path: '/kBf3g9crrADGMc2AMAMlLBgSm2h.jpg',
			release_date: '1989-06-23'
		},
		{
			title: 'Batman_begins',
			poster_path: '/kBf3g9crrADGMc2AMAMlLBgSm2h.jpg',
			release_date: '1999-06-23'
		}
	]
};

export const topMovies = {
	page: 1,
	results: [
		{
			title: 'Dilwale Dulhania Le Jayenge',
			poster_path: '/kBf3g9crrADGMc2AMAMlLBgSm2h.jpg',
			release_date: '1939-06-23'
		},
		{
			title: 'In a Heartbeat',
			poster_path: '/kBf3g9crrADGMc2AMAMlLBgSm2h.jpg',
			release_date: '1999-06-23'
		}
	]
};

export const fakeFetchMovie = jest.fn().mockReturnValue(Promise.resolve({
	json: () => (batman)
}));

export const fakeFetch = jest.fn().mockReturnValue(Promise.resolve({
	json: () => (topMovies)
}));