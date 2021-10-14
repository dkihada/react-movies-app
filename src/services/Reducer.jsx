export const reducer = (state, { type, payload }) => {
	switch (type) {
		case 'GET_MOVIES':
			return { ...state, movies: payload || [], loading: false };
		case 'GET_FILM':
			return { ...state, film: payload || [], loading: false };
		case 'GET_PAGES':
			return { ...state, pages: payload || 0, loading: false };
		case 'GET_TRAILER':
			return { ...state, trailer: payload || 0, loading: false };
		default:
			return state;
	}
};
