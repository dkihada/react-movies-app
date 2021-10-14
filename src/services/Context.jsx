import { createContext, useReducer } from 'react';
import { reducer } from './Reducer';

export const StateContext = createContext();

const InitialState = {
	movies: [],
	film: [],
	pages: 0,
	loading: true,
	trailer: [],
};

export const StateProvider = ({ children }) => {
	const [movies, setMovies] = useReducer(reducer, InitialState);

	movies.getMovies = (data) => {
		setMovies({ type: 'GET_MOVIES', payload: data });
	};

	movies.getFilm = (data) => {
		setMovies({ type: 'GET_FILM', payload: data });
	};

	movies.getPages = (data) => {
		setMovies({ type: 'GET_PAGES', payload: data });
	};

	movies.getTrailerLink = (data) => {
		setMovies({ type: 'GET_TRAILER', payload: data });
	};

	return (
		<StateContext.Provider value={movies}>{children}</StateContext.Provider>
	);
};
