import './Movies.css';
import { Movie } from '../Movie/Movie';
import { StateContext } from '../../services/Context';
import { useContext } from 'react';

function Movies() {
	const { movies } = useContext(StateContext);

	return (
		<div className='movies'>
			{movies.length ? (
				movies.map((movie) => {
					return <Movie key={movie.filmId} {...movie} />;
				})
			) : (
				<p className='nothing'> Nothing found </p>
			)}
		</div>
	);
}

export { Movies };
