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
		_currentType: 'TOP_100_POPULAR_FILMS',
		_top_100: 'TOP_100_POPULAR_FILMS',
		_top_250: 'top_250_best_films',
		_top_await: 'TOP_AWAIT_FILMS',
	},
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

	return (
		<StateContext.Provider value={state}>{children}</StateContext.Provider>
	);
};
