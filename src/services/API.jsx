const _apiBase = 'https://kinopoiskapiunofficial.tech/api';
const _apiKey = '4fa00bd4-9132-4722-b0d3-5ea6515ac863';
const sendHeaders = {
	'Content-Type': 'application/json',
	'X-API-KEY': _apiKey,
};

const searchList = async (str, page = 1) => {
	const response = await fetch(
		`${_apiBase}/v2.1/films/search-by-keyword?keyword=${str}&page=${page}`,
		{ headers: sendHeaders }
	);
	return await response.json();
};

const getTopMovies = async (type, page = 1) => {
	const response = await fetch(
		`${_apiBase}/v2.2/films/top?type=${type}&page=${page}`,
		{ headers: sendHeaders }
	);
	return await response.json();
};

const getFilmInfo = async (id) => {
	const response = await fetch(`${_apiBase}/v2.2/films/${id}`, {
		headers: sendHeaders,
	});
	return await response.json();
};

const getTrailer = async (id) => {
	const response = await fetch(`${_apiBase}/v2.2/films/${id}/videos`, {
		headers: sendHeaders,
	});
	return await response.json();
};

export { getTopMovies, searchList, getFilmInfo, getTrailer };
