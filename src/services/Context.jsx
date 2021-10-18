import { createContext, useReducer } from 'react';
import { reducer } from './Reducer';

export const StateContext = createContext();

const InitialState = {
	movies: [],
	film: [],
	pages: 0,
	loading: true,
	trailer: [],
	type: {
		_currentType: '',
		_top_100: 'top_100_popular_films',
		_top_250: 'top_250_best_films',
		_top_await: 'top_await_films',
	},
	search: '',
};

export const StateProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, InitialState);

	state.getMovies = (data) => {
		dispatch({ type: 'GET_MOVIES', payload: data });
	};

	state.getFilm = (data) => {
		dispatch({ type: 'GET_FILM', payload: data });
	};

	state.getPages = (data) => {
		dispatch({ type: 'GET_PAGES', payload: data });
	};

	state.getTrailerLink = (data) => {
		dispatch({ type: 'GET_TRAILER', payload: data });
	};

	state.getSearch = (data) => {
		dispatch({ type: 'SEARCH', payload: data });
	};

	return (
		<StateContext.Provider value={state}>{children}</StateContext.Provider>
	);
};
